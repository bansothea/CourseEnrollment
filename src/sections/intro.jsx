import React, { useState, useEffect } from 'react';
import Profile from '../assets/images/myphoto.jpg';
import { MousePointer2, Code, X } from 'lucide-react';
import ProfileComponent from './profile';

const Intro = () => {
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (showProfile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showProfile]);

  return (
    <div className="relative min-h-screen bg-white grid grid-cols-1 md:grid-cols-2 items-center px-10 md:px-20 py-20">
      <div className="space-y-6">
        <div className="text-xl font-medium text-gray-600 border w-24 flex justify-center rounded-md">Hello !</div>

        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          I'm <span className="text-blue-600">Sothea</span>,<br />
          Web &<br />
          Mobile Developer
        </h1>

        <p className="text-gray-500 max-w-lg">
          I believe that with a combination of technical expertise, problem solving, positive mindset,
          flexibility and leadership skills, I strive to contribute to the success of any project.
        </p>

        <p className="text-gray-400 max-w-md">
          If you haven’t known me, let’s check out some of my background.
        </p>

        <div className="flex gap-4 mt-6">
          <button
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700"
            onClick={() => setShowProfile(true)}
          >
            Know me More
          </button>
          <button className="px-6 py-2 border border-gray-400 text-gray-700 font-medium rounded-xl hover:bg-gray-100">
            <a href="https://t.me/SOTHEABAN">
                Contact Me
            </a>
          </button>
        </div>
      </div>

      <div className="relative mt-10 md:mt-0">
        <img src={Profile} alt="Sothea" className="rounded-3xl shadow-lg w-full max-w-md mx-auto" />

        <div className="absolute top-10 left-0 bg-blue-600 text-white px-4 py-1 rounded-full text-sm shadow-md">
          Web Developer
        </div>
        <div className="absolute top-20 left-20 text-blue-white px-4 py-1 rounded-full text-sm md:text-black">
          <Code />
        </div>

        <div className="absolute bottom-10 right-0 bg-blue-600 text-white px-4 py-1 rounded-full text-sm shadow-md">
          App Developer
        </div>
        <div className="absolute bottom-1 right-0 text-black px-4 py-1 rounded-full text-sm md:white">
          <MousePointer2 />
        </div>
      </div>

      {/* Slide-up Profile Component with isolated scroll */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl transform transition-transform duration-500 max-h-screen ${showProfile ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="h-full flex flex-col overflow-hidden">
          <div className="p-6 border-b flex justify-between items-center bg-white sticky top-0 z-10">
            <h3 className="font-bold text-lg">Who I Am</h3>
            <button onClick={() => setShowProfile(false)} className="hover:text-red-500 transition">
              <X size={20} />
            </button>
          </div>
          <div className="overflow-y-auto flex-1 px-6 pb-6">
            <ProfileComponent onClose={() => setShowProfile(false)} />
            <div className="mt-6 text-right">
              <button
                onClick={() => setShowProfile(false)}
                className="px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-xl hover:bg-gray-300 transition"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
