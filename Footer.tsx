import React, { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section className="about-section scroll-fade" id="about" ref={sectionRef}>
      <div className="about-container">
        
        {/* Left Side: Copy */}
        <div className="about-content">
          <h2 className="about-heading">
            <span className="highlight-tomorrow">Tomorrow</span> should
            <br />
            be better than <span className="highlight-today">today</span>
          </h2>
          <p className="about-description">
            We are a team of strategists, designers, communicators, and researchers.
            Together, we believe that progress only happens when you refuse to play things safe. We challenge conventional wisdom to deliver solutions that stand out.
          </p>
          
          <a href="#services" className="animated-arrow-link" id="about-readmore">
            <span className="link-text">Read more</span>
            <span className="arrow-line"></span>
          </a>
        </div>

        {/* Right Side: Circular Image with Accent Decors */}
        <div className="about-media">
          <div className="about-image-frame">
            <div className="about-accent-box" id="about-accent"></div>
            <div className="about-circle-mask">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600&h=600"
                alt="Creative agency business meeting"
                className="about-interactive-img"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
