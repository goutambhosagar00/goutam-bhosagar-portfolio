import "../styles/hero.css";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="badge">Available for Freelance Projects</span>

        <h1>
          Hi, I'm <br />
          <span className="gradient-text">Goutam</span>
          <br />
          <span className="gradient-text">Bhosagar</span>
        </h1>

        <p>
          Full-Stack Developer & Product Builder. <br />
          Creating modern digital experiences for startups and businesses.
        </p>

        <div className="hero-buttons">
          <button className="btn primary">View Projects →</button>
          <button className="btn secondary">Hire Me</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-ring">
          <img src={heroImg} alt="Developer workspace" />
          {/* <div className="focus-card">
            <small>CURRENT FOCUS</small>
            <strong>Building Bizzo 🚀</strong>
          </div> */}
        </div>
      </div>
    </section>
  );
}
