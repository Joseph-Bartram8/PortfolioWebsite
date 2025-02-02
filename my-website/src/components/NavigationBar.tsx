import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowLinks(true), 500); // Delay text animation after overlay expands
    } else {
      setShowLinks(false);
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false); // Close burger menu when page changes or refreshes
  }, [location.pathname]);
  
  return (
    <nav className="fixed z-50 w-full flex justify-between items-center px-4 pt-6 transition-transform duration-700">
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-center space-x-6 md:space-x-12">
        {pages.map((page) => (
          <Link
            key={page.name}
            to={page.path}
            className="text-white text-[19px] hover:text-gray-200 hover:text-[23px] transition-all duration-300 relative group cursor-pointer"
          >
            {page.name}
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </div>
      
      {/* Mobile Navigation - Floating Burger Menu */}
      <div className="md:hidden flex items-center fixed top-6 z-50 p-2 rounded-lg shadow-lg">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Full-Screen Overlay for Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-6 md:hidden transition-all duration-500 z-40 transform ${isOpen ? 'scale-100 opacity-90' : 'scale-50 opacity-0 pointer-events-none'}`}
      >
        {pages.map((page, index) => (
          <Link
            key={page.name}
            to={page.path}
            className={`text-white text-[22px] transform opacity-0 -translate-x-32 transition-all duration-500 ease-in-out ${showLinks ? 'opacity-100 translate-x-0' : ''}`}
            style={{ transitionDelay: `${isOpen ? index * 150 : 0}ms` }}
            onClick={() => setIsOpen(false)}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
