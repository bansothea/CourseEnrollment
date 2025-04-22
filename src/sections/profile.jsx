import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Facebook, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react';
import Profile from '../assets/images/myphoto.jpg';
import ResumePage from './resume';

const ProfileComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const resumeRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShowResume = () => {
    setShowResume(true);
    setTimeout(() => {
      resumeRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="min-h-[100vh] overflow-y-auto">
      <div className="relative min-h-screen bg-white text-black">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className={`lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative mb-8 group">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-900 to-black transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="relative w-64 h-64 md:w-72 md:h-72 overflow-hidden rounded-3xl border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img src={Profile} alt="Profile" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-full shadow-lg">
                  <div className="bg-black text-white p-2 rounded-full">
                    <code className="text-xs font-mono">{"<coder/>"}</code>
                  </div>
                </div>
              </div>

              <h2 className="text-4xl font-black uppercase tracking-tight mb-1 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">BAN SOTHEA</h2>
              <div className="w-20 h-1 bg-black mb-4"></div>
              <p className="text-gray-600 mb-8 font-light text-lg">Software Engineer</p>

              <div className="flex space-x-3">
                {[Instagram, Facebook, Twitter, Linkedin, Github].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="p-2 rounded-lg border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Icon size={18} />
                    <span className="sr-only">Social</span>
                  </a>
                ))}
              </div>
            </div>

            <div className={`lg:col-span-7 flex flex-col transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">Portfolio</span>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mt-2 mb-4 leading-none">
                  Hello<span className="text-gray-300">.</span>
                </h1>
                <h3 className="text-2xl md:text-3xl font-light text-gray-600 mb-8 max-w-xl">
                  Here's Who I am <span className="inline-block w-10 h-0.5 bg-black align-middle mx-2"></span> What I do
                </h3>
              </div>

              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={handleShowResume}
                  className="group relative px-8 py-4 bg-black text-white font-medium rounded-full overflow-hidden hover:pr-14 transition-all duration-300"
                >
                  <span className="relative z-10">Resume</span>
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={18} />
                  </span>
                  <div className="absolute inset-0 bg-gray-800 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                </button>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gray-200"></div>
                <div className="pl-6">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    I'm a <span className="font-semibold">creative developer</span> who blends code and design to craft engaging digital experiences.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-20">
                    Specializing in <span className="italic">React</span>, <span className="italic">Tailwind CSS</span>, and <span className="italic">interactive UI</span>,
                    I transform concepts into responsive, user-friendly interfaces that leave a lasting impression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showResume && (
        <div ref={resumeRef}>
          <ResumePage />
        </div>
      )}
    </section>
  );
};

export default ProfileComponent;
