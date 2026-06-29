import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Envelope({ onOpen }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Envelope */}
        <div className="relative w-80 h-56">
          {/* Body */}
          <div className="absolute bottom-0 w-full h-40 bg-pink-500 rounded-b-xl shadow-2xl"></div>

          {/* Left flap */}
          <div
            className="absolute bottom-0 left-0 w-0 h-0
            border-l-[160px]
            border-l-transparent
            border-b-[160px]
            border-b-pink-400"
          ></div>

          {/* Right flap */}
          <div
            className="absolute bottom-0 right-0 w-0 h-0
            border-r-[160px]
            border-r-transparent
            border-b-[160px]
            border-b-pink-400"
          ></div>

          {/* Top flap */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{ rotateX: -180 }}
            transition={{
              delay: 0.6,
              duration: 1,
            }}
            style={{
              transformOrigin: "top",
            }}
            className="absolute top-0 left-0 w-0 h-0
            border-l-[160px]
            border-l-transparent
            border-r-[160px]
            border-r-transparent
            border-t-[110px]
            border-t-pink-600"
          />

          {/* Letter */}

          <motion.div
            initial={{ y: 70 }}
            animate={{ y: -30 }}
            transition={{
              delay: 1.1,
              duration: 1,
            }}
            className="absolute left-5 right-5 bottom-5 bg-white rounded-xl shadow-xl p-5"
          >
            <div className="text-center">
              <FaHeart className="mx-auto text-pink-500 text-3xl" />

              <h2 className="mt-3 text-xl font-bold text-pink-600">
                A Little Surprise ❤️
              </h2>

              <p className="text-gray-600 mt-2 text-sm">
                Open this letter and let's create our perfect date together.
              </p>

              <button
                onClick={onOpen}
                className="mt-5 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold"
              >
                Open My Heart 💖
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
