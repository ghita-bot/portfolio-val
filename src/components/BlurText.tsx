"use client";

import { useEffect, useState } from "react";

type BlurTextProps = {
  text: string;
  delay?: number;
  className?: string;
};

export default function BlurText({
  text,
  delay = 70,
  className = "",
}: BlurTextProps) {
  const letters = text.split("");

  const [visible, setVisible] = useState<boolean[]>(
    () => new Array(letters.length).fill(false)
  );

  useEffect(() => {
    const timers = letters.map((_, index) =>
      window.setTimeout(() => {
        setVisible((current) => {
          const next = [...current];
          next[index] = true;
          return next;
        });
      }, index * delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [delay, letters.length]);

  return (
    <span className={`blur-text ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className={visible[index] ? "blur-letter visible" : "blur-letter"}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}