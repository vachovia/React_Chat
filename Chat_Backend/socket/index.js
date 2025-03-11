const socketIo = require("socket.io");
const { sequelize } = require("./../models");

const users = new Map();
const userSockets = new Map();

const SocketServer = (server) => {
  const io = socketIo(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    socket.on("join", async (user) => {
      let sockets = [];

      if (users.has(user.id)) {
        const existingUser = users.get(user.id);
        existingUser.sockets = [...existingUser.sockets, ...[socket.id]];
        users.set(user.id, existingUser);
        sockets = [...existingUser.sockets, ...[socket.id]];
        userSockets.set(socket.id, user.id);
      } else {
        users.set(user.id, { id: user.id, sockets: [socket.id] });
        sockets.push(socket.id);
        userSockets.set(socket.id, user.id);
      }

      const onlineFriends = []; // ids
      const chatters = await getChatters(user.id); // query

      // notify friends that user is online
      for (let i = 0; i < chatters.length; i++) {
        if (users.has(chatters[i])) {
          const chatter = users.get(chatters[i]);
          chatter.sockets.forEach((s) => {
            try {
              io.to(s).emit("online", user);
            } catch (e) {}
          });
          onlineFriends.push(chatter.id);
        }
      }

      // send to user sockets who is from friends are online
      sockets.forEach((s) => {
        try {
          io.to(s).emit("friends", onlineFriends);
        } catch (e) {}
      });
    });

    socket.on("disconnect", async () => {
      if (userSockets.has(socket.id)) {
        const user = users.get(userSockets.get(socket.id));
        if (user.sockets.length > 1) {
          user.sockets = user.sockets.filter((s) => {
            if (s !== socket.id) return true;
            userSockets.delete(s);
            return false;
          });
          users.set(user.id, user);
        } else {
          const chatters = await getChatters(user.id);
          for (let i = 0; i < chatters.length; i++) {
            if (users.has(chatters[i])) {
              const chatter = users.get(chatters[i]);
              chatter.sockets.forEach((s) => {
                try {
                  io.to(s).emit("offline", user);
                } catch (e) {}
              });
            }
          }

          userSockets.delete(socket.id);
          users.delete(user.id);
        }
      }
    });
  });
};

const getChatters = async (userId) => {
  try {
    const [result, metadata] = await sequelize.query(`
      select "cu"."userId" from "ChatUsers" as cu
      inner join (
        select "c"."id" from "Chats" as c
        where exists (
          select "u"."id" from "Users" as u
          inner join "ChatUsers" on "u"."id" = "ChatUsers"."userId"
          where "u"."id" = ${parseInt(
            userId
          )} and "c"."id" = "ChatUsers"."chatId"
        )
      ) as cjoin on cjoin.id="cu"."chatId"
      where "cu"."userId" != ${parseInt(userId)}
    `);

    return result.length ? result.map((el) => el.userId) : [];
  } catch (e) {
    console.log(e);
    return [];
  }
};

module.exports = SocketServer;
