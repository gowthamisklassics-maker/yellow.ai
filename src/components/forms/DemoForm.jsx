import { useState } from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";
import "./DemoForm.css";

export default function DemoForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Demo only: connect a backend to send and store form submissions.
    setSubmitted(true);
  }

  return (
    <section className="demo-form-section" id="demo">
      <Container>
        <div className="demo-form-layout">
          <div className="demo-form-content">
            <span className="demo-form-eyebrow">
              <span className="demo-form-eyebrow-dot" />
              LET'S BUILD SOMETHING BETTER
            </span>

            <h2>
              Ready to make every
              <span> conversation count?</span>
            </h2>

            <p className="demo-form-description">
              Tell us about your business and discover how AI-powered
              conversations can create better customer experiences.
            </p>

            <div className="demo-form-benefit">
              <span className="demo-form-benefit-icon">
                <CheckCircle2 size={19} />
              </span>
              <div>
                <strong>Personalized to your needs</strong>
                <p>Explore solutions that fit your business goals.</p>
              </div>
            </div>

            <div className="demo-form-benefit">
              <span className="demo-form-benefit-icon">
                <CheckCircle2 size={19} />
              </span>
              <div>
                <strong>One connected AI platform</strong>
                <p>Bring customer conversations and automation together.</p>
              </div>
            </div>
          </div>

          <div className="demo-form-panel">
            <div className="demo-form-panel-heading">
              <span className="demo-form-icon">
                <Send size={19} />
              </span>
              <div>
                <h3>Book a demo</h3>
                <p>Share your details to get started.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="demo-form">
              <div className="demo-form-field">
                <label htmlFor="demo-name">Full name *</label>
                <input
                  id="demo-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="demo-form-field">
                <label htmlFor="demo-email">Work email *</label>
                <input
                  id="demo-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="demo-form-field">
                <label htmlFor="demo-company">Company name</label>
                <input
                  id="demo-company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  placeholder="Enter your company name"
                />
              </div>

              <div className="demo-form-field">
                <label htmlFor="demo-message">How can we help?</label>
                <textarea
                  id="demo-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Button type="submit">
                Submit request <ArrowUpRight size={17} />
              </Button>

              <p className="demo-form-privacy">
                Fields marked with * are required.
              </p>
            </form>

            {submitted && (
              <div className="form-success" role="status">
                <CheckCircle2 size={19} />
                <p>
                  <strong>Form completed successfully!</strong>
                  <span>
                    This is a demo confirmation. Your information has not
                    been sent to a server.
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
