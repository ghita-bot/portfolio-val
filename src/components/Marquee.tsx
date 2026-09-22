"use client";

export default function Marquee() {
  const items = [
    "GRAPHIC DESIGN",
    "VISUAL DESIGN",
    "CREATIVE",
    "DENOVAL",
  ];

  return (
    <section className="pink-marquee">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <div className="marquee-pink" key={`${item}-${index}`}>
            <span>{item}</span>
            <b>✦</b>
          </div>
        ))}
      </div>
    </section>
  );
}