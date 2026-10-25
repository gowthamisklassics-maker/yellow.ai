const features = [
  {
    icon: "✦",
    title: "AI Agents",
    description:
      "Build intelligent AI agents that understand customer needs and automate conversations.",
    tag: "INTELLIGENCE",
  },
  {
    icon: "◉",
    title: "Voice AI",
    description:
      "Deliver natural voice experiences with faster, smarter automated customer support.",
    tag: "CONVERSATIONS",
  },
  {
    icon: "↗",
    title: "AI Analytics",
    description:
      "Turn customer conversations into useful insights and measurable business outcomes.",
    tag: "INSIGHTS",
  },
  {
    icon: "◇",
    title: "Workflow Automation",
    description:
      "Connect business processes and automate repetitive tasks across your organization.",
    tag: "AUTOMATION",
  },
  {
    icon: "◎",
    title: "Customer Experience",
    description:
      "Create personalized experiences across customer support and digital touchpoints.",
    tag: "EXPERIENCE",
  },
  {
    icon: "⌘",
    title: "Omnichannel Support",
    description:
      "Bring customer interactions together across chat, websites, messaging, and voice.",
    tag: "CONNECTIVITY",
  },
];

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="features-heading">
          <span className="features-eyebrow">
            ONE PLATFORM. MORE POSSIBILITIES.
          </span>

          <h2>
            Meet your next generation of
            <span className="heading-highlight">
              {" "}AI experiences.
            </span>
          </h2>

          <p>
            Bring AI agents, intelligent automation, and customer
            insights together to create better experiences at scale.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <article
              className="feature-card"
              key={feature.title}
              style={{ "--feature-index": index }}
            >
              <div className="feature-card-top">
                <div className="feature-icon" aria-hidden="true">
                  {feature.icon}
                </div>

                <span className="feature-tag">
                  {feature.tag}
                </span>
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <a className="feature-link" href="#demo">
                Explore capability
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <div className="features-showcase">
          <div className="showcase-copy">
            <span className="showcase-label">
              BUILT FOR WHAT'S NEXT
            </span>

            <h3>
              Smarter conversations.
              <br />
              Better outcomes.
            </h3>

            <p>
              Bring customer interactions and intelligent workflows
              together in one unified experience.
            </p>

            <a href="#demo" className="showcase-link">
              Discover the possibilities <span>↗</span>
            </a>
          </div>

          <div className="showcase-visual">
            <div className="showcase-glow" />

            <div className="showcase-window">
              <div className="showcase-window-header">
                <div className="showcase-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span>AI Experience Platform</span>

                <span className="showcase-status">
                  <span /> Live preview
                </span>
              </div>

              <div className="showcase-dashboard">
                <aside className="showcase-sidebar">
                  <div className="showcase-brand">Y.</div>

                  <span className="sidebar-item active">▦</span>
                  <span className="sidebar-item">✧</span>
                  <span className="sidebar-item">◉</span>
                  <span className="sidebar-item">⚙</span>
                </aside>

                <div className="showcase-main">
                  <div className="showcase-welcome">
                    <div>
                      <span>YOUR AI WORKSPACE</span>
                      <h4>Good morning!</h4>
                      <p>Here's your platform overview.</p>
                    </div>

                    <div className="showcase-avatar">AI</div>
                  </div>

                  <div className="showcase-metrics">
                    <div className="metric-card">
                      <span>AI conversations</span>
                      <strong>24.8k</strong>
                      <small>↗ Activity overview</small>
                    </div>

                    <div className="metric-card">
                      <span>Automation rate</span>
                      <strong>86.4%</strong>
                      <small>↗ Workflow efficiency</small>
                    </div>
                  </div>

                  <div className="showcase-chart-card">
                    <div className="chart-heading">
                      <div>
                        <strong>Experience analytics</strong>
                        <span>Illustrative dashboard data</span>
                      </div>

                      <span className="chart-period">7 days⌄</span>
                    </div>

                    <div className="chart-bars" aria-label="Illustrative activity chart">
                      {[
                        38, 58, 44, 72, 51, 83, 63, 91, 67, 77, 55, 88,
                      ].map((height, index) => (
                        <div className="chart-bar-track" key={index}>
                          <div
                            className="chart-bar"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="chart-axis">
                      <span>MON</span>
                      <span>TUE</span>
                      <span>WED</span>
                      <span>THU</span>
                      <span>FRI</span>
                      <span>SAT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="showcase-floating-card">
              <span className="floating-icon">✦</span>
              <div>
                <strong>AI-powered</strong>
                <span>Intelligent experiences</span>
              </div>
              <span className="floating-check">✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}