"use client";

import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );

  // Auto-scroll to bottom whenever messages change or loading state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let aiText = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        aiText += chunk;

        setMessages((prev) => {
          const newArr = [...prev];
          const lastIndex = newArr.length - 1;
          newArr[lastIndex] = { ...newArr[lastIndex], content: aiText };
          return newArr;
        });
      }
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gray-800 text-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-center hover:scale-105 transition-transform z-50"
        aria-label="Open chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
          />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-[#0a0a0a] border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">
      {/* Header */}
      <div className="bg-[#111] text-white p-4 font-bold flex justify-between items-center border-b border-gray-800">
        <span>Chat with Oki's AI Assistant</span>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div
        className="flex-1 p-4 overflow-y-auto bg-gray-900 flex flex-col gap-3"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {messages.length === 0 && (
          <p className="text-sm text-gray-500 text-center mt-4">
            Hi! Ask anything about Oki's skills, experiences or even personal
            interests!
          </p>
        )}

        {messages.map((m, index) => (
          <div
            key={index}
            className={`p-3 rounded-2xl text-sm max-w-[85%] shadow-sm ${
              m.role === "user"
                ? "bg-blue-600 text-white self-end rounded-br-none"
                : "bg-[#1a1a1a] border border-gray-800 text-gray-100 self-start rounded-bl-none"
            }`}
          >
            {m.content}
          </div>
        ))}

        {/* Typing bubble — shown while waiting for the stream to start */}
        {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
          <div className="bg-[#1a1a1a] border border-gray-800 text-gray-100 self-start rounded-2xl rounded-bl-none p-3 max-w-[85%] shadow-sm">
            <span className="flex gap-1 items-center h-4">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
            </span>
          </div>
        )}

        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleFormSubmit}
        className="p-3 border-t border-gray-800 bg-[#111] flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
          placeholder={isLoading ? "AI is typing..." : "Ask a question..."}
          className="flex-1 p-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:outline-none focus:border-gray-500 placeholder-gray-500 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="bg-gray-800 text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:border-white transition-colors font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
}
