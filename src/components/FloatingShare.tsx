"use client";

import { useState } from "react";

export default function FloatingShare() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`floating-share ${open ? "is-open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="floating-share-items">
        {/* Instagram 1 */}
        <a
          href="https://www.instagram.com/iamdenovaa?stkn=MWQ5OGl5bmJvem1veg=="
          className="floating-share-item"
          aria-label="Instagram"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <circle
              cx="12"
              cy="12"
              r="4"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
          </svg>
        </a>

        {/* Instagram 2 */}
        <a
          href="https://www.instagram.com/d_novallmina?stkn=MWlibGdiMG5zMzF1ZQ=="
          className="floating-share-item"
          aria-label="Instagram 2"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <circle
              cx="12"
              cy="12"
              r="4"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/message/RHW67GVWH4YTB1"
          className="floating-share-item"
          aria-label="WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 11.5C20 15.64 16.42 19 12 19C10.55 19 9.2 18.63 8.05 17.98L4 19L5.15 15.18C4.42 14.13 4 12.87 4 11.5C4 7.36 7.58 4 12 4C16.42 4 20 7.36 20 11.5Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path
              d="M9 9.5C9.2 10.7 10.6 12.8 12.2 13.7C13.2 14.25 14.15 14.45 15 14.1"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </a>

        {/* Pinterest */}
        <a
          href="https://pin.it/3IZwdLE7G"
          className="floating-share-item"
          aria-label="Pinterest"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4.2C7.8 4.2 5 7.2 5 10.7C5 13 6.3 15 8.25 15.55C8.52 15.63 8.65 15.59 8.72 15.35L9.05 14.08C9.1 13.88 9.07 13.8 8.92 13.61C8.36 12.93 8 12.03 8 10.8C8 8.25 9.93 6.2 12.55 6.2C14.88 6.2 16.45 7.72 16.45 9.75C16.45 12.5 15.25 14.83 13.48 14.83C12.5 14.83 11.78 14.02 12.02 13.03C12.3 11.85 12.84 10.58 12.84 9.72C12.84 8.95 12.43 8.3 11.6 8.3C10.62 8.3 9.84 9.25 9.84 10.52C9.84 11.33 10.12 11.88 10.12 11.88L9.05 16.42C8.73 17.78 9 19.45 9.03 19.62C9.05 19.72 9.17 19.75 9.23 19.62C9.3 19.53 10.22 18.38 10.57 17.04L11.03 15.25C11.4 15.95 12.42 16.55 13.43 16.55C16.67 16.55 18.85 13.6 18.85 9.63C18.85 6.6 16.3 4.2 12 4.2Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      {/* Share button */}
      <button
        type="button"
        className="floating-share-button"
        aria-label="Open social links"
        aria-expanded={open}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="5"
            r="2.2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="6"
            cy="12"
            r="2.2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="18"
            cy="19"
            r="2.2"
            stroke="currentColor"
            strokeWidth="1.8"
          />

          <path
            d="M8 11L16 6.3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          <path
            d="M8 13L16 17.7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}