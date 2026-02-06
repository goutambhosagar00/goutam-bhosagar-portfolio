import "../styles/education.css";

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="education-header">
        <h2>Education</h2>
        <h9>My academic journey and qualifications.</h9>
      </div>

      <div className="timeline">
        {/* B.Tech */}
        <div className="timeline-item">
          <span className="dot"></span>
          <div className="content">
            <div className="top">
              <h3>B.Tech in Computer Science (Lateral Entry)</h3>
              <span className="year">2023 – 2026</span>
            </div>

            <h4>Bhubaneswar Engineering College(BEC) Affiliated by BPUT</h4>
            <p>
              Pursuing Bachelor of Technology with a focus on advanced
              computing, algorithms, and software engineering.
            </p>

            <span className="status in-progress">In Progress</span>
          </div>
        </div>

        {/* Diploma */}
        <div className="timeline-item">
          <span className="dot"></span>
          <div className="content">
            <div className="top">
              <h3>Diploma in Computer Engineering</h3>
              <span className="year">2020 – 2023</span>
            </div>

            <h4>Vikash Polytechnic Affiliated by SCTE&VT</h4>
            <p>
              Completed diploma with distinction. Learned fundamentals of
              programming, networking, and database management.
            </p>

            <span className="status completed">Completed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
