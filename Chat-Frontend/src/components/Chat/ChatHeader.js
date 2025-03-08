import React, { useState } from "react";
import "./../../assets/scss/Chat/ChatHeader.scss";
import { userStatus } from "./../../utils/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChatHeader = ({ chat }) => {
  const [chatOptions, setChatOptions] = useState({
    showChat: false,
    showAddFriend: false,
    showLeave: false,
    showDelete: false,
  });

  const handleChatOptions = () => {
    setChatOptions({ ...chatOptions, showChat: !chatOptions.showChat });
  }

  return (
    <>
      <div id="chatter">
        {chat.Users.map((user) => {
          return (
            <div key={user.id} className="chatter-info">
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <div className="chatter-status">
                <span className={`online-status ${userStatus(user)}`}></span>
              </div>
            </div>
          );
        })}
      </div>
      <FontAwesomeIcon
        className="fa-icon"
        icon={["fas", "ellipsis-v"]}
        onClick={() => handleChatOptions()}
      />
      {chatOptions.showChat ? (
        <div id="settings">
          <div>
            <FontAwesomeIcon className="fa-icon" icon={["fas", "user-plus"]} />
            <p>Add User to the Chat</p>
          </div>
          { chat.type === "group" ?
            <div>
              <FontAwesomeIcon
                className="fa-icon"
                icon={["fas", "sign-out-alt"]}
              />
              <p>Leave Chat</p>
            </div> : null
          }
          <div>
            <FontAwesomeIcon className="fa-icon" icon={["fas", "trash"]} />
            <p>Delete Chat</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ChatHeader;
