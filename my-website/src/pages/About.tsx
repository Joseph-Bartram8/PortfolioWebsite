import { useState, useEffect } from 'react';

export default function About() {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsTransitioning(false), 100);
  }, []);

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-screen py-10 px-6 overflow-auto transition-transform duration-700 ease-in-out ${isTransitioning ? 'translate-y-full' : 'translate-y-0'}`}>
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 md:mb-12">About Me</h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center w-full max-w-5xl">
        <img src="/profile.jpg" alt="profile" className="w-40 h-40 md:w-56 md:h-56 rounded-lg border-4 border-gray-700 shadow-lg mb-6 md:mb-0 md:mr-8" />
        <div className="flex flex-col items-center text-center md:items-start md:text-left w-full">
          <p className="text-base md:text-lg text-white drop-shadow-md max-w-3xl">
            Hi, I'm Joseph Bartram. I'm a Software Engineer at QinetiQ, passionate about learning new technologies
            and developing innovative solutions. Recently, I've been working with .NET 9 and Vite React with Tailwind CSS.
            I enjoy continuously expanding my skill set and tackling new challenges in software development.
            In my free time, I'm exploring Flutter for app development and Unreal Engine 5 for game development.
          </p>
        </div>
      </div>
    </div>
  );
}
