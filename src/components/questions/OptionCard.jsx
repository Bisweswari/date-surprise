import { motion } from "framer-motion";

export default function OptionCard({ option, onClick, selected }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -4,
      }}
      whileTap={{
        scale: 0.96,
      }}
      onClick={onClick}
      className={`
      w-full
      rounded-2xl
      p-5
      text-lg
      font-semibold
      transition-all
      duration-300
      shadow-lg

      ${
        selected
          ? "bg-pink-600 text-white"
          : "bg-white/20 text-white backdrop-blur-lg hover:bg-white/30"
      }
      `}
    >
      {option}
    </motion.button>
  );
}
