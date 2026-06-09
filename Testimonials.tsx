import React, { useState, useEffect, useRef } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  };

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
    <section className="newsletter-section scroll-fade" id="newsletter" ref={sectionRef}>
      <div className="newsletter-container" id="newsletter-box">
        
        {/* Top-left organic pointing arrows illustration */}
        <div className="newsletter-arrows-decor">
          <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
            <path
              d="M15 15 C 25 35, 12 55, 35 60"
              stroke="#FF5A5F"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M30 61 L36 61 L35 55"
              stroke="#FF5A5F"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M50 10 C 60 25, 45 42, 65 48"
              stroke="#FF5A5F"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M60 49 L66 49 L65 43"
              stroke="#FF5A5F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Right organic crescent shape */}
        <div className="newsletter-crescent-decor"></div>

        <div className="newsletter-content">
          <h2 className="newsletter-heading">
            Subscribe to
            <br />
            our newsletter
          </h2>
          
          <p className="newsletter-subtitle">
            To make your stay special and even more memorable
          </p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="newsletter-input-wrapper">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "success"}
                aria-label="Email Address"
              />
              <button 
                type="submit" 
                className="newsletter-submit-btn"
                id="newsletter-btn"
              >
                Subscribe Now
              </button>
            </div>
          </form>

          {status === "success" && (
            <div className="newsletter-feedback success" id="news-success">
              ✓ Splendid! You have successfully subscribed to the Elementum briefing.
            </div>
          )}
          {status === "error" && (
            <div className="newsletter-feedback error" id="news-error">
              ⚠ Please input a valid email address.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
