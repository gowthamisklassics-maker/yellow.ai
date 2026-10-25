
import { useState } from 'react'
import './App.css'
import DemoCarousel from "./components/DemoCarousel";
import {
  ArrowUpRight,
  Bot,
  MessageCircle,
  Headphones,
  ShieldCheck,
  Workflow,
  Menu,
  X,
  CheckCircle2,
} from 'lucide-react'

const features = []

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* Announcement bar */}
      <div className="announcement">
        <span>
          Meet <strong>NEXUS EDGE</strong>: The Agentic AI Platform for
          better experiences.
        </span>

        <a href="#platform">
          Explore platform <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Hero section */}
      <section className="hero" id="home">
        <div className="heroImage" />

        <header className="navbar">
          <a className="brand" href="#home">
            <span className="brandMark">Y</span>
            <span>yellow.ai</span>
          </a>

          <button
            className="menuToggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? 'navLinks open' : 'navLinks'}>
            <a href="#platform" onClick={() => setMenuOpen(false)}>
              Platform
            </a>

            <a href="#solutions" onClick={() => setMenuOpen(false)}>
              Solutions
            </a>

            <a href="#stories" onClick={() => setMenuOpen(false)}>
              Resources
            </a>

            <a href="#security" onClick={() => setMenuOpen(false)}>
              Security
            </a>
          </nav>

          <a className="navButton" href="#contact">
            Book a demo <ArrowUpRight size={16} />
          </a>
        </header>

        <div className="heroContent">
          <span className="eyebrow lightEyebrow">
            ENTERPRISE-GRADE AGENTIC AI PLATFORM
          </span>

          <h1>
            Smarter interactions with
            <br />
            <span>AI Agents</span> that Think, Act,
            <br />
            and Resolve
          </h1>

          <p className="heroDescription">
            Transform customer and employee experiences with AI agents
            that understand intent, take action, and solve problems.
          </p>

          <ul className="heroPoints">
            <li>Human-like conversations across channels</li>
            <li>Intelligent automation for everyday workflows</li>
            <li>Connected experiences that scale with your business</li>
          </ul>

          <a className="primaryButton" href="#contact">
            Book a demo <ArrowUpRight size={18} />
          </a>

          <div className="trusted">
            <div className="trustedLabel">
              <strong>Trusted by</strong>
              <span>Businesses across industries</span>
            </div>

            <span className="trustedLogo">NEXUS</span>
            <span className="trustedLogo">GLOBAL</span>
            <span className="trustedLogo">INNOVATE</span>
          </div>
        </div>

        <div className="heroFloatingCard">
          <div className="floatingIcon">
            <Bot size={23} />
          </div>

          <div>
            <strong>Your AI agent is ready</strong>
            <p>How can I help you today?</p>
          </div>

          <span className="onlineDot" />
        </div>
      </section>

      {/* Case studies and testimonials */}
      <section className="referenceStories" id="stories">
        <div className="referenceHeading">
          <span>Case Studies and Testimonials</span>

          <h2>
            The results speak for themselves,
            <br />
            just like our customers
          </h2>
        </div>

        <div className="referenceCard">
          <div className="referenceTabs">
            <div className="referenceTab referenceTabFirst">
              <span className="travelLogo">◎ InteIeTravel</span>
              <strong>Travel &amp; Hospitality</strong>
            </div>

            <div className="referenceTab vipdesk">
              <span>vipdesk</span>
            </div>

            <div className="referenceTab lionParcel">
              <span>Lion ✺ parcel</span>
            </div>

            <div className="referenceTab wasteConnections">
              <span className="wasteIcon">W</span>
              <small>WASTE CONNECTIONS, INC.</small>
            </div>
          </div>

          <div className="referenceStoryContent">
            <div className="referenceStoryText">
              <span className="referencePill">Case study</span>

              <p>
                “The onboarding and implementation was very smooth. The
                team we worked with through Yellow.ai was excellent, and
                the enthusiasm and energy around the project from start
                to finish was really solid. We were able to stay close
                to our timelines and deliver as planned.”
              </p>

              <a
                href="https://yellow.ai/case-study/"
                className="referenceReadMore"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more <span>→</span>
              </a>
            </div>

            <div className="referenceAirplane">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1100&q=85"
                alt="Passenger airplane flying above the clouds"
                loading="lazy"
              />

              <div className="referenceStats">
                <div className="referenceStat">
                  <small>RESOLUTION RATE</small>
                  <strong>92%</strong>
                  <span>Of inquiries resolved</span>
                </div>

                <div className="referenceStat">
                  <small>CONTAINMENT RATE</small>
                  <strong>75%</strong>
                  <span>Of sessions handled without agent transfer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View more link below the complete case study card */}
        <div className="viewMoreStories">
          <a
            href="https://yellow.ai/case-study/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View more success stories <span>→</span>
          </a>
        </div>
      </section>

      {/* Platform introduction and feature cards */}
      <section className="platformSection" id="platform">
        <div className="sectionHeading">
          <span className="eyebrow">WHY YELLOW.AI</span>

          <h2>
            The Power of Agentic AI
            <br />
            at Every Stage of the Journey
          </h2>

          <p>
            Delight customers, empower employees and provide useful
            insights to leaders with our powerful agentic AI platform
            that powers AI agents that understand user intent, maintain
            context and achieve complex business goals.
          </p>
        </div>

        <div className="featureGrid">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <article className="featureCard" key={feature.number}>
                <div className="featureTop">
                  <span>{feature.number}</span>
                  <Icon size={25} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.text}</p>

                <a href="#contact" className="textLink">
                  Explore feature <ArrowUpRight size={16} />
                </a>
              </article>
            )
          })}
        </div>

        {/* Animated showcase features */}
        <div className="agenticShowcase">
          {/* Feature 1 */}
          <article className="agenticFeature purpleFeature">
            <div className="agenticCopy">
              <span className="agenticEyebrow">AI AGENT STUDIO</span>

              <h3>Build enterprise-grade AI agents instantly</h3>

              <p>
                Build, test and deploy powerful AI agents with simple
                natural language prompts. These agents can think,
                respond and act autonomously across complex scenarios.
                They can also be optimized through automated testing.
              </p>
            </div>

            <div className="agentVisual conversationVisual">
              <div className="visualWindow">
                <div className="visualWindowHeader">
                  <span className="windowDot" />
                  <span className="windowDot" />
                  <span className="windowDot" />
                  <span>AI Agent Conversation</span>
                </div>

                <div className="conversationMessage customerMessage">
                  <div className="receiptPreview">
                    <span className="receiptIcon">▤</span>
                    <div>
                      <strong>Receipt uploaded</strong>
                      <small>Order #10482</small>
                    </div>
                  </div>

                  Here is my receipt. Could you process my refund?
                </div>

                <div className="conversationMessage agentMessage">
                  <span className="agentMiniLogo">Y</span>

                  <div>
                    <strong>AI Agent</strong>
                    <p>
                      I'll check your order and help with your refund.
                    </p>
                  </div>
                </div>

                <div className="typingMessage">
                  <span />
                  <span />
                  <span />
                  <small>Agent is thinking</small>
                </div>
              </div>

              <div className="visualGlow" />
            </div>
          </article>

          {/* Feature 2 */}
          <article className="agenticFeature lightFeature">
            <div className="agenticCopy">
              <span className="agenticEyebrow">
                CONNECTED EXPERIENCES
              </span>

              <h3>
                Omnichannel orchestration with multi-modal support
              </h3>

              <p>
                Meet customers where they are. Communicate across their
                preferred channels, including chat, voice, messaging
                and digital experiences, while maintaining context.
              </p>
            </div>

            <div className="agentVisual channelVisual">
              <div className="channelOrbit orbitOne" />
              <div className="channelOrbit orbitTwo" />

              <div className="channelCenter">
                <span>Y</span>
                <strong>AI</strong>
                <small>ONE CONNECTED AGENT</small>
              </div>

              <div className="channelIcon channelChat">
                <MessageCircle size={26} />
              </div>

              <div className="channelIcon channelPhone">
                <Headphones size={26} />
              </div>

              <div className="channelIcon channelVoice">
                <span>♫</span>
              </div>

              <div className="channelIcon channelMail">
                <span>✉</span>
              </div>

              <div className="channelIcon channelVideo">
                <span>▶</span>
              </div>

              <div className="channelIcon channelMessage">
                <MessageCircle size={25} />
              </div>
            </div>
          </article>

          {/* Feature 3 */}
          <article className="agenticFeature purpleFeature">
            <div className="agenticCopy">
              <span className="agenticEyebrow">
                INTELLIGENCE AND INSIGHTS
              </span>

              <h3>Analytics that make your AI smarter</h3>

              <p>
                Improve AI agent performance with actionable insights.
                Analyze conversations, identify opportunities and
                continuously improve responses and customer experiences.
              </p>
            </div>

            <div className="agentVisual analyticsVisual">
              <div className="analyticsWindow">
                <div className="analyticsHeader">
                  <div>
                    <small>AGENT PERFORMANCE</small>
                    <strong>Performance overview</strong>
                  </div>

                  <span className="analyticsBadge">Live insights</span>
                </div>

                <div className="analyticsNumbers">
                  <div>
                    <small>Resolution rate</small>
                    <strong>92%</strong>
                    <span>+12.4%</span>
                  </div>

                  <div>
                    <small>Customer satisfaction</small>
                    <strong>96%</strong>
                    <span>+8.2%</span>
                  </div>
                </div>

                <div className="chartArea">
                  <div className="chartLines">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <svg
                    className="chartSvg"
                    viewBox="0 0 400 125"
                    preserveAspectRatio="none"
                    role="img"
                    aria-label="Illustrative agent performance chart"
                  >
                    <defs>
                      <linearGradient
                        id="chartFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#8065ff"
                          stopOpacity=".35"
                        />
                        <stop
                          offset="100%"
                          stopColor="#8065ff"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      className="chartAreaFill"
                      d="M0 105 L48 88 L95 95 L145 55 L195 69 L245 36 L300 48 L350 17 L400 25 L400 125 L0 125 Z"
                      fill="url(#chartFill)"
                    />

                    <path
                      className="chartLine"
                      d="M0 105 L48 88 L95 95 L145 55 L195 69 L245 36 L300 48 L350 17 L400 25"
                      fill="none"
                      stroke="#8065ff"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="analyticsFooter">
                  <span className="onlineDot" />
                  AI performance is improving
                </div>
              </div>
            </div>
          </article>

          {/* Feature 4 */}
          <article className="agenticFeature lightFeature">
            <div className="agenticCopy">
              <span className="agenticEyebrow">
                FLEXIBLE AI ARCHITECTURE
              </span>

              <h3>
                Multi-LLM architecture for flexibility with no vendor
                lock-in
              </h3>

              <p>
                Choose the best-fit language model for each task.
                Route requests to suitable models, use fallback options
                and apply business rules to support reliable AI experiences.
              </p>
            </div>

            <div className="agentVisual modelVisual">
              <div className="modelColumn modelInputs">
                <strong>Smart routing</strong>
                <div>↗ Fallback chain</div>
                <div>✓ Task-specific models</div>
                <div>◆ Output guardrails</div>
              </div>

              <div className="modelArrow">›</div>

              <div className="modelColumn modelProcessing">
                <strong>Model orchestration</strong>
                <div>⚙ Primary → backup LLMs</div>
                <div>↗ Route to suitable models</div>
                <div>✓ Validate responses</div>
              </div>

              <div className="modelArrow">›</div>

              <div className="modelColumn modelOutput">
                <strong>Results</strong>
                <div>✓</div>
                <div>✦</div>
                <div>✓</div>
              </div>

              <div className="modelPulse pulseOne" />
              <div className="modelPulse pulseTwo" />
            </div>
          </article>
        </div>
      </section>

    {/* Deploy with confidence */}
