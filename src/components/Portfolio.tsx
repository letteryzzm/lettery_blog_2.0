import React, { useState } from 'react';
import { X, Book, Video, BookOpen, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Practice Manual',
    description: '这里有一个小白AI从入门到入土的全过程',
    icon: Book,
    link: 'https://bxqmx9wxv2m.feishu.cn/wiki/CvbNwdZbBiEqhZkT6gDcG4nfnge?from=from_copylink',
  },
  {
    id: 2,
    title: 'Self-Media Practice Manual',
    description: '这里有一个小白自媒体从入门到入土的全过程',
    icon: Video,
    link: 'https://bxqmx9wxv2m.feishu.cn/wiki/S8pqwLCBOiuM6IkDlC7cgg1Injf?from=from_copylink',
  },
  {
    id: 3,
    title: 'Meditations',
    description: '感性+理性>1始终量子态，这里有严丝合缝有天马行空',
    icon: BookOpen,
    link: 'https://bxqmx9wxv2m.feishu.cn/wiki/FC09wiwiCiiOLUkuoYqcZXHfnzd?from=from_copylink',
  },
  {
    id: 4,
    title: 'Life Prosperity Manual',
    description: 'live long and prosper 既寿永昌',
    icon: Sparkles,
    link: 'https://bxqmx9wxv2m.feishu.cn/wiki/MVtwwV5oxixwHAkZpckc1CHUnvh?from=from_copylink',
  },
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div id="portfolio" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Portfolio</h2>
          <p className="mt-4 text-xl text-gray-500">Check out some of my recent projects</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6 flex flex-col items-center">
                <project.icon className="w-16 h-16 mb-4 text-indigo-600" />
                <h3 className="text-lg font-semibold text-gray-900 text-center">{project.title}</h3>
                <p className="mt-2 text-gray-600 text-center">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <selectedProject.icon className="w-24 h-24 mb-4 text-indigo-600 mx-auto" />
              <p className="text-gray-600">{selectedProject.description}</p>
              <div className="mt-6 flex justify-end">
                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;