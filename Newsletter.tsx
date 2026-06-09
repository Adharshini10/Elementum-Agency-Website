import React, { useEffect, useRef } from "react";

export default function Hero() {
  const avatars = [
    {
      id: "avatar-1",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300",
      alt: "Team member 1",
      className: "hero-avatar-1",
    },
    {
      id: "avatar-2",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
      alt: "Team member 2",
      className: "hero-avatar-2",
    },
    {
      id: "avatar-3",
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300&h=300",
      alt: "Team member 3",
      className: "hero-avatar-3",
    },
    {
      id: "avatar-4",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300",
      alt: "Team member 4",
      className: "hero-avatar-4",
    },
    {
      id: "avatar-5",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300",
      alt: "Team member 5",
      className: "hero-avatar-5",
    },
    {
      id: "avatar-6",
      src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300&h=300",
      alt: "Team member 6",
      className: "hero-avatar-6",
    },
    {
      id: "avatar-7",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
      alt: "Team member 7",
      className: "hero-avatar-7",
    },
    {
      id: "avatar-8",
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=300&h=300",
      alt: "Team member 8",
      className: "hero-avatar-8",
    },
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(el);

    return () => {
      if (observerRef.current && el) {
        observerRef.current.unobserve(el);
      }
    };
  }, []);

  return (
    <section className="hero-section scroll-fade" id="home" ref={heroRef}>
      {/* Background/Organic Shapes */}
      <div className="shape-squiggly" id="shape-left-squiggly">
        <svg width="60" height="200" viewBox="0 0 60 200" fill="none">
          <path
            d="M5 5C25 30 1 55 20 80C35 100 10 120 40 145C60 170 30 185 55 195"
            stroke="#FF5A5F"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M17 15C33 36 12 58 31 82C43 102 21 122 47 146C63 168 37 182 59 191"
            stroke="#1D1D2C"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="shape-purple-crescent" id="shape-right-crescent"></div>

      <div className="hero-container">
        <div className="hero-typography">
          <h1 className="hero-headline">
            The <span className="highlight-thinkers">thinkers</span> and
            <br />
            doers were <span className="highlight-changing">changing</span>
            <br />
            the <span className="highlight-status">status</span> Quo with
          </h1>
          <p className="hero-subtitle">
            We are a team of strategists, designers, communicators, and researchers.
            Together, we believe that progress only happens when you refuse to play things safe.
          </p>
        </div>

        {/* Organic Avatars Deck */}
        <div className="hero-avatars-container" id="hero-team-avatars">
          {avatars.map((avatar, idx) => (
            <div
              key={avatar.id}
              className={`hero-avatar-wrapper ${avatar.className}`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <img
                src={avatar.src}
                alt={avatar.alt}
                className="hero-avatar-img"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
