import { useEffect } from "react";
import socketIOClient from "socket.io-client";

function useSocket(user, dispatch) {
  useEffect(() => {
    const url = "http://localhost:8800";
    const socket = socketIOClient.connect(url);

    socket.emit("join", user);

    socket.on("friends", (friends) => {
      console.log("Friends: ", friends);
    });

    socket.on("online", (user) => {
      console.log("Online: ", user);
    });

    socket.on("offline", (user) => {
      console.log("Offline: ", user);
    });
  }, [user, dispatch]);
}

export default useSocket;
