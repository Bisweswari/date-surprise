import { motion } from "framer-motion";

const balloons = [
  "#ff4d6d",
  "#ff006e",
  "#8338ec",
  "#3a86ff",
  "#06d6a0",
  "#ffbe0b",
];

export default function BalloonAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {balloons.map((color, index) => (
        <motion.div
          key={index}
          initial={{
            y: "110vh",
            x: `${10 + index * 14}vw`,
          }}
          animate={{
            y: "-20vh",
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5,
          }}
          className="absolute flex flex-col items-center"
        >
          <div
            className="w-12 h-16 rounded-full"
            style={{
              backgroundColor: color,
            }}
          />

          <div className="w-px h-20 bg-white/70" />
        </motion.div>
      ))}
    </div>
  );
}
