import React from 'react';
import { MessageCircle, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-xl text-gray-500">Connect with me on social media</p>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <a href="https://muselink.cc/lettery " className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
            <MessageCircle className="w-10 h-10" />
          </a>
          <a href="https://okjk.co/BLsIhp" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.46 7.12l-1.88 1.88c-.2.2-.51.2-.71 0l-1.88-1.88c-.2-.2-.2-.51 0-.71l1.88-1.88c.2-.2.51-.2.71 0l1.88 1.88c.2.2.2.51 0 .71zm-3.58 3.58l-1.88 1.88c-.2.2-.51.2-.71 0l-1.88-1.88c-.2-.2-.2-.51 0-.71l1.88-1.88c.2-.2.51-.2.71 0l1.88 1.88c.2.2.2.51 0 .71z" />
            </svg>
          </a>
          <a href="https://x.com/ter_let21646" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
            <Twitter className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;