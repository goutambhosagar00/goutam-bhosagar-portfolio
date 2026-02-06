import "../styles/bizzo.css";
import phoneImg from "../assets/bizzo-phone.png";

export default function Bizzo() {
  return (
    <section className="bizzo" id="bizzo">
      <div className="bizzo-left">
        <span className="coming">● Coming Soon</span>

        <h2>
          Bizzo: The Future of <br />
          <span>Business Management</span>
        </h2>

        <p>
          I'm currently building <strong>Bizzo</strong>, a comprehensive platform
          designed to empower small business owners with tools for inventory,
          sales, and customer management — all in one place.
        </p>

        <ul className="features">
          <li>✔ Streamlined Inventory Tracking</li>
          <li>✔ Real-time Sales Analytics</li>
          <li>✔ Integrated CRM System</li>
        </ul>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXhrKtdtdeB5aGu-8GY5AZXLBB4cJrhi41YmeaAhBBVMki5Q/viewform" className="waitlist-btn">Join Waitlist →</a>
      </div>

      <div className="bizzo-right">
        <img src={phoneImg} alt="Bizzo mobile app preview" />
        <div className="progress-card">
          <span className="app-name">Bizzo App</span>
          <small>Productivity</small>
          <div className="bar">
            <div className="fill"></div>
          </div>
          <small className="percent">75% Complete</small>
        </div>
      </div>
    </section>
  );
}
