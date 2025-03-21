"use strict";

const models = require("./../../models");
const User = models.User;
const Chat = models.Chat;
const Message = models.Message;
const ChatUser = models.ChatUser;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const users = await User.findAll({ limit: 2 });
    const chat = await Chat.create();
    await ChatUser.bulkCreate([
      {
        chatId: chat.id,
        userId: users[0].id,
      },
      {
        chatId: chat.id,
        userId: users[1].id,
      },
    ]);
    await Message.bulkCreate([
      {
        chatId: chat.id,
        fromUserId: users[0].id,
        message: "Hello, how are you?",
      },
      {
        chatId: chat.id,
        fromUserId: users[1].id,
        message: "I'm fine, thank you!",
      },
      {
        chatId: chat.id,
        fromUserId: users[1].id,
        message: "Long time no speak.",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
