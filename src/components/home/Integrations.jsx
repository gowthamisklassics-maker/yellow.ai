
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const integrations = [
  "CRM Systems",
  "Messaging Platforms",
  "Customer Support",
  "Analytics Tools",
  "Business Applications",
  "Communication Tools"
];

export default function Integrations() {
  return (
    <section className="integrations-section" id="integrations">
      <Container>
        <SectionHeading
          eyebrow="CONNECTED WORKFLOWS"
          title="Connect your business tools"
          description="Bring the systems your teams use into a connected workflow."
        />

        <div className="integrations-grid">
          {integrations.map((item) => (
            <div className="integration-item" key={item}>
              <span className="integration-symbol">✦</span>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
