
import { useState } from "react";
import { Send, Bot } from "lucide-react";

export default function ChatPreview() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! How can I help you today?"
    }
  ]);

  function handleSubmit(event) {
    event.preventDefault();

    const text = message.trim();
    if (!text) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text },
      {
        role: "assistant",
        text: "This is a demo preview. Connect an AI API for real responses."
      }
    ]);

    setMessage("");
  }

  return (
    <div className="chat-preview">
      <div className="chat-header">
        <Bot size={24} />
        <div>
          <strong>AI Assistant</strong>
          <span>Frontend demo</span>
        </div>
      </div>

      <div className="chat-messages" aria-live="polite">
        {messages.map((item, index) => (
          <div
            key={index}
            className={`chat-message ${item.role}`}
          >
            {item.text}
          </div>
        ))}
      </div>

      <form className="chat-input" onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Type a message..."
          aria-label="Type a message"
        />

        <button type="submit" aria-label="Send message">
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
