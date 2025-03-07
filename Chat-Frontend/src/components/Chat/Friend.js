import React, { useEffect, useState } from "react";
import "./../../assets/scss/Chat/Friend.scss";
import { useSelector } from "react-redux";
import { userStatus } from "./../../utils/";

const Friend = ({ chat, click }) => {
  const { currentChat } = useSelector((state) => {
    return state.chat;
  });

  const [chatOpened, setChatOpened] = useState("");

  useEffect(() => {
    if (currentChat?.id === chat.id) {
      setChatOpened("opened");
    }
  }, [currentChat, chat.id]);

  const lastMessage = () => {
    const message = chat.Messages.length
      ? chat.Messages[chat.Messages.length - 1]
      : "";
    return message.type === "image" ? "image uploaded" : message.message;
  };

  return (
    <div onClick={click} className={`friend-list ${chatOpened}`}>
      <div>
        <img
          width="40"
          height="40"
          src={chat.Users[0].avatar}
          alt="User Avatar"
        />
        <div className="friend-info">
          <h4 className="m-0">
            {chat.Users[0].firstName} {chat.Users[0].lastName}
          </h4>
          <h6 className="m-0">{lastMessage()}</h6>
        </div>
      </div>
      <div className="friend-status">
        <span className={`online-status ${userStatus(chat.Users[0])}`}></span>
      </div>
    </div>
  );
};

export default Friend;
