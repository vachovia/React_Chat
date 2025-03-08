import React from "react";
import "./../../assets/scss/Chat/MessageBox.scss";
import { Message } from "./";
import { useSelector } from "react-redux";

const MessageBox = ({ chat }) => {
  const { user } = useSelector((state) => {
    return state.auth;
  });

  return (
    <div id="message-box">
      {chat.Messages.map((message, index) => {
        return (
          <Message
            key={message.id}
            chat={chat}
            message={message}
            index={index}
            user={user}
          />
        );
      })}
    </div>
  );
};

export default MessageBox;
