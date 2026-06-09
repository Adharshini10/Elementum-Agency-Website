import React, { useEffect, useRef } from "react";

interface AvatarItem {
  id: string;
  src: string;
  alt: string;
  className: string;
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const floatingAvatars: AvatarItem[] = [
    {
      id: "t-avatar-1",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
      alt: "Customer 1",
      className: "t-avatar-left-top",
    },
    {
      id: "t-avatar-2",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      alt: "Customer 2",
      className: "t-avatar-left-mid",
    },
    {
      id: "t-avatar-3",
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
      alt: "Customer 3",
      className: "t-avatar-left-bottom",
    },
    {
      id: "t-avatar-4",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      alt: "Customer 4",
      className: "t-avatar-right-top-inner",
    },
    {
      id: "t-avatar-5",
      src: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=150&h=150",
      alt: "Customer 5",
      className: "t-avatar-right-top-outer",
    },
    {
      id: "t-avatar-6",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
      alt: "Customer 6",
      className: "t-avatar-right-mid",
    },
    {
      id: "t-avatar-7",
      src: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=220&h=220",
      alt: "Customer Prominent",
      className: "t-avatar-prominent",
    },
  ];

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
    <section className="testimonials-section scroll-fade" id="testimonials" ref={sectionRef}>
      <div className="testimonials-container">
        
        {/* Title Block */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            <span className="highlight-what">What</span> our customer
            <br />
            says <span className="highlight-about-us">About Us</span>
          </h2>
        </div>

        {/* Central Testimonial Area */}
        <div className="testimonials-deck-wrapper">
          
          {/* Render Asynchronously Floating Avatars around Card */}
          {floatingAvatars.map((avatar) => (
            <div key={avatar.id} className={`floating-avatar-item ${avatar.className}`}>
              <img
                src={avatar.src}
                alt={avatar.alt}
                className="floating-avatar-img"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          ))}

          {/* Core Quote Box */}
          <div className="testimonial-quote-box" id="testimonial-card">
            <span className="quote-icon quote-open">“</span>
            
            <p className="quote-text">
              Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.
            </p>

            <span className="quote-icon quote-closed">”</span>
          </div>

        </div>

      </div>
    </section>
  );
}
