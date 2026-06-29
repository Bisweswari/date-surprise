import { motion } from "framer-motion";

export default function ProgressBar({
  current,

  total,
}) {
  const percent = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between text-pink-100 mb-2">
        <span>
          Question {current} of {total}
        </span>

        <span>{Math.round(percent)}%</span>
      </div>

      <div className="h-3 rounded-full bg-white/20 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5 }}
          className="h-full rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500"
        />
      </div>
    </div>
  );
}
