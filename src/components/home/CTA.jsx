
import { Link } from "react-router-dom";

import Container from "../common/Container";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-section">
      <Container>
        <div className="cta-panel">
          <span>READY TO GET STARTED?</span>

          <h2>Let's build better experiences with AI.</h2>

          <p>
            Explore how intelligent automation can support your business.
          </p>

          <Link to="/contact" className="cta-button">
            Book a Demo →
          </Link>
        </div>
      </Container>
    </section>
  );
}
