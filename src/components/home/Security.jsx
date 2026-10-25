
import { ShieldCheck, LockKeyhole, Settings } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const items = [
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Present your verified security practices."
  },
  {
    icon: LockKeyhole,
    title: "Data protection",
    description: "Explain how customer data is protected."
  },
  {
    icon: Settings,
    title: "Governance",
    description: "Describe controls and operational policies."
  }
];

export default function Security() {
  return (
    <section className="security-section" id="security">
      <Container>
        <SectionHeading
          eyebrow="TRUST AND GOVERNANCE"
          title="Designed with trust in mind"
          description="Explain the security and governance practices your platform supports."
        />

        <div className="security-grid">
          {items.map(({ icon: Icon, title, description }) => (
            <article className="security-card" key={title}>
              <Icon size={30} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
