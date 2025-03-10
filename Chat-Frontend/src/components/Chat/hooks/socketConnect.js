import { useEffect } from "react";
import socketIOClient from "socket.io-client";

function useSocket(user, dispatch) {
  useEffect(() => {
    const url = "http://localhost:8800";
    const socket = socketIOClient.connect(url);

    socket.emit("join", user);

    socket.on("typing", (user) => {
      console.log("Event", user);
    });
  }, [user, dispatch]);
}

export default useSocket;
