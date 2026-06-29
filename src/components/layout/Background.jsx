import { motion } from "framer-motion";

const circles = [
  {
    size: "w-96 h-96",
    color: "bg-pink-400",
    top: "-10%",
    left: "-10%",
    duration: 12,
  },
  {
    size: "w-[450px] h-[450px]",
    color: "bg-purple-400",
    bottom: "-15%",
    right: "-10%",
    duration: 18,
  },
  {
    size: "w-72 h-72",
    color: "bg-rose-300",
    top: "40%",
    left: "60%",
    duration: 15,
  },
  {
    size: "w-80 h-80",
    color: "bg-fuchsia-300",
    top: "10%",
    right: "20%",
    duration: 20,
  },
];

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pink-300 via-rose-200 to-fuchsia-300"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "300% 300%",
        }}
      />

      {/* Glowing Blobs */}

      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[140px] opacity-40 ${circle.size} ${circle.color}`}
          style={{
            top: circle.top,
            left: circle.left,
            bottom: circle.bottom,
            right: circle.right,
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Decorative Blur */}

      <div className="absolute inset-0 backdrop-blur-[2px]" />
    </div>
  );
}
