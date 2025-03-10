import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./../Layout";
import {Error, FriendList, Messenger} from './';
import "./../../assets/scss/Chat/Chat.scss";
import { logoutAction } from "./../../redux/slice/auth/actions";
import { fetchChatsAction } from "./../../redux/slice/chat/actions";

import useSocket from './../Chat/hooks/socketConnect';

const Chat = () => {
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => {
    return state.auth;
  });

  useSocket(user, dispatch);

  useEffect(() => {
    if (error?.error?.name === "TokenExpiredError") {
      dispatch(logoutAction());
    }
  }, [dispatch, error?.error?.name]);

  useEffect(() => {
    dispatch(fetchChatsAction());
  }, [dispatch]);

  return (
    <div id="chat-container">
      <Navbar />
      <div className="mt-4">
        <Error error={error} />
        {loading && (
          <div className="d-flex justify-content-center align-content-center">
            <h4 className="text-danger">Loading...</h4>
          </div>
        )}
      </div>
      <div id="chat-wrap">
        <FriendList />
        <Messenger />
      </div>
    </div>
  );
};

export default Chat;
