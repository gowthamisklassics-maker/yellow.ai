
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const studies = [
  {
    title: "Retail experiences",
    category: "RETAIL",
    image: "/images/case-studies/retail.svg",
    description: "Guide shoppers with personalized product discovery, instant answers, and helpful recommendations."
  },
  {
    title: "Banking support",
    category: "BANKING",
    image: "/images/case-studies/banking.svg",
    description: "Make everyday account questions and self-service support feel effortless and secure."
  },
  {
    title: "Healthcare services",
    category: "HEALTHCARE",
    image: "/images/case-studies/healthcare.svg",
    description: "Help people find care information, manage appointments, and navigate patient support."
  }
];

export default function CaseStudies() {
  return (
    <section className="case-studies-section" id="case-studies">
      <Container>
        <SectionHeading
          eyebrow="CUSTOMER STORIES"
          title="AI solutions across industries"
          description="Discover ways AI can improve business experiences."
        />

        <div className="case-studies-grid">
          {studies.map((study) => (
            <article className="case-study-card" key={study.category}>
              <img src={study.image} alt={study.title} />

              <div className="case-study-content">
                <span>{study.category}</span>
                <h3>{study.title}</h3>
                <p>{study.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
