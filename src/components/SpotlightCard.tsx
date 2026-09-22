"use client";

import { useRef } from "react";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    element.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`
    );

    element.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight-card ${className}`}
    >
      <div className="spotlight-glow" />
      <div className="spotlight-content">{children}</div>
    </div>
  );
}