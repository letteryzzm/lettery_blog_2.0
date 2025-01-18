import React from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

interface NavbarProps {
  openChat: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ openChat }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-800">lettery</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={openChat}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <MessageSquare className="w-4 h-4 mr-1" />
                AI Chat
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => {
                openChat();
                setIsMenuOpen(false);
              }}
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              AI Chat
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;