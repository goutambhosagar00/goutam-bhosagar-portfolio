import "../styles/mentor.css";

export default function Mentor() {
  return (
    <section className="mentor" id="mentor">
      <div className="mentor-card">
        <span className="mentor-label">MENTORSHIP & ACADEMIC GUIDANCE</span>

        <h2>Sushanta Meher Sir</h2>
        <h4>Assistant Professor, Computer Science & Engineering</h4>

        <blockquote>
          “True mentorship is about bridging the gap between academic theory
          and real-world innovation. His guidance has been instrumental in
          shaping my understanding of complex technologies and professional
          ethics.”
        </blockquote>

        <div className="mentor-tags">
          <span>🎓 PhD in 5G Network Technology</span>
          <span>💻 Extensive Development & Teaching Experience</span>
        </div>
      </div>
    </section>
  );
}
