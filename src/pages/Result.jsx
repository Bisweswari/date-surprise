import { motion, AnimatePresence } from "framer-motion";

import { useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

import Background from "../components/layout/Background";

import FloatingHearts from "../components/ui/FloatingHearts";

import Sparkles from "../components/ui/Sparkles";

import ConfettiEffect from "../components/ui/ConfettiEffect";

import BalloonAnimation from "../components/ui/BalloonAnimation";

import Fireworks from "../components/ui/Fireworks";

import { sendResponse } from "../services/email";

export default function Result() {
  const location = useLocation();

  const answers = location.state?.answers || {};

  const datePlan = [
    answers[0],

    answers[1],

    answers[2],

    answers[3],

    answers[4],

    answers[5],
  ];

  const [accepted, setAccepted] = useState(false);

  const [showLetter, setShowLetter] = useState(false);

  const [showPlan, setShowPlan] = useState(false);

  const [showProposal, setShowProposal] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [noPosition, setNoPosition] = useState({
    x: 0,

    y: 0,
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLetter(true), 600);

    const timer2 = setTimeout(() => setShowPlan(true), 1500);

    const timer3 = setTimeout(() => setShowProposal(true), 2400);

    return () => {
      clearTimeout(timer1);

      clearTimeout(timer2);

      clearTimeout(timer3);
    };
  }, []);

  const handleYes = async () => {
    if (submitted) return;

    setSubmitted(true);
    setAccepted(true);

    try {
      await sendResponse(answers);

      setTimeout(() => {
        setShowModal(true);
      }, 800);
    } catch (error) {
      console.error(error);
      setSubmitted(false);
      alert("Unable to send the response.");
    }
  };

  const moveNoButton = () => {
    const x = Math.random() * 250 - 125;

    const y = Math.random() * 180 - 90;

    setNoPosition({
      x,

      y,
    });
  };

  const targetDate = new Date("2026-07-01T09:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center py-16">
      <Background />

      <FloatingHearts />

      <Sparkles />

      {accepted && <ConfettiEffect />}

      {accepted && <BalloonAnimation />}

      {accepted && <Fireworks />}

      <motion.div
        initial={{
          opacity: 0,

          scale: 0.9,

          y: 60,
        }}
        animate={{
          opacity: 1,

          scale: 1,

          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative z-20 w-[92%] max-w-5xl rounded-[42px] bg-white/15 backdrop-blur-2xl border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,.35)] p-10"
      >
        <motion.div
          animate={{
            scale: [1, 1.08, 1],

            rotate: [-2, 2, -2],
          }}
          transition={{
            repeat: Infinity,

            duration: 3,
          }}
          className="text-center text-7xl"
        >
          💌
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,

            y: 25,
          }}
          animate={{
            opacity: 1,

            y: 0,
          }}
          className="text-center text-5xl font-bold text-gray-700 mt-5"
        >
          Our Perfect Date ❤️
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          className="text-center text-pink-500 mt-5 text-lg leading-8"
        >
          Every answer you selected made this date even more beautiful.
          <br />
          I couldn't imagine a better person to spend this day with.
          <br />
          So here's our little dream...
        </motion.p>

        {/* ================= LOVE LETTER ================= */}

        <AnimatePresence>
          {showLetter && (
            <motion.div
              initial={{
                opacity: 0,

                y: 40,

                scale: 0.95,
              }}
              animate={{
                opacity: 1,

                y: 0,

                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="mt-12 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/20 p-8 shadow-xl"
            >
              <motion.h2
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  repeat: Infinity,

                  duration: 2.5,
                }}
                className="text-3xl font-bold text-grey-900 mb-6"
              >
                💖 Dear Love,
              </motion.h2>

              <div className="space-y-5 text-lg leading-9 text-pink-300">
                <p>
                  Every little moment spent with you becomes a memory I never
                  want to forget.
                </p>

                <p>
                  Your smile brightens ordinary days, your laughter turns simple
                  conversations into unforgettable moments, and your presence
                  makes everything feel complete.
                </p>

                <p>So instead of sending a simple message...</p>

                <p>
                  I wanted to create something that belongs only to us —
                  something playful, beautiful, and made with love.
                </p>

                <p>
                  Thank you for answering every tiny question along the way.
                </p>

                <p className="font-semibold text-pink-500 text-xl">
                  Now let's turn these answers into beautiful memories together.
                  ❤️
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= DATE PLAN ================= */}

        <AnimatePresence>
          {showPlan && (
            <motion.div
              initial={{
                opacity: 0,

                y: 50,
              }}
              animate={{
                opacity: 1,

                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="mt-14"
            >
              <h2 className="text-center text-4xl font-bold text-grey-900">
                📅 Our Perfect Date Plan
              </h2>

              <p className="text-center text-pink-400 mt-3">
                Every answer you chose created our own little adventure.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                {datePlan.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.04,

                      rotate: index % 2 === 0 ? -1 : 1,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="rounded-3xl bg-gradient-to-br from-pink-500/30 to-fuchsia-500/20 backdrop-blur-xl border border-white/20 p-6 shadow-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                        {["☕", "🍕", "🎬", "🌇", "🍰", "💖"][index]}
                      </div>

                      <div>
                        <h3 className="text-white font-bold text-lg">
                          Step {index + 1}
                        </h3>

                        <p className="text-pink-100 mt-1">
                          {item || "❤️ Surprise planned just for you"}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= COUNTDOWN ================= */}

        <motion.div
          initial={{
            opacity: 0,

            y: 30,
          }}
          animate={{
            opacity: 1,

            y: 0,
          }}
          transition={{
            delay: 1,
          }}
          className="mt-14"
        >
          <div className="rounded-3xl bg-gradient-to-r from-pink-500/25 via-fuchsia-500/20 to-rose-500/25 backdrop-blur-xl border border-white/20 p-8 text-center shadow-xl">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,

                duration: 2,
              }}
              className="text-6xl"
            >
              ⏳
            </motion.div>

            <h2 className="text-3xl font-bold text-white mt-5">
              Countdown Until Our Date
            </h2>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  animate={{
                    y: [0, -5, 0],
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="rounded-3xl bg-white/20 backdrop-blur-xl border border-white/20 p-6 shadow-xl"
                >
                  <div className="text-5xl font-extrabold text-white">
                    {String(item.value).padStart(2, "0")}
                  </div>

                  <div className="mt-3 uppercase tracking-widest text-pink-100 text-sm">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-pink-100 mt-8 text-lg leading-8">
              Every day brings us one step closer to making these beautiful
              plans come true.
            </p>
          </div>
        </motion.div>

        {/* ================= PROPOSAL SECTION STARTS HERE ================= */}

        <AnimatePresence>
          {showProposal && (
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
                duration: 0.8,
              }}
              className="mt-16 text-center"
            >
              <motion.h2
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  repeat: Infinity,

                  duration: 2,
                }}
                className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
              >
                Will You Go On This Date
                <br />
                With Me? ❤️
              </motion.h2>

              <p className="mt-6 text-pink-400 text-lg max-w-2xl mx-auto leading-8">
                I promise lots of smiles, laughter, unforgettable memories,
                delicious food, and a day we'll both remember forever.
              </p>

              {/* YES BUTTONS */}

              <div className="flex flex-wrap justify-center gap-6 mt-12">
                <motion.button
                  disabled={submitted}
                  whileHover={{
                    scale: 1.08,

                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={handleYes}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xl font-bold shadow-xl"
                >
                  ❤️ {submitted ? "Saving..." : "YES"}
                </motion.button>

                <motion.button
                  disabled={submitted}
                  whileHover={{
                    scale: 1.08,

                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={handleYes}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-xl font-bold shadow-xl"
                >
                  💕 {submitted ? "Saving..." : "OF COURSE"}
                </motion.button>

                <motion.button
                  disabled={submitted}
                  whileHover={{
                    scale: 1.08,

                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={handleYes}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-red-500 text-white text-xl font-bold shadow-xl"
                >
                  🥰 {submitted ? "Saving..." : "ABSOLUTELY"}
                </motion.button>
              </div>

              {/* ESCAPING NO BUTTON */}

              <motion.button
                animate={{
                  x: noPosition.x,

                  y: noPosition.y,
                }}
                transition={{
                  type: "spring",

                  stiffness: 350,
                }}
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                className="mt-10 px-8 py-4 rounded-full bg-gray-700 text-white font-semibold shadow-lg"
              >
                🙈 No
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SUCCESS MODAL */}

        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{
                opacity: 0,

                scale: 0.7,
              }}
              animate={{
                opacity: 1,

                scale: 1,
              }}
              exit={{
                opacity: 0,

                scale: 0.8,
              }}
              transition={{
                duration: 0.45,
              }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
            >
              <motion.div
                initial={{
                  y: 50,
                }}
                animate={{
                  y: 0,
                }}
                className="w-full max-w-xl rounded-[35px] bg-white text-center p-10 shadow-2xl"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],

                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Infinity,

                    duration: 2,
                  }}
                  className="text-7xl"
                >
                  🎉
                </motion.div>

                <h2 className="mt-6 text-4xl font-extrabold text-pink-600">
                  He Said YES!!
                </h2>

                <p className="mt-5 text-gray-700 leading-8 text-lg">
                  This is officially the beginning of another beautiful memory.
                </p>

                <p className="mt-4 text-gray-700 leading-8 text-lg">
                  Thank you for making this little website worthwhile.
                </p>

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    repeat: Infinity,

                    duration: 2,
                  }}
                  className="mt-8 text-5xl"
                >
                  ❤️🥰🌹💍✨
                </motion.div>

                <button
                  onClick={() => setShowModal(false)}
                  className="mt-10 px-8 py-4 rounded-full bg-pink-600 hover:bg-pink-700 text-slate-900 font-bold transition"
                >
                  Continue ❤️
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
