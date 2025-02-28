import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WorkExperience {
  name: string;
  logo: string;
  description: string;
}

export default function Portfolio() {
  const [activeCompany, setActiveCompany] = useState<WorkExperience | null>(null);

  useEffect(() => {
    setActiveCompany(workExperiences[0]); // Set the first company as default
  }, []);

  const workExperiences: WorkExperience[] = [
    { 
      name: "QinetiQ", 
      logo: "/QinetiQ.png",
      description: `My responsibilities for this job were to design, develop, test, deploy and maintain different applications for teams I was a part of.

Achievements:
• Co-Created a web application internal tool that utilised asp.net/React technologies to streamline the approval process of sensitive documents and massively improves on an out-dated asset management system.
• Collaborated in the development of a web-based application utilising AWS to deliver an efficient, easy to use compliance tool that is used internationally.`
    },
    { 
      name: "UCAS", 
      logo: "/UCAS.png",
      description: `My responsibilities for this job were to help develop, test, and maintain UCAS products assigned to the team I was on. I also completed a two-year level 4 software engineering apprenticeship which helped me develop my skills in programming at an industry level, also giving me exposure to how a team operates.

Achievements:
• Developed real-time Splunk dashboards to monitor and analyse product performance and errors, significantly reducing issue resolution time from up to 24 hours to immediate action. Detected and rectified errors promptly, resulting in enhanced product stability.
• Collaborated on developing a strategic apprenticeship initiative, seamlessly integrating apprenticeship applications within the UCAS platform. This will result in diversified platform usage, attracting students opting out of traditional university pathways.
• Contributed to the development and implementation of “Hub Events”, a dynamic product capturing student engagement and interests during university events. Successfully transitioning from the COVID-driven virtual events paradigm to a comprehensive, data-driven approach, aligning with relaxed restrictions of COVID.`
    },
    { 
      name: "ADP", 
      logo: "/ADP.png",
      description: `Work Experience:<br/> <br/>For my level 3 computing college course I needed to do a week of work experience which I chose to do at ADP again, but this time working in the networking team which gave me experience in other areas of IT.
• Worked inside a Server room, learning how to maintain them and ensure they are running properly.
• Installed and configured work laptops for employees to use.

During my summer holidays after secondary school, I was given the opportunity to do some work experience at ADP to work inside a development team and learn what a workplace was like find out what skills I would need to develop in order to become a developer in the future.
• Learned about Scrum/Agile
• Was able to work in a fast-paced team.
• Started learning C#, how software is built and deployed across different test environments.
• Created numerous automated tests which identified a bug inside their selenium framework.
• Gained insight into how a UX team functions.`
    }
  ];

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen pt-20 md:pt-28 px-6"
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
        My Past Employment
      </motion.h1>

      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
        
        {/* Sidebar List of Companies */}
        <motion.div 
          className="w-full md:w-1/3 flex flex-col space-y-4 md:space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
          }}
        >
          {workExperiences.map((company) => (
            <motion.button 
              key={company.name} 
              onClick={() => setActiveCompany(company)}
              className={`flex items-center p-4 rounded-lg shadow-md w-full text-left cursor-pointer ${
                activeCompany?.name === company.name ? 'bg-gray-800 font-bold text-white ' : 'bg-gray-700 text-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={company.logo} 
                alt={`${company.name} Logo`} 
                className="w-10 h-10 mr-4 rounded-full object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <span className="text-lg font-medium">{company.name}</span>
            </motion.button>
          ))}
        </motion.div>
        
        {/* Display Box for Active Company */}
        <motion.div
          className="w-full md:w-2/3 p-6 bg-gray-700 opacity-90 text-white rounded-lg shadow-lg md:ml-8 min-h-[200px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            {activeCompany && (
              <motion.div
                key={activeCompany.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-left"
              >
                <h2 className="text-3xl font-semibold mb-4">{activeCompany.name}</h2>
                <p className="text-lg opacity-80 whitespace-pre-line">{activeCompany.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
