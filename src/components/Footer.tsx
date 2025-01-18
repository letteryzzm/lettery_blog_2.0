import React from 'react';
import { MessageCircle, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">lettery</p>
            <p className="mt-2 text-gray-300">Idealist & AI Superindividual</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://bxqmx9wxv2m.feishu.cn/wiki/HgR0wCHO9ifbaVkWZ2UcLPwknTb?from=from_copylink" className="text-gray-400 hover:text-white transition-colors duration-300">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="https://okjk.co/BLsIhp" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.46 7.12l-1.88 1.88c-.2.2-.51.2-.71 0l-1.88-1.88c-.2-.2-.2-.51 0-.71l1.88-1.88c.2-.2.51-.2.71 0l1.88 1.88c.2.2.2.51 0 .71zm-3.58 3.58l-1.88 1.88c-.2.2-.51.2-.71 0l-1.88-1.88c-.2-.2-.2-.51 0-.71l1.88-1.88c.2-.2.51-.2.71 0l1.88 1.88c.2.2.2.51 0 .71z" />
              </svg>
            </a>
            <a href="https://x.com/ter_let21646" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; {currentYear} lettey. All rights reserved.</p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;