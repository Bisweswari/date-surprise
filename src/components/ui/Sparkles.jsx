import { motion } from "framer-motion";

export default function Sparkles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {Array.from({ length: 40 }).map((_, index) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 4;
        const duration = 2 + Math.random() * 2;
        const size = 3 + Math.random() * 4;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: size,
              height: size,
              boxShadow: "0 0 12px rgba(255,255,255,.9)",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.8, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
            }}
          />
        );
      })}
    </div>
  );
}
