import React from 'react';
import { MessageSquare } from 'lucide-react';

interface AIChatPromptProps {
  openChat: () => void;
}

const AIChatPrompt: React.FC<AIChatPromptProps> = ({ openChat }) => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to chat with AI?</span>
                <span className="block text-indigo-200">Start a conversation now!</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Experience the power of AI-driven conversations. Get answers, insights, and assistance on various topics.（这是一个AI智障还在完善😋，可以转接微信人类智能）
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <button
                  onClick={openChat}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start Chatting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatPrompt;