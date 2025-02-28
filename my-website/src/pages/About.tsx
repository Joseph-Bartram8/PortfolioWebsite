import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen py-10 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Heading Animation */}
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        About Me
      </motion.h1>

      {/* Content Wrapper */}
      <motion.div 
        className="flex flex-col md:flex-row items-center md:items-start md:justify-center w-full max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        {/* Profile Image */}
        <motion.img 
          src="/profile.jpg" 
          alt="profile" 
          className="w-40 h-40 md:w-56 md:h-56 rounded-lg border-4 border-gray-700 shadow-lg mb-6 md:mb-0 md:mr-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        />

        {/* About Text */}
        <motion.div 
          className="flex flex-col items-center text-center md:items-start md:text-left w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <p className="text-base md:text-lg text-white drop-shadow-md max-w-3xl">
            Hi, I'm <span className="font-semibold">Joseph Bartram</span>. I'm a Software Engineer at QinetiQ, passionate about learning new technologies
            and developing innovative solutions. Recently, I've been working with **.NET 9** and **Vite React** with **Tailwind CSS**.
            I enjoy continuously expanding my skill set and tackling new challenges in software development.  
            <br /><br />
            In my free time, I'm exploring **Flutter** for app development and **Unreal Engine 5** for game development.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
