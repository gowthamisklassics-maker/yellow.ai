import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import "./Navbar.css";

const navItems = [
  {
    label: "Platform",
    href: "#features",
    dropdown: [
      { label: "AI Agents", href: "#features" },
      { label: "Automation", href: "#solutions" },
      { label: "Analytics", href: "#features" },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    dropdown: [
      { label: "Retail & E-commerce", href: "#industries" },
      { label: "Banking & Finance", href: "#industries" },
      { label: "Healthcare", href: "#industries" },
      { label: "Travel & Hospitality", href: "#industries" },
    ],
  },
  {
    label: "Solutions",
    href: "#solutions",
    dropdown: [
      { label: "AI Solutions", href: "#solutions" },
      { label: "Customer Support", href: "#ai-assistant" },
      { label: "Security", href: "#security" },
      { label: "Integrations", href: "#integrations" },
    ],
  },
  {
    label: "Resources",
    href: "#faq",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  function closeMenu() {
    setMenuOpen(false);
    setActiveDropdown(null);
  }

  return (
    <header className="site-header">
      <nav
        className="navbar container"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="AI Platform home"
        >
          <img
            src="/images/ai-platform-logo.png"
            alt="AI Platform — Smart Conversations"
            className="navbar-logo"
          />
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={() => {
            setMenuOpen((open) => !open);
            setActiveDropdown(null);
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          id="navbar-menu"
          className={`navbar-menu ${menuOpen ? "is-open" : ""}`}
        >
          <div className="navbar-links">
            {navItems.map((item) => (
              <div
                className="navbar-item"
                key={item.label}
                onMouseEnter={() => {
                  if (window.matchMedia("(min-width: 681px)").matches) {
                    setActiveDropdown(item.dropdown ? item.label : null);
                  }
                }}
                onMouseLeave={() => {
                  if (window.matchMedia("(min-width: 681px)").matches) {
                    setActiveDropdown(null);
                  }
                }}
              >
                {item.dropdown ? (
                  <>
                    <a
                      href={item.href}
                      className="navbar-link"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>

                    <button
                      type="button"
                      className="dropdown-trigger"
                      aria-label={`Toggle ${item.label} menu`}
                      aria-expanded={activeDropdown === item.label}
                      onClick={() =>
                        setActiveDropdown((current) =>
                          current === item.label ? null : item.label
                        )
                      }
                    >
                      <ChevronDown
                        size={15}
                        className={
                          activeDropdown === item.label
                            ? "chevron rotated"
                            : "chevron"
                        }
                      />
                    </button>

                    <div
                      className={`navbar-dropdown ${
                        activeDropdown === item.label ? "show" : ""
                      }`}
                    >
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="dropdown-link"
                          onClick={closeMenu}
                        >
                          {subItem.label}
                          <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="navbar-link"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="navbar-actions">
            <a
              href="#contact"
              className="button button-primary navbar-cta"
              onClick={closeMenu}
            >
              Book a demo <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}