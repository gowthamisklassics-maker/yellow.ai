
import "../App.css";

const industries = [
  {
    title: "Retail & E-commerce",
    description:
      "Personalize shopping, recommend products, and help customers track orders.",
    image: "/images/industries/retail.png",
  },
  {
    title: "Banking & Finance",
    description:
      "Simplify customer support with intelligent banking assistants.",
    image: "/images/industries/banking.png",
  },
  {
    title: "Healthcare",
    description:
      "Help people find information and navigate healthcare services.",
    image: "/images/industries/healthcare.png",
  },
  {
    title: "Travel & Hospitality",
    description:
      "Support bookings, travel questions, and customer requests.",
    image: "/images/industries/travel.png",
  },
  {
    title: "Telecommunications",
    description:
      "Assist customers with plans, billing, and troubleshooting.",
    image: "/images/industries/telecom.png",
  },
  {
    title: "Manufacturing",
    description:
      "Streamline product information and service workflows.",
    image: "/images/industries/manufacturing.png",
  },
];

export default function IndustrySolutions() {
  return (
    <>
      {/* Industry Solutions */}
      <section className="industry-section" id="industries">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">INDUSTRY SOLUTIONS</span>

            <h2>
              AI experiences for
              <span className="heading-highlight"> every industry.</span>
            </h2>

            <p>
              Discover ways AI can help businesses create more helpful
              customer experiences.
            </p>
          </div>

          <div className="industry-grid">
            {industries.map((industry) => (
              <article
                className="industry-card"
                key={industry.title}
              >
                <div className="industry-image">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    loading="lazy"
                  />
                </div>

                <h3>{industry.title}</h3>

                <p>{industry.description}</p>

                <a href="#contact">
                  Explore solutions{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deploy with confidence */}
      <section className="deploySection" id="deploy">
        <h2>Deploy with confidence, deliver value faster</h2>

        <div className="deployGrid">
          {/* Security and compliance column */}
          <div className="deployColumn">
            <div className="deployCard securityCard">
              <div className="complianceLogos">
                <span>
                  🛡️
                  <small>HIPAA</small>
                </span>

                <span>
                  🌐
                  <small>ISO 27001</small>
                </span>

                <span>
                  🌐
                  <small>ISO 27701</small>
                </span>

                <span>
                  🔵
                  <small>SOC 2 Type II</small>
                </span>

                <span>
                  🔰
                  <small>PCI-DSS V 4.0.1</small>
                </span>
              </div>

              <p>
                Our robust guardrails and Responsible AI principles
                protect sensitive data while ensuring industry-leading
                compliance standards.
              </p>

              <a href="#contact" className="deployLearn">
                Learn more
              </a>
            </div>

            <div className="deployPill">
              Enterprise-grade security with Safe AI
            </div>
          </div>

          {/* Enterprise integrations column */}
          <div className="deployColumn">
            <div className="deployPill">
              Go to market faster with 150+ integrations
            </div>

            <div className="deployCard integrationsCard">
              <div className="integrationLogos">
                <span className="salesforce">
                  salesforce
                </span>

                <span className="nice">
                  NiCE
                </span>

                <span className="zendesk">
                  ◢ Zendesk
                </span>

                <span className="genesys">
                  ✿ GENESYS
                </span>
              </div>

              <p>
                Connect with your existing tech stack via 150+ pre-built
                enterprise integrations, including Salesforce, Zendesk,
                Genesys, and Nice.
              </p>

              <a href="#contact" className="deployLearn">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
