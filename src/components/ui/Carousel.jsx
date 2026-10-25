
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Carousel({ items = [] }) {
  const [index, setIndex] = useState(0);

  if (items.length === 0) return null;

  const previous = () => {
    setIndex((current) =>
      (current - 1 + items.length) % items.length
    );
  };

  const next = () => {
    setIndex((current) =>
      (current + 1) % items.length
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-slide" aria-live="polite">
        {items[index].image && (
          <img
            src={items[index].image}
            alt={items[index].title}
          />
        )}

        <h3>{items[index].title}</h3>
        <p>{items[index].description}</p>
      </div>

      <div className="carousel-controls">
        <button onClick={previous} aria-label="Previous slide">
          <ArrowLeft size={20} />
        </button>

        <span>{index + 1} / {items.length}</span>

        <button onClick={next} aria-label="Next slide">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
