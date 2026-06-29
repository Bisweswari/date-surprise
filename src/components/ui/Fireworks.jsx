import { motion } from "framer-motion";

const bursts = Array.from({ length: 8 });

export default function Fireworks() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {bursts.map((_, burstIndex) => {
        const centerX = 10 + Math.random() * 80;
        const centerY = 10 + Math.random() * 50;

        return (
          <div
            key={burstIndex}
            className="absolute"
            style={{
              left: `${centerX}%`,
              top: `${centerY}%`,
            }}
          >
            {Array.from({ length: 16 }).map((__, i) => {
              const angle = (360 / 16) * i;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * 80;
              const y = Math.sin(rad) * 80;

              return (
                <motion.div
                  key={i}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  animate={{
                    x,
                    y,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: burstIndex * 0.4,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: [
                      "#ff006e",
                      "#ffbe0b",
                      "#06d6a0",
                      "#3a86ff",
                      "#8338ec",
                    ][i % 5],
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
