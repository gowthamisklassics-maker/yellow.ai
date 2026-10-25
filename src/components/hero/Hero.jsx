import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background-glow" />

      <div className="container hero-layout">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            THE NEXT ERA OF CUSTOMER EXPERIENCE
          </span>

          <h1>
            Make every
            <br />
            conversation
            <br />
            <span className="hero-highlight">
              more intelligent.
            </span>
          </h1>

          <p className="hero-description">
            Bring AI-powered conversations, intelligent automation,
            and customer experiences together in one unified platform.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              Get a demo <span aria-hidden="true">↗</span>
            </a>

            <a href="#industries" className="button button-secondary">
              Explore solutions <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="hero-proof">
            <div className="hero-proof-icon">✦</div>
            <p>
              <strong>AI-powered experiences</strong>
              <span>Designed around your customers</span>
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="/images/hero-visual.png"
              alt="AI platform dashboard and customer experience visualization"
              className="hero-image"
              fetchPriority="high"
            />
          </div>

          <div className="hero-floating-card hero-floating-top">
            <span className="floating-card-icon">✦</span>
            <span>
              <strong>Intelligent AI</strong>
              <small>Customer experiences</small>
            </span>
          </div>

          <div className="hero-floating-card hero-floating-bottom">
            <span className="floating-status-dot" />
            <span>
              <strong>One connected platform</strong>
              <small>Conversations · Automation · Insights</small>
            </span>
          </div>
        </div>
      </div>

      <div className="hero-bottom container">
        <span>BUILT FOR MODERN BUSINESSES</span>
        <span className="hero-bottom-line" />
        <a href="#industries">
          Discover industry solutions{" "}
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
