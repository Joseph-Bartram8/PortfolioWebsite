import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    setTimeout(() => navigate('/about'), 500);
  };

  return (
    <motion.div
      className="absolute text-gray-200 inset-0 flex flex-col items-center justify-center min-h-screen h-full w-full py-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Heading Animation */}
      <motion.h1 
        className="text-5xl md:text-6xl font-bold drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Welcome
      </motion.h1>

      {/* Paragraph Animation */}
      <motion.p 
        className="text-base md:text-lg text-center max-w-3xl px-6 md:px-8 mt-4 md:mt-6 drop-shadow-md leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        Hi, my name is <span className="font-semibold">Joseph Bartram</span> and welcome to my website. 
        On here you'll be able to find all the details about my education and the projects that I've been working on in my spare time. <br /><br />
        One of the reasons I created this website is because I wanted to learn responsive web design. 
        Please feel free to have a browse and contact me if you have any exciting opportunities that I could help out with.
      </motion.p>

      {/* Button Animation */}
      <motion.button
        onClick={handleNavigate}
        className="mt-6 px-6 py-3 bg-gray-800 text-white text-lg font-semibold rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        exit={{ opacity: 0, y: 10 }}
      >
        More about Me
      </motion.button>
    </motion.div>
  );
}
