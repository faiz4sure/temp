import { useState, useEffect } from "react";
import { X, Github, Instagram, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DeveloperCreditsProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeveloperCredits = ({ isOpen, onClose }: DeveloperCreditsProps) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 8000); // Auto-close after 8 seconds
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-4 left-4 right-4 z-50 max-w-md mx-auto"
        >
          <div className="glass-card p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <User className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold gradient-text">Developer</h3>
              </div>
              
              <p className="text-2xl font-semibold text-white">Faiz Khan</p>
              
              <div className="flex justify-center space-x-4 pt-2">
                <a
                  href="https://github.com/faiz4sure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                
                <a
                  href="https://www.instagram.com/1dotfaizkhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeveloperCredits;