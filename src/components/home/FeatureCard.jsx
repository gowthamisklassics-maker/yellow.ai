
import { ArrowUpRight } from "lucide-react";

export default function FeatureCard({
  icon,
  title,
  description,
  link
}) {
  return (
    <article className="feature-card">
      <div className="feature-card-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <a href={link} className="feature-card-link">
        Learn more <ArrowUpRight size={16} />
      </a>
    </article>
  );
}
