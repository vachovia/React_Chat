import React from "react";
import "./../../assets/scss/Chat/FriendList.scss";
import { useDispatch, useSelector } from "react-redux";
import { Error, Friend } from "./";
import { setCurrentChatAction } from "../../redux/slice/chat/actions";

const FriendList = () => {
  const dispatch = useDispatch();

  const { chats, error, loading } = useSelector((state) => {
    return state.chat;
  });

  const openChat = (chat) => {
    dispatch(setCurrentChatAction(chat));
  }

  return (
    <div id="friends">
      <div id="title">
        <h3 className="m-0">Friends</h3>
        <button>Add</button>
      </div>
      <hr className="app-hr" />
      {error ? (
        <Error error={error} />
      ) : (
        <>
          {loading && (
            <div className="d-flex justify-content-center align-content-center">
              <h4 className="text-danger">Loading...</h4>
            </div>
          )}
          <div id="friends-box">
            {chats && chats.length > 0 ? (
              chats.map((chat) => {
                return (
                  <Friend
                    key={chat?.id}
                    chat={chat}
                    click={() => openChat(chat)}
                  />
                );
              })
            ) : (
              <div
                id="no-chat"
                className="d-flex justify-content-center align-content-center"
              >
                <h4 className="text-danger">No Friends</h4>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default FriendList;
