import "../styles/projects.css";
import erp from "../assets/about.jpg";
import admission from "../assets/about.jpg";
import creditbuddy from "../assets/about.jpg";
import freelance from "../assets/about.jpg";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2>Featured Projects</h2>
        <p>A selection of my recent work and ongoing developments.</p>
      </div>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img src={erp} alt="ERP System" />
          <div className="project-content">
            <span className="tag">Web Application</span>
            <h3>Enterprise ERP System</h3>
            <p>
              A comprehensive ERP solution for managing business resources,
              inventory tracking, HR management, and financial reporting.
            </p>

            <div className="tech">
              <span>React</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
            </div>

            <a className="demo-btn" href="https://github.com/goutambhosagar00">Live Demo</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src={admission} alt="Online Admission" />
          <div className="project-content">
            <span className="tag">EdTech Platform</span>
            <h3>Online Admission Portal</h3>
            <p>
              Digital admission system streamlining enrollment, payments,
              and document verification for institutions.
            </p>

            <div className="tech">
              <span>Next.js</span>
              <span>Firebase</span>
              <span>Stripe</span>
            </div>

            <a className="demo-btn" href="https://github.com/goutambhosagar00">Live Demo</a>
          </div>
        </div>

        {/* Project 3
        <div className="project-card">
          <img src={creditbuddy} alt="CreditBuddy" />
          <div className="project-content">
            <span className="tag">FinTech (Ongoing)</span>
            <h3>CreditBuddy</h3>
            <p>
              A personal finance product helping users track credit scores
              and manage loans. Currently under active development.
            </p>

            <div className="tech">
              <span>React Native</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>

            <a className="demo-btn" href="#">Live Demo</a>
          </div>
        </div> */}

        {/* Project 4 */}
        <div className="project-card">
          <img src={freelance} alt="Portfolio Project" />
          <div className="project-content">
            <span className="tag">Client Project</span>
            <h3>Portfolio for Freelancer</h3>
            <p>
              A modern portfolio website designed and developed for a
              freelance photographer with interactive galleries.
            </p>

            <div className="tech">
              <span>React</span>
              <span>Framer Motion</span>
              <span>Tailwind</span>
            </div>

            <a className="demo-btn" href="https://github.com/goutambhosagar00">Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
