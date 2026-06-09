import React from "react";

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    onScrollTo(sectionId);
  };

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        
        {/* Footer Grid Columns */}
        <div className="footer-grid">
          
          {/* Column 1: Company */}
          <div className="footer-col">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links-list">
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
                  Service
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Terms & Policies */}
          <div className="footer-col">
            <h4 className="footer-title">Terms & Policies</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="#explore">Explore</a>
              </li>
              <li>
                <a href="#accessibility">Accessibility</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="footer-col">
            <h4 className="footer-title">Follow Us</h4>
            <ul className="footer-links-list">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact / Terms & Policies representation */}
          <div className="footer-col">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact-details">
              <li className="contact-address">
                1498w Fulton ste, STE 2D
                <br />
                Chicago, IL 63867
              </li>
              <li className="contact-phone">(123) 456-789000</li>
              <li className="contact-email">
                <a href="mailto:info@elementum.com">info@elementum.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright and Bottom Row */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            ©2023 Elementum. All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
