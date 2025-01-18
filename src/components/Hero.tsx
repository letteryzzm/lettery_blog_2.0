import React from 'react';
import { Code, Palette, Globe, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const skills = [
    { name: 'Web Development', icon: Code },
    { name: 'UI/UX Design', icon: Palette },
    { name: 'SEO Optimization', icon: Globe },
    { name: 'Performance Tuning', icon: Zap },
  ];

  return (
    <div id="home" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">lettery</h1>
            <p className="text-xl md:text-2xl mb-6">
              Idealist & AI Superindividual
            </p>
            <p className="text-lg mb-8">做一个真诚、靠谱、可爱的人</p>
            <a
              href="#contact"
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://s2.loli.net/2024/10/21/Ot8nX7w9YIFkEMG.jpg"
              alt="Your Name"
              className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg mx-auto"
            />
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
                <skill.icon className="w-12 h-12 mb-4 mx-auto text-white" />
                <h3 className="text-xl font-semibold text-center mb-2">{skill.name}</h3>
                <p className="text-center text-white text-opacity-80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;