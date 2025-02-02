import { useState, useEffect } from 'react';

export default function BinaryWall() {
  const [isActive, setIsActive] = useState(true);
  const columns = 30;
  const rows = 20;

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsActive(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 flex flex-wrap">
      {Array.from({ length: columns }).map((_, colIdx) => (
        <div key={colIdx} className="w-[5%] flex flex-col items-center">
          {Array.from({ length: rows }).map((_, rowIdx) => (
            <span
              key={rowIdx}
              className={`text-gray-500 text-lg ${isActive ? 'animate-binary-fall' : ''}`}
              style={{
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                transform: `translateY(-${200 + Math.random() * 200}vh) translateX(${Math.random() * 250}vw)`,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
