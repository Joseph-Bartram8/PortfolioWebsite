import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsTransitioning(false), 100);
  }, []);

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-screen py-2 overflow-hidden transition-transform duration-700 ease-in-out ${isTransitioning ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
      <h1 className="text-6xl font-bold text-white drop-shadow-lg">About Me</h1>
      <p className="text-2xl text-white drop-shadow-md">More details coming soon...</p>
      <button 
        onClick={() => navigate('/')} 
        className="mt-6 px-6 py-3 bg-gray-800 text-white text-lg font-semibold rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
      >
        Back to Home
      </button>
    </div>
  );
}