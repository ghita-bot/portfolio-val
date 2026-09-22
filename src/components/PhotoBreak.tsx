"use client";

import Image from "next/image";

import ScrollReveal from "@/components/ScrollReveal";
import ShinyText from "@/components/ShinyText";

export default function PhotoBreak() {
  return (
    <section className="photo-break">
      <div className="photo-break-top">
        <span>(02)</span>
        <span>THE PERSON BEHIND THE VISUAL</span>
      </div>

      <div className="photo-stage">
        <div className="photo-main">
          <Image
            src="/denoval-2.jpeg"
            alt="Denoval creative portrait"
            fill
            sizes="100vw"
          />

          <div className="photo-gradient" />

          <div className="photo-text">
            <span>
              <ShinyText>CREATE.</ShinyText>
            </span>

            <span>EXPLORE.</span>

            <span>REPEAT.</span>
          </div>
        </div>

        <ScrollReveal className="photo-note">
          <span>DENOVAL / 2026</span>

          <p>
            Good visuals don&apos;t always need to say more.
            Sometimes they just need to say the right thing.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}