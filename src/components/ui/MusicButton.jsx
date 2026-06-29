import { useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

import music from "../../assets/music/romantic.mp3";

export default function MusicButton() {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full bg-pink-600 text-white shadow-xl hover:scale-110 transition"
      >
        {playing ? <FaPause /> : <FaMusic />}
      </button>

      <audio ref={audioRef} loop src={music} />
    </>
  );
}
