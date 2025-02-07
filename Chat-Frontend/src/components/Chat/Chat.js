import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "./../Layout";
import './../../assets/scss/Chat/Chat.scss';

const Chat = () => {
  const { user } = useSelector((state) => {
    return state.auth;
  });

  return (
    <div id="chat-container">
      <Navbar />
      <div id="chat-wrap">Data</div>
    </div>
  );
};

export default Chat;
