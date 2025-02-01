import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsTransitioning(false), 100);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      document.body.style.overflowY = 'hidden';
    }
    else {
      setTimeout(() => {
        document.body.style.overflow = 'auto';
      }, 800);
    }
  }, [isTransitioning]);

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-screen py-10 overflow-hidden transition-transform duration-700 ease-in-out ${isTransitioning ? 'translate-y-full' : 'translate-y-0'}`}>
      <h1 className="text-6xl font-bold text-white drop-shadow-lg">About Me</h1>
      
      {/* Profile Section */}
      <div className="mt-10 flex flex-row items-center max-w-4xl text-left">
        <img src="/profile.jpg" alt="profile" className="w-56 h-56 rounded-lg border-4 border-gray-700 shadow-lg mr-8" />
        <p className="text-xl text-white drop-shadow-md">
          Hi, I'm Joseph Bartram. I'm a Software Engineer at QinetiQ, passionate about learning new technologies
          and developing innovative solutions. Recently, I've been working with .NET 9 and Vite React with Tailwind CSS.
          I enjoy continuously expanding my skill set and tackling new challenges in software development.
          In my free time, I'm exploring Flutter for app development and Unreal Engine 5 for game development.
        </p>
      </div>
      
      {/* Staggered Navigation Cards */}
      <div className="mt-10 flex flex-col gap-12 w-full max-w-6xl">
        <div className="flex justify-start">
          <div className="relative bg-gray-800 p-10 rounded-lg shadow-lg text-left cursor-pointer transform transition duration-300 hover:scale-105 overflow-hidden w-[40vw] h-[50vh]"
            onClick={() => navigate('/education')}>
            <div className="absolute inset-0 bg-cover bg-center opacity-30 hover:opacity-50 transition-opacity" style={{ backgroundImage: "url('/education-preview.jpg')" }}></div>
            <h2 className="relative text-4xl font-semibold text-white z-10">Education</h2>
            <p className="relative text-white z-10 mt-4 text-lg">A look at my educational background and achievements.</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="relative bg-gray-800 p-10 rounded-lg shadow-lg text-left cursor-pointer transform transition duration-300 hover:scale-105 overflow-hidden w-[40vw] h-[50vh]"
            onClick={() => navigate('/portfolio')}>
            <div className="absolute inset-0 bg-cover bg-center opacity-30 hover:opacity-50 transition-opacity" style={{ backgroundImage: "url('/portfolio-preview.jpg')" }}></div>
            <h2 className="relative text-4xl font-semibold text-white z-10">Portfolio</h2>
            <p className="relative text-white z-10 mt-4 text-lg">Projects and work that I've completed.</p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="relative bg-gray-800 p-10 rounded-lg shadow-lg text-left cursor-pointer transform transition duration-300 hover:scale-105 overflow-hidden w-[40vw] h-[50vh]"
            onClick={() => navigate('/contact')}>
            <div className="absolute inset-0 bg-cover bg-center opacity-30 hover:opacity-50 transition-opacity" style={{ backgroundImage: "url('/contact-preview.jpg')" }}></div>
            <h2 className="relative text-4xl font-semibold text-white z-10">Contact Me</h2>
            <p className="relative text-white z-10 mt-4 text-lg">Get in touch with me for collaborations or inquiries.</p>
          </div>
        </div>
      </div>
    </div>
  );
}