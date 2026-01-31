import "../styles/skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <h2>Technical Skills</h2>
        <p>My toolkit for building high-quality software products.</p>
      </div>

      <div className="skills-grid">
        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="tags">
            <span>React.js</span>
            <span>Next.js</span>
            <span>Tailwind CSS</span>
            <span>Redux</span>
            <span>TypeScript</span>
            <span>HTML5 / CSS3</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card active">
          <h3>Backend</h3>
          <div className="tags">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>Python</span>
            <span>Firebase</span>
            <span>REST APIs</span>
          </div>
        </div>

        {/* Database */}
        <div className="skill-card">
          <h3>Database</h3>
          <div className="tags">
            <span>MongoDB</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>Firestore</span>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools</h3>
          <div className="tags">
            <span>Git</span>
            <span>Docker</span>
            <span>Figma</span>
            <span>VS Code</span>
            <span>Postman</span>
            <span>Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
}
