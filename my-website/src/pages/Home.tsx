import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
      setIsTransitioning(true);
      document.body.style.overflowY = 'hidden';
      setTimeout(() => setIsTransitioning(false), 900);
  }, [location.pathname]);

  const handleNavigate = () => {
    setIsTransitioning(true);
    document.body.style.overflowY = 'hidden';
    setTimeout(() => navigate('/about'), 1500);
  };

  return (
    <div className={`absolute inset-0 flex flex-col items-center justify-center min-h-screen h-full w-full overflow-y-auto py-2 overflow-hidden transition-all duration-[1500ms] ease-in-out ${isTransitioning ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
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