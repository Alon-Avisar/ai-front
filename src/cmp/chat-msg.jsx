import React, { useRef, useEffect } from 'react';
import SvgComponent from "./chatgpt-svg";

export const ChatMsg = ({ message }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  return (
    <div ref={messagesEndRef}>
      <div className={`chat-msg ${message.user === "gpt" && "chatgpt"}`}>
        <div className="chat-msg-center">
          <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
            {message.user === "gpt" ? <SvgComponent /> : null}
          </div>
          <div className="msg">{message.message}</div>
        </div>
      </div>
    </div>
  );
};

