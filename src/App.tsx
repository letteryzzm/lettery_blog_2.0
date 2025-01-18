import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import AIChatPrompt from './components/AIChatPrompt';
import ImageCarousel from './components/ImageCarousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatInterface from './components/AIChatInterface';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar openChat={() => setIsChatOpen(true)} />
      <Hero />
      <Portfolio />
      <AIChatPrompt openChat={() => setIsChatOpen(true)} />
      <ImageCarousel />
      <Contact />
      <Footer />
      <ScrollToTop />
      {isChatOpen && <AIChatInterface closeChat={() => setIsChatOpen(false)} />}
    </div>
  );
}

export default App;