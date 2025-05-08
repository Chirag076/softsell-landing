import React, { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! Ask me anything about selling your license.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    const lower = input.toLowerCase();

    let botReply = "I'm not sure how to respond to that.";
    if (lower.includes('how') && lower.includes('sell')) {
      botReply = 'Just upload your license, get a valuation, and receive payment quickly!';
    } else if (lower.includes('safe')) {
      botReply = 'Yes, all transactions are 100% secure and encrypted.';
    }

    setMessages([...messages, userMessage, { from: 'bot', text: botReply }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg w-80">
          <div className="p-3 border-b flex justify-between items-center bg-blue-600 text-white">
            <span>SoftSell Chat</span>
            <button onClick={() => setIsOpen(false)} className="text-white">✕</button>
          </div>
          <div className="p-3 h-60 overflow-y-auto text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === 'user' ? 'text-right mb-2' : 'text-left mb-2'}>
                <span className={`inline-block px-3 py-2 rounded ${msg.from === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 px-2 py-1 text-sm border-none focus:outline-none dark:bg-gray-800 dark:text-white"
            />
            <button onClick={handleSend} className="px-3 py-1 bg-blue-600 text-white">Send</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700"
        >
          Chat with us
        </button>
      )}
    </div>
  );
}
