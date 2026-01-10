import { useState, useEffect } from "react";

const RotatingText = ({ texts, typingSpeed = 100, pause = 1000 }) => {
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!deleting) {
      if (charIndex <= currentText.length) {
        timeout = setTimeout(() => {
          setText(currentText.substring(0, charIndex));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (charIndex >= 0) {
        timeout = setTimeout(() => {
          setText(currentText.substring(0, charIndex));
          setCharIndex(charIndex - 1);
        }, typingSpeed / 2);
      } else {
        setDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, typingSpeed, pause]);

  return (
    <span className="text-2xl md:text-3xl font-mono text-violet-500">
      {text}
      <span className="inline-block w-1 h-6 ml-1 bg-gray-500 animate-blink"></span>
      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s step-start infinite; }
      `}</style>
    </span>
  );
};

export default RotatingText;
