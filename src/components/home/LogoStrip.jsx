import Container from "../common/Container";

const channels = [
  { name: "Web chat", mark: "◌" },
  { name: "WhatsApp", mark: "◉" },
  { name: "Voice AI", mark: "≋" },
  { name: "Email", mark: "✉" },
  { name: "Social", mark: "⌁" },
  { name: "CRM tools", mark: "◇" },
];

export default function LogoStrip() {
  return (
    <section className="logo-strip">
      <Container>
        <p>ONE INTELLIGENT EXPERIENCE ACROSS EVERY CHANNEL</p>
        <div className="logo-list channel-list">
          {channels.map((channel) => (
            <div className="logo-item channel-item" key={channel.name}>
              <span className="channel-mark" aria-hidden="true">{channel.mark}</span>
              <span>{channel.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
