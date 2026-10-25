export default function SectionHeading({
  eyebrow,
  label,
  title,
  description,
  subtitle,
  align = "center",
  className = "",
}) {
  return (
    <div className={`section-heading section-heading-${align} ${className}`.trim()}>
      {(eyebrow || label) && (
        <span className="section-heading-label">
          {eyebrow || label}
        </span>
      )}

      {title && <h2>{title}</h2>}

      {(description || subtitle) && (
        <p>{description || subtitle}</p>
      )}
    </div>
  );
}
