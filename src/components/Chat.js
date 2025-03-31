import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Update UI with user message
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    
    try {
      const response = await axios.post(
        "https://api.cai.tools.sap/build/v1/dialog",
        {
          message: input,
          conversation_id: "unique_user_id",
        },
        {
          headers: {
            "Authorization": "Bearer YOUR_BOT_TOKEN",
            "Content-Type": "application/json",
          },
        }
      );

      // Add bot response to chat
      setMessages([...newMessages, { text: response.data.results.messages[0].content, sender: "bot" }]);
    } catch (error) {
      console.error("Error:", error);
    }

    setInput("");
  };

  return (
    <div style={{ width: "400px", margin: "auto", textAlign: "center", border: "1px solid #ccc", padding: "10px", borderRadius: "10px" }}>
      <h2>HR Chatbot</h2>
      <div style={{ height: "300px", overflowY: "auto", border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
        {messages.map((msg, index) => (
          <p key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left", background: msg.sender === "user" ? "#e1ffc7" : "#ddd", padding: "5px", borderRadius: "5px" }}>
            {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        style={{ width: "80%", padding: "5px" }}
      />
      <button onClick={sendMessage} style={{ padding: "5px", marginLeft: "5px" }}>Send</button>
    </div>
  );
};

export default Chatbot;
