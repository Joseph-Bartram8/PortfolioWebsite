import { useState, useEffect } from 'react';

export default function About() {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsTransitioning(false), 100);
  }, []);

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
    </div>
  );
}