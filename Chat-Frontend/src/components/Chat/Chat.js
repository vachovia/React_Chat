import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./../Layout";
import {Error} from './';
import "./../../assets/scss/Chat/Chat.scss";
import { logoutAction } from "../../redux/slice/auth/actions";

const Chat = () => {
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => {
    return state.auth;
  });

  useEffect(() => {
    if (error?.error?.name === "TokenExpiredError") {
      dispatch(logoutAction());
    }
  }, [dispatch, error?.error?.name]);

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
