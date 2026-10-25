import { useState } from "react";
import "../../index.css";

const industries = [
  {
    title: "Retail & E-commerce",
    label: "RETAIL",
    description:
      "Personalize shopping, recommend products, and help customers track orders.",
    image: "/images/industries/retail.jpg",
    solutions: [
      "Personalized product discovery",
      "Order tracking and delivery updates",
      "Returns and customer support",
    ],
  },
  {
    title: "Banking & Finance",
    label: "BANKING",
    description:
      "Simplify customer support with intelligent banking assistants.",
    image: "/images/industries/banking.jpg",
    solutions: [
      "Account and service enquiries",
      "Digital banking assistance",
      "Loan and product information",
    ],
  },
  {
    title: "Healthcare",
    label: "HEALTHCARE",
    description:
      "Help people find information and navigate healthcare services.",
    image: "/images/industries/healthcare.jpg",
    solutions: [
      "Appointment scheduling",
      "Patient information",
      "Appointment reminders",
    ],
  },
  {
    title: "Travel & Hospitality",
    label: "TRAVEL",
    description:
      "Support bookings, travel questions, and customer requests.",
    image: "/images/industries/travel.jpeg",
    solutions: [
      "Booking assistance",
      "Travel updates",
      "Cancellation enquiries",
    ],
  },
  {
    title: "Telecommunications",
    label: "TELECOM",
    description:
      "Assist customers with plans, billing, and troubleshooting.",
    image: "/images/industries/telecom.jpeg",
    solutions: [
      "Billing enquiries",
      "Plan information",
      "Technical support",
    ],
  },
  {
    title: "Manufacturing",
    label: "MANUFACTURING",
    description:
      "Streamline product information and service workflows.",
    image: "/images/industries/manufacturing.jpeg",
    solutions: [
      "Supplier enquiries",
      "Order status assistance",
      "Employee support",
    ],
  },
];

export default function IndustrySolutions() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = industries[selectedIndex];

  return (
    <section className="industry-section" id="industries">
      <div className="container">
        <div className="section-heading industry-heading">
          <span className="eyebrow">INDUSTRY SOLUTIONS</span>

          <h2>
            AI experiences for
            <span className="heading-highlight"> every industry.</span>
          </h2>

          <p>
            Discover how AI can help businesses create better
            customer experiences.
          </p>
        </div>

        <div className="industry-layout">
          <div className="industry-selector">
            {industries.map((industry, index) => (
              <button
                type="button"
                key={industry.title}
                className={`industry-option ${
                  selectedIndex === index ? "active" : ""
                }`}
                onClick={() => setSelectedIndex(index)}
                aria-pressed={selectedIndex === index}
              >
                <span className="industry-option-thumbnail">
                  <img src={industry.image} alt="" loading="lazy" />
                </span>

                <span>{industry.title}</span>

                <span className="industry-option-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            ))}
          </div>

          <article className="industry-feature">
            <div className="industry-feature-copy">
              <span className="industry-label">{selected.label}</span>

              <h3>{selected.title}</h3>

              <p>{selected.description}</p>

              <span className="industry-list-heading">
                WHAT YOU CAN IMPROVE
              </span>

              <ul className="industry-solution-list">
                {selected.solutions.map((solution) => (
                  <li key={solution}>
                    <span className="solution-check" aria-hidden="true">
                      ✓
                    </span>
                    {solution}
                  </li>
                ))}
              </ul>

              <a className="text-link" href="#contact">
                Discuss your use case <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="industry-feature-visual">
              <img
                key={selected.image}
                src={selected.image}
                alt={`${selected.title} AI solutions`}
                className="industry-feature-image"
              />
            </div>
          </article>
        </div>

        <div className="industry-bottom-note">
          <span aria-hidden="true">✦</span>

          <p>
            One platform. Industry-specific experiences. Smarter workflows.
          </p>

          <a href="#contact">Let's talk ↗</a>
        </div>
      </div>
    </section>
  );
}
