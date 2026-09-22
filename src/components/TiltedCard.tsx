"use client";

import { useRef } from "react";

type TiltedCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TiltedCard({
  children,
  className = "",
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -7;
    const rotateY = ((x / rect.width) - 0.5) * 7;

    element.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.015)
    `;
  };

  const leave = () => {
    if (!ref.current) return;

    ref.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={`tilted-card ${className}`}
    >
      {children}
    </div>
  );
}