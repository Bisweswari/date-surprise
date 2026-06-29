import { motion } from "framer-motion";

const pieces = Array.from({ length: 120 });

export default function ConfettiEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 3 + Math.random() * 3;

        return (
          <motion.div
            key={i}
            initial={{
              y: -40,
              x: `${left}vw`,
              rotate: 0,
              opacity: 1,
            }}
            animate={{
              y: "110vh",
              rotate: 720,
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-3 h-3 rounded-sm"
            style={{
              backgroundColor: [
                "#ff4d6d",
                "#ffbe0b",
                "#3a86ff",
                "#06d6a0",
                "#8338ec",
                "#fb5607",
              ][i % 6],
            }}
          />
        );
      })}
    </div>
  );
}
