'use client';
import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';


export default function LlmChatBot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '👋 Hi! I’m Maxence’s AI assistant. Ask me anything about him.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post('/api/chat', { messages: updatedMessages });
      const reply = res.data.message;

      setMessages([...updatedMessages, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error(err);
      setMessages([...updatedMessages, { role: 'assistant', content: '⚠️ Error. Please try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="max-w-md mx-auto my-10 p-4 border border-primary-500 rounded bg-zinc-900 text-white shadow-lg">
      <h2 className="text-xl font-bold mb-4">💬 Ask Maxence’s Assistant</h2>

      <div className="h-64 overflow-y-auto mb-4 space-y-2 p-2 bg-zinc-800 rounded">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded ${
              msg.role === 'user' ? 'text-right bg-zinc-700' : 'text-left bg-zinc-600'
            }`}
          >
            <ReactMarkdown>{msg.content}</ReactMarkdown>

          </div>
        ))}
        {loading && <div className="italic text-sm text-gray-400">Typing…</div>}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-2 rounded bg-zinc-700 text-white outline-none"
          placeholder="Type your question..."
        />
        <button
          onClick={sendMessage}
          className="bg-primary-500 hover:secondary-500 px-4 py-2 rounded text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
