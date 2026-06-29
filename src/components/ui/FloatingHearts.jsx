import { motion } from "framer-motion";

const hearts = ["❤️", "💕", "💖", "💗", "💘", "💝", "💞", "💓"];

export default function FloatingHearts() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 20 }).map((_, index) => {
        const left = Math.random() * 100;
        const duration = 8 + Math.random() * 6;
        const delay = Math.random() * 5;
        const size = 22 + Math.random() * 22;
        const emoji = hearts[Math.floor(Math.random() * hearts.length)];

        return (
          <motion.div
            key={index}
            initial={{
              y: "110vh",
              opacity: 0,
              x: 0,
            }}
            animate={{
              y: "-20vh",
              opacity: [0, 1, 1, 0],
              x: [0, -20, 20, -10, 0],
              rotate: [0, 20, -20, 15, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
              delay,
            }}
            className="absolute select-none"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
            }}
          >
            {emoji}
          </motion.div>
        );
      })}
    </div>
  );
}
