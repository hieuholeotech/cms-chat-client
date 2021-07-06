import React, { useEffect, useState, useRef } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";

import ChatMessage from "../ChatMessage";

const ChatContent = ({ user }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [connection, setConnection] = useState();

  const latestChat = useRef(null);
  latestChat.current = chat;

  useEffect(() => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("https://localhost:5000/chathub")
        .withAutomaticReconnect()
        .build();

      setConnection(conn);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (!!connection && connection.connectionState !== "Connected")
      connection
        .start()
        .then(() => {
          console.log(
            "WS connection started",
            connection.connection.connectionId,
            connection.baseUrl
          );

          connection.on("ReceiveMessage", (message) => {
            setChat([message, ...latestChat.current]);
          });
        })
        .catch((err) => console.error(err));
  }, [connection]);

  const handleSendMessage = async () => {
    const msg = {
      user,
      message,
    };

    if (connection.connectionStarted) {
      try {
        await connection.send("SendMessage", msg);
        console.log(Date.now(), "Sended message to broadcast", msg);
      } catch (e) {
        console.error(e);
      }
    } else {
      alert("No connection to server yet.");
    }

    setMessage("");
  };

  return (
    <div className="chat-content__content">
      <div className="chat-content_messages">
        {chat?.map((x) => (
          <ChatMessage
            key={Date.now() * Math.random()}
            id={Date.now() * Math.random()}
            message={x.message}
            sender={x.user}
            isMe={x.user === user}
          />
        ))}
      </div>

      <form
        className="chat-content_form"
        onSubmit={(ev) => {
          ev.preventDefault();
          handleSendMessage();
        }}
      >
        <input
          type="text"
          placeholder="Mensagem...."
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ChatContent;