import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "./../Layout";
import {Error} from './';
import "./../../assets/scss/Chat/Chat.scss";

const Chat = () => {
  const { user, error, loading } = useSelector((state) => {
    return state.auth;
  });

  return (
    <div id="chat-container">
      <Navbar />
      <div className="mt-4">
        <Error error={error}/>
        {loading && (
          <div className="d-flex justify-content-center align-content-center">
            <h4 className="text-danger">Submitting...</h4>
          </div>
        )}
      </div>
      <div id="chat-wrap">Data</div>
    </div>
  );
};

export default Chat;
