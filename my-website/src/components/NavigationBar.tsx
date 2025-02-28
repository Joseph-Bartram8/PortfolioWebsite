import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    setIsOpen(false); // Close menu when navigating to a different page
  }, [location.pathname]);

  return (
    <nav className="fixed z-50 w-full flex justify-between items-center px-4 pt-6">
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-center space-x-6 md:space-x-12">
        {pages.map((page) => {
          const isActive = location.pathname === page.path;
          return (
            <motion.div 
              key={page.name}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={page.path}
                className={`text-white text-[19px] relative cursor-pointer ${
                  isActive ? 'text-[23px] font-bold underline' : ''
                }`}
              >
                {page.name}
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-[-2px] h-[2px] bg-white"
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
      
      {/* Mobile Navigation - Floating Burger Menu */}
      <div className="md:hidden flex items-center fixed top-6 z-50 p-2 rounded-lg shadow-lg">
        <motion.button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white text-3xl"
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </motion.button>
      </div>

      {/* Full-Screen Overlay for Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-6 md:hidden z-40"
          >
            {pages.map((page, index) => (
              <motion.div
                key={page.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  to={page.path}
                  className={`text-white text-[22px] cursor-pointer ${
                    location.pathname === page.path ? 'font-bold underline' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {page.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
