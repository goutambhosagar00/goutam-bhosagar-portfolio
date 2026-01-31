import { useState } from "react";
import "../styles/header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">
          GB<span className="dot">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav desktop">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#bizzo">Bizzo</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="hire-btn desktop">Hire Me</button>

        {/* Mobile Icon */}
        <div className="menu-icon mobile" onClick={() => setOpen(true)}>
          ☰
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <div className="mobile-top">
          <div className="logo">
            GB<span className="dot">.</span>
          </div>
          <div className="close" onClick={() => setOpen(false)}>
            ✕
          </div>
        </div>

        <nav className="mobile-nav">
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#skills">Skills</a>
          <a onClick={() => setOpen(false)} href="#services">Services</a>
          <a onClick={() => setOpen(false)} href="#projects">Projects</a>
          <a onClick={() => setOpen(false)} href="#bizzo">Bizzo</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>
        </nav>

        <div className="socials">
          <span>🐙</span>
          <span>in</span>
          <span>🐦</span>
        </div>
      </div>
    </>
  );
}
