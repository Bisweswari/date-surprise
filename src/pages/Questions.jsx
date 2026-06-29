import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Background from "../components/layout/Background";
import FloatingHearts from "../components/ui/FloatingHearts";
import Sparkles from "../components/ui/Sparkles";
import ProgressBar from "../components/ui/ProgressBar";

import QuestionCard from "../components/questions/QuestionCard";

import questions from "../data/questions";

export default function Questions() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState({});

  const [loading, setLoading] = useState(false);

  // -----------------------

  const handleSelect = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: option,
    }));
  };

  // -----------------------

  const handleNext = () => {
    if (!answers[currentQuestion] || loading) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setLoading(true);

      navigate("/result", {
        state: {
          answers,
        },
      });
    }
  };

  // -----------------------

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  // -----------------------

  const current = questions[currentQuestion];

  const selected = answers[currentQuestion];

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <Background />

      <FloatingHearts />

      <Sparkles />

      <div className="relative z-20 w-[92%] max-w-3xl">
        <ProgressBar current={currentQuestion + 1} total={questions.length} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{
              opacity: 0,
              x: 120,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -120,
            }}
            transition={{
              duration: 0.45,
            }}
            className="mt-10"
          >
            <QuestionCard
              question={current}
              selected={selected}
              onSelect={handleSelect}
            />
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}

        <div className="flex justify-between mt-10">
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            disabled={currentQuestion === 0}
            onClick={handlePrevious}
            className={`

            px-8
            py-4
            rounded-full
            font-semibold
            shadow-lg

            ${
              currentQuestion === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-white/20 text-white backdrop-blur-lg hover:bg-white/30"
            }

            `}
          >
            ← Previous
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!selected || loading}
            onClick={handleNext}
            className={`
    px-8
    py-4
    rounded-full
    font-semibold
    shadow-lg
    ${
      !selected || loading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-pink-600 hover:bg-pink-700 text-white"
    }
  `}
          >
            {loading
              ? "Loading..."
              : currentQuestion === questions.length - 1
                ? "Finish ❤️"
                : "Next →"}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
