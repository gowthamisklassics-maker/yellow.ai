
import { Link } from "react-router-dom";

const menuData = {
  platform: {
    title: "Explore the Platform",
    items: [
      {
        title: "AI Agents",
        description: "Automate conversations and tasks.",
        link: "/platform"
      },
      {
        title: "Voice AI",
        description: "Build voice-based experiences.",
        link: "/platform"
      },
      {
        title: "Integrations",
        description: "Connect your business tools.",
        link: "/integrations"
      }
    ]
  },

  solutions: {
    title: "Solutions for Every Team",
    items: [
      {
        title: "Customer Experience",
        description: "Improve customer support.",
        link: "/solutions"
      },
      {
        title: "Employee Experience",
        description: "Simplify internal workflows.",
        link: "/solutions"
      },
      {
        title: "Industries",
        description: "Explore industry applications.",
        link: "/industries"
      }
    ]
  }
};

export default function MegaMenu({ type, onClose }) {
  const menu = menuData[type];

  if (!menu) return null;

  return (
    <div className="mega-menu">
      <div className="mega-menu-inner container">
        <h2>{menu.title}</h2>

        <div className="mega-menu-grid">
          {menu.items.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="mega-menu-item"
              onClick={onClose}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
