import React from "react";
import { useParams } from "react-router-dom";

function ChatPage() {
  const { number } = useParams();
  return (
    <div className="chat-page">
      <h2>Chat with {number}</h2>
      <div className="chat-box">
        <p><strong>User:</strong> Bhaj do</p>
        <p><strong>AI:</strong> Sir, main Tata Motors Techwheels se Tanya bol rahi hoon...</p>
      </div>
    </div>
  );
}

export default ChatPage;
