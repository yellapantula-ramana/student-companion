import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { createTutorChat } from "../lib/gemini";
import Markdown from "react-markdown";
import { useAuth } from "./AuthProvider";

interface Message {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp?: any;
}

export function Tutor() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = createTutorChat();
    }
    // Add initial greeting when chat starts
    if (messages.length === 0) {
      setMessages([
        {
          id: "initial",
          role: "model",
          text: "Hi! I'm your AI Study Companion. What CBSE Class 10 topic would you like to learn today? I can help explain concepts, solve doubts, or guide you through problems.",
        }
      ]);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || !user) return;

    const userMsg = input.trim();
    setInput("");
    setIsLoading(true);

    // Add user message to local state
    const newUserMsg: Message = {
      id: `user_${Date.now()}`,
      role: "user",
      text: userMsg,
    };
    setMessages(prev => [...prev, newUserMsg]);

    try {
      // Send message to Gemini chat session
      const response = await chatRef.current.sendMessage({ message: userMsg });

      // Add model response to local state
      const modelMsg: Message = {
        id: `model_${Date.now()}`,
        role: "model",
        text: response.text,
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto bg-white border-x border-slate-200 shadow-sm">
      <div className="p-4 lg:p-6 border-b border-slate-200 bg-white sticky top-0 z-10">
        <h2 className="text-lg lg:text-xl font-bold text-slate-900 flex items-center gap-2">
          <Bot className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-600" />
          AI Tutor
        </h2>
        <p className="text-sm text-slate-500 mt-1 hidden sm:block">Socratic learning mode active. I'll guide you step-by-step.</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4 lg:space-y-6 bg-slate-50/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2 lg:gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === "user" ? "bg-indigo-600 text-white" : "bg-emerald-100 text-emerald-700"
              }`}
            >
              {msg.role === "user" ? <User className="w-4 h-4 lg:w-5 lg:h-5" /> : <Bot className="w-4 h-4 lg:w-5 lg:h-5" />}
            </div>
            <div
              className={`max-w-[75%] lg:max-w-[80%] rounded-2xl px-3 lg:px-5 py-2 lg:py-4 ${
                msg.role === "user"
                  ? "bg-indigo-600 text-white rounded-tr-none"
                  : "bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm"
              }`}
            >
              {msg.role === "user" ? (
                <p className="whitespace-pre-wrap">{msg.text}</p>
              ) : (
                <div className="prose prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-slate-100 prose-pre:text-slate-800">
                  <Markdown>{msg.text}</Markdown>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-2 lg:gap-4">
            <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 lg:w-5 lg:h-5" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-3 lg:px-5 py-2 lg:py-4 shadow-sm flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
              <span className="text-sm text-slate-500">Thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 lg:p-4 bg-white border-t border-slate-200">
        <div className="flex gap-2 max-w-4xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask a question..."
            className="flex-1 px-3 lg:px-4 py-2 lg:py-3 bg-slate-100 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-xl transition-all outline-none text-sm lg:text-base"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="px-3 lg:px-4 py-2 lg:py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
          >
            <Send className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
