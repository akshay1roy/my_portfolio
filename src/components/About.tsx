import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Database, Server, Layout, GitBranch, Terminal } from 'lucide-react';
import { useRef } from 'react';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React.js', 'Redux', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    color: 'text-blue-500',
    bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
    color: 'text-green-500',
    bgColor: 'hover:bg-green-50 dark:hover:bg-green-900/20',
  },
  {
    category: 'Database',
    icon: Database,
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
    color: 'text-yellow-500',
    bgColor: 'hover:bg-yellow-50 dark:hover:bg-yellow-900/20',
  },
  {
    category: 'Languages',
    icon: Code2,
    items: ['JavaScript', 'TypeScript', 'C++', 'Python'],
    color: 'text-purple-500',
    bgColor: 'hover:bg-purple-50 dark:hover:bg-purple-900/20',
  },
  {
    category: 'Version Control',
    icon: GitBranch,
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
    color: 'text-orange-500',
    bgColor: 'hover:bg-orange-50 dark:hover:bg-orange-900/20',
  },
  {
    category: 'Tools',
    icon: Terminal,
    items: ['VS Code', 'Postman', 'Docker', 'Linux'],
    color: 'text-teal-500',
    bgColor: 'hover:bg-teal-50 dark:hover:bg-teal-900/20',
  },
];

const funFacts = [
  { number: '500+', label: 'Coding Problems Solved' },
  { number: '10+', label: 'Projects Completed' },
  { number: '5+', label: 'MERN Stack Projects' },
  { number: '3+', label: 'Years of Coding' },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity }}
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a passionate Full Stack Developer with expertise in the MERN stack and a strong foundation in C++. 
              My journey in tech has been driven by a constant desire to learn and create impactful solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              With a background in Computer Science and hands-on experience in web development, 
              I specialize in building scalable web applications and solving complex problems.
            </p>
            <div className="flex gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                onClick={() => window.location.href = '#projects'}
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                onClick={() => window.location.href = '#contact'}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            style={{ y }}
            className="grid grid-cols-2 gap-6"
          >
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)'
                }}
                className="bg-purple-50 dark:bg-gray-800 p-6 rounded-lg text-center transform transition-all"
              >
                <motion.h3 
                  className="text-3xl font-bold text-purple-600 dark:text-purple-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {fact.number}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-400">{fact.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all ${skill.bgColor}`}
              >
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  whileHover={{ x: 5 }}
                >
                  <Icon className={`w-6 h-6 ${skill.color}`} />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                </motion.div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.span
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm cursor-pointer ${skill.color} hover:bg-opacity-20`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}