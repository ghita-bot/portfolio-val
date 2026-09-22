"use client";

import ScrollReveal from "@/components/ScrollReveal";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/d_novallmina?stkn=MWlibGdiMG5zMzF1ZQ==",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/iamdenovaa?stkn=MWQ5OGl5bmJvem1veg==",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://pin.it/3IZwdLE7G",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3.5a8.5 8.5 0 0 0-3.1 16.42c-.07-1.4-.01-3.08.35-4.48l1.05-4.43s-.27-.54-.27-1.34c0-1.25.73-2.18 1.64-2.18.77 0 1.14.58 1.14 1.27 0 .77-.49 1.93-.74 3-.21.94.47 1.7 1.4 1.7 1.68 0 2.98-1.77 2.98-4.32 0-2.26-1.62-3.84-3.93-3.84-2.68 0-4.25 2.01-4.25 4.09 0 .81.31 1.68.7 2.15.08.1.09.19.07.29l-.26 1.05c-.04.17-.14.2-.32.12-1.18-.55-1.92-2.27-1.92-3.66 0-2.98 2.17-5.72 6.25-5.72 3.28 0 5.83 2.34 5.83 5.46 0 3.26-2.05 5.88-4.9 5.88-.96 0-1.86-.5-2.17-1.09l-.59 2.25c-.21.82-.78 1.85-1.16 2.48.87.27 1.79.42 2.75.42A8.5 8.5 0 0 0 12 3.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/message/RHW67GVWH4YTB1",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3.5a8.5 8.5 0 0 0-7.34 12.79L3.5 20.5l4.35-1.13A8.5 8.5 0 1 0 12 3.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M9.2 8.6c.18-.2.39-.22.62-.06l.72.52c.2.14.25.34.15.56l-.35.79c-.08.18-.06.32.05.48.47.68 1.08 1.28 1.77 1.75.15.1.3.12.47.04l.77-.37c.23-.11.43-.06.57.14l.53.71c.17.23.14.44-.06.63-.38.36-.83.56-1.33.52-1.08-.09-2.29-.75-3.35-1.8-1.05-1.05-1.71-2.26-1.8-3.34-.04-.5.16-.95.54-1.32Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-glow" />

      <div className="cta-label">
        <span>(03)</span>
        <span>LET&apos;S WORK</span>
      </div>

      <ScrollReveal>
        <div className="cta-content">
          <p>HAVE AN IDEA?</p>

          <h2>
            LET&apos;S MAKE
            <br />
            IT <span>VISUAL.</span>
          </h2>

          <a href="#socials" className="cta-button">
            START A PROJECT
            <span>↗</span>
          </a>
        </div>
      </ScrollReveal>

      <div className="floating-socials">
        {socials.map((social, index) => (
          <a
            key={`${social.name}-${index}`}
            href={social.href}
            className="floating-social"
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
}