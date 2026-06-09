import React, { useState, useEffect } from "react";

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false);
    onScrollTo(sectionId);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="nav-header">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={(e) => handleLinkClick(e, "home")}>
          Elementum
        </div>

        <ul className="navbar-links">
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
              Studio
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleLinkClick(e, "services")}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
              Contact
            </a>
          </li>
          <li>
            <a href="#faqs" onClick={(e) => handleLinkClick(e, "footer")}>
              FAQs
            </a>
          </li>
        </ul>

        <button 
          className={`hamburger ${isOpen ? "active" : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          id="hamburger-btn"
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`} id="mobile-drawer">
        <ul className="mobile-links">
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
              Studio
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleLinkClick(e, "services")}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
              Contact
            </a>
          </li>
          <li>
            <a href="#faqs" onClick={(e) => handleLinkClick(e, "footer")}>
              FAQs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