<section className="deploySection" id="deploy">
  <h2 className="deployTitle">
    Deploy with confidence, deliver value faster
  </h2>

  <div className="deployGrid">
    <div className="deployColumn">
      <article className="deployCard complianceCard">
        <div className="complianceLogos">
          <span className="complianceSeal hipaa">
            <b>HIPAA</b>
            <small>COMPLIANT</small>
          </span>

          <span className="complianceSeal">
            <b>ISO</b>
            <small>27001</small>
          </span>

          <span className="complianceSeal">
            <b>ISO</b>
            <small>27701</small>
          </span>

          <span className="complianceSeal aicpa">
            <b>AICPA</b>
            <small>SOC 2</small>
          </span>

          <span className="complianceSeal pci">
            <b>PCI</b>
            <small>V 4.0.1</small>
          </span>
        </div>

        <p>
          Our robust guardrails and Responsible AI principles
          protect sensitive data while ensuring industry-leading
          compliance standards.
        </p>

        <a href="#security" className="deployLearn">
          Learn more
        </a>
      </article>

      <div className="deployPill">
        Enterprise-grade security with Safe AI
      </div>
    </div>

    <div className="deployColumn">
      <div className="deployPill">
        Go to market faster with 150+ integrations
      </div>

      <article className="deployCard integrationsCard">
        <div className="integrationLogos">
          <span className="integrationLogo salesforce">
            salesforce
          </span>

          <span className="integrationLogo nice">
            NiCE
          </span>

          <span className="integrationLogo zendesk">
            ◢ Zendesk
          </span>

          <span className="integrationLogo genesys">
            ✿ GENESYS
          </span>
        </div>

        <p>
          Connect with your existing tech stack via 150+
          pre-built enterprise integrations, including
          Salesforce, Zendesk, Genesys, and Nice.
        </p>

        <a href="#contact" className="deployLearn">
          Learn more
        </a>
      </article>
    </div>
  </div>
