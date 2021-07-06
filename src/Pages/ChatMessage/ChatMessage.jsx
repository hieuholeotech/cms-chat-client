import React from "react";

const ChatMessage = ({ message, sender, isMe, id }) => {
  return (
    <div className="chat-message__root" id={id}>
      <div
        className={
          "chat-message__content " + (isMe ? "chat-message__content-isme" : "")
        }
      >
        <p className="message">{message}</p>
        <p className="sender">{sender}</p>
      </div>
    </div>
  );
};

export default ChatMessage;