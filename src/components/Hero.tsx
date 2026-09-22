"use client";

import Image from "next/image";

import BlurText from "@/components/BlurText";
import ShinyText from "@/components/ShinyText";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-top">
        <span>GRAPHIC DESIGNER</span>

        <span>AVAILABLE FOR CREATIVE WORK</span>
      </div>

      <div className="hero-image-wrap">
        <div className="hero-image">
          <Image
            src="/denoval-1.jpeg"
            alt="Denoval"
            fill
            priority
            sizes="(max-width: 800px) 90vw, 42vw"
          />

          <div className="image-overlay" />

          <div className="image-caption">
            <span>DENOVAL</span>
            <span>CREATIVE VISUALS</span>
          </div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-mini">
          <span className="live-dot" />
          DESIGN / VISUAL / CREATIVE
        </div>

        <h1>
          <BlurText text="DENOVAL" delay={100} />

          <span className="hero-outline">
            <ShinyText>DESIGN</ShinyText>
          </span>
        </h1>

        <div className="hero-description">
          <p>
            Need visuals that make your idea
            <br />
            feel more alive?
          </p>

         
        </div>
      </div>

    </section>
  );
}