import React, { useEffect, useRef } from "react";

export default function BusinessSection() {
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
    <section className="business-section scroll-fade" id="business" ref={sectionRef}>
      
      {/* Decorative flowing red SVG connector line */}
      <div className="connecting-line-container">
        <svg viewBox="0 0 1440 250" fill="none" className="connecting-svg" preserveAspectRatio="none">
          <path
            d="M -100 0 C 300 200, 700 -100, 1100 150 C 1200 200, 1300 250, 1600 100"
            stroke="#FF5A5F"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="business-container">
        
        {/* Left Side: Media */}
        <div className="business-media">
          <div className="business-image-frame">
            {/* Visual Red Triangles */}
            <div className="triangle-top-left" id="tri-top"></div>
            <div className="triangle-bottom-right" id="tri-bottom"></div>
            
            <div className="business-circle-mask">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=600"
                alt="Our professional team in workspace"
                className="business-interactive-img"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Copy */}
        <div className="business-content">
          <h2 className="business-heading">
            <span className="highlight-see">See</span> how we can
            <br />
            help you <span className="highlight-progress">progress</span>
          </h2>
          <p className="business-description">
            We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms, and social research. Our focus is centered entirely on actionable, human-oriented momentum.
          </p>

          <a href="#services" className="animated-arrow-link" id="business-readmore">
            <span className="link-text">Read more</span>
            <span className="arrow-line"></span>
          </a>
        </div>

      </div>
    </section>
  );
}
