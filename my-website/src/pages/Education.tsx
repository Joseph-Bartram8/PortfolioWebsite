import { useState, useEffect } from 'react';

interface EducationItem {
  name: string;
  duration: string;
  description: string;
  logo: string;
}

export default function Education() {
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsTransitioning(false), 100);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const educationItems: EducationItem[] = [
    { name: "New College Stamford", duration: "2019 - 2021", description: "Studied Level 3 Computing, learning about software development, networking, and IT infrastructure.", logo: "/stamfordLogo.png" },
    { name: "Casterton College Rutland", duration: "2014 - 2019", description: "Completed GCSEs, focusing on mathematics, sciences, and computer science, laying the foundation for my future studies in computing.", logo: "/castertonLogo.png" }
  ];

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-screen pt-20 md:pt-28 px-4 overflow-hidden transition-transform duration-700 ease-in-out ${isTransitioning ? 'translate-y-full' : 'translate-y-0'}`}>
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 md:mb-12">My Education</h1>
      
      {isMobile ? (
        // Mobile Layout
        <div className="relative w-full max-w-4xl flex flex-col items-center">
          <div className="absolute w-1 bg-gray-500 h-full right-4"></div>
          {educationItems.map((item) => (
            <div key={item.name} className="relative w-full flex flex-col items-start mt-16">
              <div className="relative w-4/5 p-6 bg-gray-700 opacity-80 text-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 text-left">
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-sm md:text-base opacity-80 mt-2">{item.description}</p>
              </div>
              <div className="text-gray-400 text-sm md:text-base font-medium mt-2 ml-4">{item.duration}</div>
            </div>
          ))}
        </div>
      ) : (
        // Desktop Layout
        <div className="relative w-full max-w-6xl flex flex-col items-center">
          <div className="absolute w-1 bg-gray-500 h-full left-1/2 transform -translate-x-1/2"></div>
          {educationItems.map((item, index) => (
            <div key={item.name} className="relative w-full flex items-center justify-between mt-20">
              {index % 2 !== 0 && (
                <div className="w-3/7 text-right pr-4 text-gray-400 text-base md:text-lg font-medium">{item.duration}</div>
              )}
              <div className={`relative w-1/3 p-6 bg-gray-700 opacity-80 text-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${index % 2 === 0 ? 'text-left ml-20' : 'text-right mr-20'}`}>
                <div className={`absolute ${index % 2 === 0 ? '-right-5' : '-left-5'} top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-r-8 border-transparent ${index % 2 === 0 ? 'border-l-gray-500' : 'border-r-gray-500'}`}></div>
                <h2 className="text-3xl font-semibold">{item.name}</h2>
                <p className="text-lg opacity-80 mt-2">{item.description}</p>
              </div>
              {index % 2 === 0 && (
                <div className="w-3/7 text-left pl-4 text-gray-400 text-base md:text-lg font-medium">{item.duration}</div>
              )}
              {/* School Logo Positioned on the Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-50 bg-white p-2 rounded-full shadow-lg overflow-hidden">
                <img src={item.logo} alt={`${item.name} Logo`} className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
