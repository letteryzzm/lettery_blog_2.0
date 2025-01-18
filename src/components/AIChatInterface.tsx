import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Mic, Download, Trash2, Sun, Moon } from 'lucide-react';
import OpenAI from 'openai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIChatInterfaceProps {
  closeChat: () => void;
}

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_DEEPSEEK_API_KEY,
  baseURL: 'https://api.deepseek.com/v1',
  dangerouslyAllowBrowser: true // Only for demonstration, not recommended for production
});

const AIChatInterface: React.FC<AIChatInterfaceProps> = ({ closeChat }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (input.trim()) {
      const newMessage: Message = { role: 'user', content: input };
      setMessages([...messages, newMessage]);
      setInput('');

      try {
        const completion = await openai.chat.completions.create({
          model: "deepseek-chat",
          messages: [...messages, newMessage],
        });

        const aiResponse: Message = {
          role: 'assistant',
          content: completion.choices[0].message.content || "Sorry, I couldn't generate a response."
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      } catch (error) {
        console.error('Error calling DeepSeek API:', error);
        const errorMessage: Message = {
          role: 'assistant',
          content: "Sorry, there was an error processing your request."
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const exportChat = () => {
    const chatContent = messages.map((msg) => `${msg.role}: ${msg.content}`).join('\n');
    const blob = new Blob([chatContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat_export.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-800 w-full max-w-2xl h-[80vh] rounded-lg shadow-xl flex flex-col">
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">AI Chat</h2>
          <div className="flex space-x-2">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {isDarkMode ? <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
            </button>
            <button onClick={closeChat} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 border-t dark:border-gray-700">
          <div className="flex space-x-2 mb-2">
            <button onClick={clearChat} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <Trash2 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button onClick={exportChat} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <Download className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              rows={1}
            />
            <button onClick={handleSend} className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
              <Send className="w-5 h-5" />
            </button>
            <button className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
              <Mic className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatInterface;