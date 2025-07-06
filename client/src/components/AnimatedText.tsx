import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

const AnimatedText = ({ text, className = "", delay = 0, stagger = false }: AnimatedTextProps) => {
  if (stagger) {
    const words = text.split(" ");
    return (
      <motion.div className={className}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + index * 0.1,
              ease: "easeOut",
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;
