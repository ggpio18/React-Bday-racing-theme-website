import { motion } from 'framer-motion';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="text-center">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-red-500"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Racing Birthday Celebration! 🏎️
        </motion.h1>
        
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl mb-4">Join the Race!</h2>
          <p className="text-xl mb-6">Get ready for the most exciting birthday celebration ever!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">🏁 Race Track</h3>
              <p>Experience the thrill of speed</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">🎮 Racing Games</h3>
              <p>Compete with friends</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">🎂 Pit Stop Party</h3>
              <p>Celebrate in style</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}