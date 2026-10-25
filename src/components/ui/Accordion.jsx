
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `accordion-answer-${index}`;

        return (
          <div className="accordion-item" key={item.question}>
            <button
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() =>
                setOpenIndex(isOpen ? null : index)
              }
            >
              {item.question}
              <ChevronDown
                className={isOpen ? "rotate-icon" : ""}
                size={20}
              />
            </button>

            {isOpen && (
              <div className="accordion-answer" id={answerId}>
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
