import React from 'react';
import { Monitor, Users } from 'lucide-react';
import Git from '../assets/images/git.png'
import Github from '../assets/images/github.png'
import ReactImage from '../assets/images/Reactpng.png'
import Tailwind from '../assets/images/Tailwind.png'
const features = [
  {
    icon: <Monitor className="text-blue-600 w-6 h-6" />,
    title: 'Hands-on Projects',
    desc: 'Build real-world applications with guided projects that reinforce your learning and expand your portfolio.',
  },
  {
    icon: <Users className="text-blue-600 w-6 h-6" />,
    title: 'Peer Collaboration',
    desc: 'Work with fellow students on team projects to simulate real development environments and workflows.',
  },
  {
    icon: <Monitor className="text-blue-600 w-6 h-6" />,
    title: 'Weekly Code Reviews',
    desc: 'Receive personalized feedback from experienced React developers to improve your coding skills.',
  },
];

const CourseHighlights = () => {
  return (
    <section className="bg-[#f8fbff] py-20 px-6 md:px-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">Course Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-sm p-6 text-center space-y-4 border border-gray-100 hover:shadow-md transition-all"
          >
            <div className="flex justify-center">
              <div className="bg-blue-100 rounded-full p-3">
                {item.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className='mt-20 mb-14'>
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">Technologies You'll Master</h2>
        <div className='flex justify-center flex-wrap gap-10 items-center'>
          <img src={ReactImage} alt="React" className="w-24 h-auto md:w-32" />
          <img src={Tailwind} alt="Tailwind" className="w-24 h-auto md:w-32" />
          <img src={Git} alt="Git" className="w-24 h-auto md:w-32" />
          <img src={Github} alt="Github" className="w-24 h-auto md:w-32" />
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
