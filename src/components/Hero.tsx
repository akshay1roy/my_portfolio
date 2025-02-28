import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, LinkedinIcon, Code2Icon, FileDown, ExternalLink, Mail } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import aksh from '../photo/aksh.jpg';

export function Hero() {
  const handleDownloadResume = () => {
    const resumeUrl = '/path-to-your-resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <ParticlesBackground />

      {/* Background Image with Animation */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0.3 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute  inset-0 bg-contain bg-transparent bg-center z-0"
        style={{ backgroundImage: `url(${aksh})` }}
      />
      
      {/* Dark Overlay to Enhance Readability */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/60 z-0"></div>

      <div className="text-center relative z-10 max-w-4xl mx-auto">
        {/* Profile Picture with Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative w-40 h-40 mx-auto mb-8 group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow blur-md group-hover:blur-xl transition-all duration-300" />
          <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-purple-500 dark:ring-purple-400">
            <img
              src={aksh}
              alt="Profile"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 animate-gradient">
            Hi, I'm Akshay Kumar
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-8 h-8">
          <TypeAnimation
            sequence={[
              'Web Developer',
              2000,
              'MERN Stack Developer',
              2000,
              'UI/UX Enthusiast',
              2000,
              'Problem Solver',
              2000,
              'Python  Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-semibold"
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about creating beautiful, responsive, and user-friendly web applications. 
          Specialized in modern JavaScript frameworks and committed to writing clean, efficient code, I love problem-solving, competitive programming,.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
          >
            <FileDown className="w-5 h-5" />
            Download Resume
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          {[
            { icon: Github , href: "https://github.com/akshay1roy", color: "hover:text-gray-900 dark:hover:text-white" },
            { icon: LinkedinIcon, href: "https://www.linkedin.com/in/akshaykumar7667/", color: "hover:text-blue-600" },
            { icon: Code2Icon, href: "https://leetcode.com/u/Akshaykumar_/", color: "hover:text-yellow-600" }
          ].map((social, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.2, rotate: 5, transition: { type: "spring", stiffness: 300 } }}
              whileTap={{ scale: 0.9 }}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-300 dark:text-gray-300 ${social.color} transition-colors`}
            >
              <social.icon className="w-8 h-8" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
