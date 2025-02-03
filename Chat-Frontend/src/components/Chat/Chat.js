import React from "react";
import { useSelector } from "react-redux";

const Chat = () => {
  const { user } = useSelector((state) => {
    return state.auth;
  });

  return (
    <div className="text-center">
      <h2>Chat Screen</h2>
      {user && (
        <p>
          Welcome, {user?.firstName} {user?.lastName}
        </p>
      )}
    </div>
  );
};

export default Chat;
