import { useEffect, useState } from "react";

export default function TypeWriter({
  text,

  speed = 45,
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;

    setDisplay("");

    const timer = setInterval(() => {
      setDisplay(text.slice(0, i + 1));

      i++;

      if (i >= text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <h2 className="text-white text-2xl md:text-3xl font-semibold leading-10">
      {display}

      <span className="animate-pulse">|</span>
    </h2>
  );
}
