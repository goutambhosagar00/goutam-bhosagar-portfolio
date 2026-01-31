import "../styles/about.css";
import aboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <img src={aboutImg} alt="About visual" />
      </div>

      <div className="about-right">
        <span className="about-badge">About Me</span>

        <h2>
          Turning Ideas into <span>Real-World Solutions</span>
        </h2>

        <p>
          I am Goutam Bhosagar, a Full-Stack Developer with a passion for building
          scalable web and mobile applications. With a background in both
          development and digital marketing, I understand what makes a product
          successful—from code quality to user acquisition.
        </p>

        <p>
          Currently, I’m focused on helping startups and businesses launch their
          digital products while building my own venture, <strong>Bizzo</strong>.
        </p>

        <div className="about-cards">
          <div className="card">
            <span>〈 / 〉</span>
            <h4>Clean Code</h4>
          </div>

          <div className="card">
            <span>🚀</span>
            <h4>Fast Delivery</h4>
          </div>

          <div className="card">
            <span>👥</span>
            <h4>User Centric</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
