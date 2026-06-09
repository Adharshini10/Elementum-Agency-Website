/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BusinessSection from "./components/BusinessSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  
  /**
   * Smoothly scroll to the corresponding section with anchor ID
   */
  const handleScrollTo = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app-layout" id="app-root">
      {/* Sticky Top Navbar */}
      <Navbar onScrollTo={handleScrollTo} />

      {/* Main Content Layout */}
      <main className="main-content-flow">
        {/* Hero Section */}
        <Hero />

        {/* About Section ("Tomorrow should be better...") */}
        <About />

        {/* Business Section ("See how we can help you...") */}
        <BusinessSection />

        {/* Services Section ("What we can offer you!") */}
        <Services />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Newsletter Subscription Block */}
        <Newsletter />
      </main>

      {/* Footer Column Deck */}
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}
