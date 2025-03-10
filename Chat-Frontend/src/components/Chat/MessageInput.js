import React, { useState } from "react";
import "./../../assets/scss/Chat/MessageInput.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const MessageInput = ({ chat }) => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const { user } = useSelector((state) => {
    return state.auth;
  });

  const handleMessage = (e) => {
    setMessage(e.target.value);
    // notify other users that user is still typing
  };

  const handleKeyDown = (e, imageUpload) => {
    if (e.key === "Enter") {
      sendMessage(imageUpload);
    }    
  };

  const sendMessage = (imageUpload) => {
    if (!message.length && !imageUpload) {
      return;
    }
    const msg = {
      type: imageUpload ? "image" : "text",
      fromUserId: user.id,
      toUserId: chat.Users.map((user) => user.id),
      chatId: chat.id,
      message: imageUpload ? image : message,
    };
    setImage("");
    setMessage("");

    console.log(msg);
    // send message to the server
  };

  return (
    <div id="input-container">
      <div id="message-input">
        <input
          type="text"
          placeholder="Message..."
          className="form-control"
          value={message}
          onChange={(e) => handleMessage(e)}
          onKeyDown={(e) => handleKeyDown(e, false)}
        />
        <FontAwesomeIcon icon={["far", "smile"]} className="fa-icon" />
      </div>
    </div>
  );
};

export default MessageInput;
