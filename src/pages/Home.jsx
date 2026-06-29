import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MusicButton from "../components/ui/MusicButton";
import TypeWriter from "../components/ui/TypeWriter";

import Background from "../components/layout/Background";
import FloatingHearts from "../components/ui/FloatingHearts";
import Sparkles from "../components/ui/Sparkles";
import Envelope from "../components/ui/Envelope";

export default function Home() {
  const navigate = useNavigate();

  const [showEnvelope, setShowEnvelope] = useState(false);

  const openQuestions = () => {
    setShowEnvelope(false);

    setTimeout(() => {
      navigate("/questions");
    }, 600);
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <Background />

      {/* Floating Hearts */}
      <FloatingHearts />

      {/* Sparkles */}
      <Sparkles />

      {/* Main Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-20 w-[92%] max-w-2xl rounded-[40px]
        border border-white/30
        bg-white/20
        backdrop-blur-xl
        shadow-[0_25px_80px_rgba(255,105,180,.35)]
        p-10 md:p-14 text-center"
      >
        {/* Emoji */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-7xl md:text-8xl"
        >
          🥰
        </motion.div>

        {/* Heading */}

        <TypeWriter text="Hey My Love ❤️" />

        {/* Message */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-lg md:text-2xl leading-9 text-white"
        >
          Every moment with you
          <br />
          becomes my favourite memory.
          <br />
          <br />
          So I made this little surprise
          <br />
          just for us.
          <br />
          <br />
          Let's discover our perfect date together.
        </motion.p>

        {/* Button */}

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 35px rgba(255,105,180,.8)",
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => setShowEnvelope(true)}
          className="
          mt-12
          rounded-full
          bg-gradient-to-r
          from-pink-500
          via-rose-500
          to-fuchsia-600
          px-10
          py-4
          text-xl
          font-bold
          text-white
          shadow-xl
          transition-all
          duration-300"
        >
          Start Our Journey 💖
        </motion.button>

        {/* Bottom Text */}

        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-8 text-pink-100 text-sm tracking-widest"
        >
          Made with ❤️ especially for you
        </motion.p>
      </motion.div>

      {/* Envelope Popup */}

      {showEnvelope && <Envelope onOpen={openQuestions} />}
      <MusicButton />
    </section>
  );
}
