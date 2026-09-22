"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        DENO<span>VAL</span>
      </a>

      <nav className={open ? "nav-links open" : "nav-links"}>
        <a href="#services" onClick={() => setOpen(false)}>
          SERVICES
        </a>

        <a href="#contact" onClick={() => setOpen(false)}>
          CONTACT
        </a>

        <a href="#socials" onClick={() => setOpen(false)}>
          SOCIALS
        </a>
      </nav>

      <a href="#contact" className="nav-cta">
        LET&apos;S TALK ↗
      </a>

      <button
        className="mobile-menu"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        <span />
        <span />
      </button>
    </header>
  );
}