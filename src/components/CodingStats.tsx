import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Trophy, Award } from 'lucide-react';


interface CodingStats {
  leetcode: {
    solved: number;
    ranking: number;
    contestRating: number;
  };
  geeksforgeeks: {
    solved: number;
    ranking: number;
    score: number;
  };
}

export function CodingStats() {
  const [stats, setStats] = useState<CodingStats>({
    leetcode: {
      solved: 200,
      ranking: 133090,
      contestRating: 1650
    },
    geeksforgeeks: {
      solved: 300,
      ranking: 200,
      score: 2500
    }
  });

  // In a real implementation, you would fetch the stats from the respective APIs
  useEffect(() => {

    // Fetch stats here
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Coding Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              LeetCode Stats
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 dark:text-gray-300">Problems Solved</p>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {stats.leetcode.solved}+
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-300">Global Ranking</p>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  Top {stats.leetcode.ranking}
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-300">Contest Rating</p>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {stats.leetcode.contestRating}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <Award className="w-6 h-6 text-green-500" />
              GeeksforGeeks Stats
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 dark:text-gray-300">Problems Solved</p>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {stats.geeksforgeeks.solved}+
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-300">Institute Rank</p>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  Top {stats.geeksforgeeks.ranking}
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-300">Overall Score</p>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {stats.geeksforgeeks.score}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}