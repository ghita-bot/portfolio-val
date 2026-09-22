"use client";

type ScrollVelocityProps = {
  text: string;
  reverse?: boolean;
};

export default function ScrollVelocity({
  text,
  reverse = false,
}: ScrollVelocityProps) {
  return (
    <div className="velocity-wrapper">
      <div className={`velocity-track ${reverse ? "reverse" : ""}`}>
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index}>
            {text}
            <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  );
}