import "../styles/services.css";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2>My Services</h2>
        <p>Specialized solutions to help your business grow.</p>
      </div>

      <div className="services-grid">
        {/* Web Development */}
        <div className="service-card">
          <div className="icon web">▦</div>
          <h3>Web Development</h3>
          <p>
            Custom websites and web applications built with modern
            technologies like React, Next.js, and Node.js. SEO-friendly
            and performant.
          </p>
        </div>

        {/* Mobile App */}
        <div className="service-card">
          <div className="icon mobile">📱</div>
          <h3>Mobile App Development</h3>
          <p>
            Cross-platform mobile applications for iOS and Android using
            React Native. Smooth performance and native-like experience.
          </p>
        </div>

        {/* Digital Marketing */}
        <div className="service-card">
          <div className="icon marketing">📈</div>
          <h3>Digital Marketing</h3>
          <p>
            Strategic digital marketing services to grow your brand
            online. SEO, social media marketing, and growth hacking
            strategies.
          </p>
        </div>
      </div>
    </section>
  );
}
