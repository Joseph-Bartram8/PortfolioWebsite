import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
      setTimeout(() => setIsTransitioning(false), 900);
      document.body.style.overflowY = 'hidden';
  }, [location.pathname]);

  const handleNavigate = () => {
    setIsTransitioning(true);
    document.body.style.overflowY = 'hidden';
    setTimeout(() => navigate('/about'), 1500);
  };

  return (
    <div className={`absolute text-gray-200 inset-0 flex flex-col items-center justify-center min-h-screen h-full w-full overflow-y-auto py-2 transition-all duration-[1500ms] ease-in ${isTransitioning ? 'translate-y-[-10vh] opacity-0' : 'translate-y-0 opacity-100'}`}>
      <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">Welcome</h1>
      <p className="text-base md:text-lg text-center max-w-3xl px-6 md:px-8 mt-4 md:mt-6 drop-shadow-md leading-relaxed">
        Hi, my name is <span className="font-semibold">Joseph Bartram</span> and welcome to my website. On here you'll be able to find all the details about my education and the projects that
        I've been working on in my spare time. <br /> <br />One of the reasons I created this website is because I wanted to learn responsive web design.
        Please feel free to have a browse and contact me if you have any exciting opportunities that I could help out with.
      </p>
      <button 
        onClick={handleNavigate}
        className="mt-6 px-6 py-3 bg-gray-800 text-white text-lg font-semibold rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
      >
        More about Me
      </button>
    </div>
  );
}
