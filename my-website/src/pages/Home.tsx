import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        document.body.style.overflow = 'auto';
      }, 800);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isTransitioning]);

  const handleNavigate = () => {
    setIsTransitioning(true);
    setTimeout(() => navigate('/about'), 800);
  };

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-screen py-2 overflow-hidden transition-transform duration-700 ease-in-out ${isTransitioning ? '-translate-y-full' : 'translate-y-0'}`}>
      <h1 className="text-6xl font-bold text-white drop-shadow-lg">Welcome to my portfolio</h1>
      <p className="text-2xl text-white drop-shadow-md">This is a portfolio website built with React and Tailwind CSS.</p>
      <button 
        onClick={handleNavigate}
        className="mt-6 px-6 py-3 bg-gray-800 text-white text-lg font-semibold rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
      >
        About Me
      </button>
    </div>
  );
}