</section>

      {/* Security */}
      <section className="securitySection" id="security">
        <div className="securityIcon">
          <ShieldCheck size={30} />
        </div>

        <span className="eyebrow">TRUST AND SECURITY</span>

        <h2>Innovation built on trust.</h2>

        <p>
          Design responsible AI experiences with governance, security,
          and control at the center of your workflows.
        </p>

        <a className="textLink" href="#contact">
          Learn about our approach <ArrowUpRight size={16} />
        </a>
      </section>

      {/* Contact form */}
      <section className="contactSection" id="contact">
        <div className="contactCopy">
          <span className="eyebrow lightEyebrow">
            LET'S BUILD SOMETHING BETTER
          </span>

          <h2>Ready to make every interaction smarter?</h2>

          <p>
            See how AI agents can help your team deliver better experiences.
          </p>
        </div>

        <form className="contactForm" onSubmit={handleSubmit}>
          <h3>Book a demo</h3>

          {submitted ? (
            <div className="successMessage">
              <CheckCircle2 size={22} />
              Demo request captured in this demo interface.
            </div>
          ) : (
            <>
              <label htmlFor="fullName">Your name</label>
              <input
                id="fullName"
                name="fullName"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">Work email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />

              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                placeholder="Your company name"
                required
              />

              <button className="primaryButton formButton" type="submit">
                Request a demo <ArrowUpRight size={18} />
              </button>

              <small className="formNote">
                Demo only. This form does not send information to a server.
              </small>
            </>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a className="brand footerBrand" href="#home">
          <span className="brandMark">Y</span>
          <span>yellow.ai</span>
        </a>

        <p>Intelligent conversations. Better experiences.</p>

        <a href="#home" className="textLink">
          Back to top ↑
        </a>

        <small>
          © {new Date().getFullYear()} Website design concept.
        </small>
      </footer>

      {/* Floating contact button */}
      <a
        className="chatLauncher"
        href="#contact"
        aria-label="Contact us"
      >
        <Headphones size={25} />
        <span className="chatLauncherDot" />
      </a>
    </main>
  )
}

export default App
