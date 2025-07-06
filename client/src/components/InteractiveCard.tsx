import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const InteractiveCard = ({ children, className = "", delay = 0, hover = true }: InteractiveCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      whileHover={hover ? { scale: 1.05, y: -5 } : {}}
      className={`glass-card ${hover ? "hover:glow-effect" : ""} transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default InteractiveCard;
