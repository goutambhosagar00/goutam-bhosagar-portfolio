import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        {/* Left */}
        <div className="contact-left">
          <h2>
            Let’s Work <span>Together</span>
          </h2>

          <p>
            Have a project in mind or want to discuss a potential partnership?
            I’m available for freelance projects and full-time opportunities.
          </p>

          <div className="contact-info">
            <div>
              <span>📧 Email Me: </span>
              <strong>goutambhosagar08@gmail.com</strong>
            </div>

            <div>
              <span>📞 Call Me: </span>
              <strong>+91 63718 64875</strong>
            </div>

            <div>
              <span>📍 Location: </span>
              <strong>India, Bhubaneswar Odisha</strong>
            </div>
          </div>

          <div className="socials">
            <a href="https://github.com/goutambhosagar00" aria-label="GitHub">🐙</a>
            <a href="https://www.linkedin.com/in/goutam-bhosagar-91559a301/" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>

        {/* Right */}
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mrgnordd"
            method="POST"
          >
            <div className="row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="5"
              required
            />

            {/* Optional: spam protection */}
            <input type="hidden" name="_captcha" value="false" />

            <button type="submit">
              Send Message ✈️
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
