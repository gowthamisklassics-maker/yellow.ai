import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" aria-label="Back to home">
              <img
                src="/images/ai-platform-logo.png"
                alt="AI Platform — Smart Conversations"
                className="footer-logo"
              />
            </a>

            <p>
              Smarter conversations. Better customer experiences.
              A modern AI platform concept.
            </p>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#features">Platform</a>
            <a href="#industries">Industries</a>
            <a href="#solutions">Solutions</a>
          </div>

          <div className="footer-column">
            <h3>Learn more</h3>
            <a href="#faq">FAQs</a>
            <a href="#ai-assistant">AI assistant</a>
            <a href="#contact">Request a demo</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} AI Platform. Website concept.
          </span>

          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
