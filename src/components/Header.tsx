import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:py-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-white"
        >
          $VORTEX
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Portal', 'Rewards', 'Community'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-2 font-medium text-white shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Buy Now
          </motion.button>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/30 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['Home', 'Portal', 'Rewards', 'Community'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 font-medium text-white">
              Buy Now
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
