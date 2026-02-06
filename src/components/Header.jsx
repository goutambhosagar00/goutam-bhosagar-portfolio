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

        <a href="https://www.linkedin.com/in/goutam-bhosagar-91559a301/" className="hire-btn desktop">Hire Me</a>

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
          <a href="https://github.com/goutambhosagar00" aria-label="GitHub">🐙</a>
            <a href="https://www.linkedin.com/in/goutam-bhosagar-91559a301/" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">🐦</a>
        </div>
      </div>
    </>
  );
}
