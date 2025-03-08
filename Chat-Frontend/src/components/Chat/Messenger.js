import React, { useEffect, useState } from "react";
import "./../../assets/scss/Chat/Messenger.scss";
import { ChatHeader, MessageBox, MessageInput } from "./";
import { useSelector } from "react-redux";

const Messenger = () => {
  const { currentChat } = useSelector((state) => {
    return state.chat;
  });

  const [activeChat, setActiveChat] = useState(false);

  useEffect(() => {
    if (currentChat) {
      setActiveChat(true);
    }
  }, [currentChat]);

  return (
    <div id="messenger" className="shadow-light">
      {activeChat ? (
        <div id="messenger-wrap">
          <ChatHeader chat={currentChat} />
          <hr className="app-hr" />
          <MessageBox chat={currentChat} />
          <MessageInput chat={currentChat} />
        </div>
      ) : (
        <div>
          <h4 className="text-center">Select a chat to start messaging</h4>
        </div>
      )}
    </div>
  );
};

export default Messenger;
