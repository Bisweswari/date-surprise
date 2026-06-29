import { motion } from "framer-motion";
import OptionCard from "./OptionCard";

export default function QuestionCard({
  question,

  selected,

  onSelect,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="bg-white/15 backdrop-blur-xl rounded-[35px] border border-white/20 shadow-2xl p-10"
    >
      <h2 className="text-3xl text-white font-bold text-center">
        {question.question}
      </h2>

      <div className="grid gap-5 mt-10">
        {question.options.map((option) => (
          <OptionCard
            key={option}
            option={option}
            selected={selected === option}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>
    </motion.div>
  );
}
