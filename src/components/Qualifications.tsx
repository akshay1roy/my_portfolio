import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const qualifications = {
  education: [
    {
      title: "Master of Computer Applications (MCA)",
      institution: "Harcourt Butler Technical University, Kanpur",
      year: "2024 - 2026",
      description: "Pursuing MCA with a focus on advanced computing, software development, and system architecture."
    },
    {
      title: "Bachelor's in Computer Science",
      institution: "Magadh University",
      year: "2020 - 2024",
      description: "Graduated with First Class Honours. Specialized in Problem Solving and Web Technologies."
    },
    {
      title: "Higher Secondary Education",
      institution: "S S College, Jehanabad",
      year: "2018 - 2020",
      description: "Completed with 78% marks in PCM (Physics, Chemistry, and Mathematics)."
    }
  ],  
  experience: [
    {
      title: "Software Developer",
      company: "Tech Company",
      year: "2023 - Present",
      description: "Working on full-stack web applications using MERN stack. Implemented real-time features using Socket.io."
    },
    {
      title: "Software Development Intern",
      company: "Startup",
      year: "2022 - 2023",
      description: "Developed and maintained React applications. Worked on API integration and state management."
    }
  ]
};

export function Qualifications() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Qualifications
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-purple-500" />
              Education
            </h3>
            <div className="space-y-6">
              {qualifications.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-purple-500 dark:border-purple-400"
                >
                  <div className="absolute w-4 h-4 bg-purple-500 dark:bg-purple-400 rounded-full -left-[9px] top-0" />
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {edu.title}
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {edu.year}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-purple-500" />
              Experience
            </h3>
            <div className="space-y-6">
              {qualifications.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-purple-500 dark:border-purple-400"
                >
                  <div className="absolute w-4 h-4 bg-purple-500 dark:bg-purple-400 rounded-full -left-[9px] top-0" />
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {exp.year}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}