import React, { useEffect, useState } from "react";
import "./../../assets/scss/Chat/Message.scss";

const Message = ({ user, chat, index, message }) => {
  const [lineMargine, setLineMargine] = useState("");

  useEffect(() => {
    if (index && chat && message && chat.Messages && chat.Messages.length) {
      if (index + 1 === chat.Messages.length) {
        return;
      }
      if (message.fromUserId === chat.Messages[index + 1].fromUserId) {
        setLineMargine("mb-10");
      } else {
        setLineMargine("mb-5");
      }
    }
  }, [index, chat, message]);

  return (
    <div
      className={`message ${lineMargine} ${
        message.fromUserId === user.id ? "creator" : ""
      }`}
    >
      <div
        className={message.fromUserId === user.id ? "owner" : "other-person"}
      >
        {message.fromUserId !== user.id ? (
          <h6 className="m-0">
            {message.User.firstName} {message.User.lastName}
          </h6>
        ) : null}
        {message.type === "text" ? (
          <p className="m-0">{message.message}</p>
        ) : (
          <img src={message.message} alt="User upload" />
        )}
      </div>
    </div>
  );
};

export default Message;
