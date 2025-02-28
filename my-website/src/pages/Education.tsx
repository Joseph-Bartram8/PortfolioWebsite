import { motion } from 'framer-motion';

interface EducationItem {
  name: string;
  duration: string;
  description: string;
  logo: string;
}

export default function Education() {
  const educationItems: EducationItem[] = [
    { name: "New College Stamford", duration: "2019 - 2021", description: "Studied Level 3 Computing, learning about software development, networking, and IT infrastructure.", logo: "/stamfordLogo.png" },
    { name: "Casterton College Rutland", duration: "2014 - 2019", description: "Completed GCSEs, focusing on mathematics, sciences, and computer science, laying the foundation for my future studies in computing.", logo: "/castertonLogo.png" }
  ];

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen pt-20 md:pt-28 px-4"
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
        My Education
      </motion.h1>

      <div className="relative w-full max-w-6xl flex flex-col items-center md:items-start">
        {/* Timeline (Desktop Only) */}
        <motion.div
          className="hidden md:block absolute w-1 bg-gray-500 left-1/2 transform -translate-x-1/2 h-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>

        {educationItems.map((item, index) => (
          <motion.div
            key={item.name}
            className="relative w-full flex flex-col md:flex-row items-center md:items-start md:justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
          >
            {/* Left Side (Alternating Position) */}
            {index % 2 === 0 && (
              <div className="hidden md:flex w-5/12 justify-end text-right pr-8">
                <motion.div
                  className="text-gray-400 text-base md:text-lg font-medium"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {item.duration}
                </motion.div>
              </div>
            )}

            {/* School Logo as Timeline Marker */}
            <motion.div
              className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-lg border border-gray-500"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
            >
              <img src={item.logo} alt={`${item.name} Logo`} className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-full" />
            </motion.div>

            {/* Main Content Box */}
            <motion.div
              className="relative w-full md:w-5/12 p-6 bg-gray-700 opacity-80 text-white rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold">{item.name}</h2>
              <p className="text-sm md:text-lg opacity-80 mt-2">{item.description}</p>
              <div className="text-gray-400 text-sm md:text-base font-medium mt-2 md:hidden">{item.duration}</div>
            </motion.div>

            {/* Right Side (Alternating Position) */}
            {index % 2 !== 0 && (
              <div className="hidden md:flex w-5/12 text-left pl-8">
                <motion.div
                  className="text-gray-400 text-base md:text-lg font-medium"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {item.duration}
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
