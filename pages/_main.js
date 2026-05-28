import React from 'react';
import Link from 'next/link';

export default function SplashPage() {
  return (
    <div className="splash-container">
      
      {/* 1. HERO */}
      <section className="hero-section">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        
        <div className="hero-content">
          <span className="trust-badge">
            Real performers. Exciting games. Big smiles guaranteed.
          </span>
          <h1 className="hero-headline">
            The Party Your Kid <br />
            <span className="gradient-text">Will Never Forget</span>
          </h1>
          <p className="hero-subheadline">
            Fun, high-energy party characters for birthdays and events in Los Angeles & Pasadena
          </p>
          <div className="hero-actions">
            <a href="tel:tbc" className="btn btn-primary">👉 Call Now</a>
            <a href="sms:tbc" className="btn btn-secondary">👉 Text to Book</a>
          </div>
        </div>
      </section>

      {/* 2. QUICK INTRO */}
      <section className="intro-section">
        <div className="content-wrapper-narrow">
          <h2>Make your child the star of their special day.</h2>
          <p>
            We bring their favorite characters to life with fun, energy, and unforgettable moments — so you can relax and enjoy the party too.
          </p>
        </div>
      </section>

      {/* 3. WHAT YOU GET */}
      <section className="features-section">
        <div className="content-wrapper">
          <h2 className="section-title">A Party Kids Will Talk About for Weeks</h2>
          
          <div className="features-grid">
            {[
              "Exciting character entrance",
              "Fun games and activities",
              "Music, dancing, and interaction",
              "Photo moments with every child",
              "A performer who keeps kids engaged"
            ].map((item, index) => (
              <div key={index} className="feature-card">
                <span className="feature-icon">✨</span>
                <p className="feature-text">{item}</p>
              </div>
            ))}
          </div>

          <div className="alert-banner">
            <p>👉 No awkward silence. No bored kids.</p>
          </div>
        </div>
      </section>

      {/* 4. SERVICES & 5. CHARACTERS */}
      <section className="offerings-section">
        <div className="content-wrapper">
          <div className="services-block">
            <h2 className="section-title">Perfect for Every Celebration</h2>
            <div className="badge-container">
              {["Birthday Parties", "Superhero Events", "Princess Parties", "School Events", "Family Gatherings"].map((service, i) => (
                <span key={i} className="service-badge">{service}</span>
              ))}
            </div>
          </div>

          <div className="divider"></div>

          <div className="characters-block">
            <h3 className="section-subtitle">Your Child’s Favorite Characters</h3>
            <p className="section-desc">Have a request? Ask us — we’ll make it happen.</p>

            <div className="characters-grid">
              {[
                { title: "Superheroes", icon: "🦸‍♂️" },
                { title: "Princesses", icon: "👸" },
                { title: "Robot characters", icon: "🤖" },
                { title: "Party entertainers", icon: "🎨" }
              ].map((char, i) => (
                <div key={i} className="character-card">
                  <div className="character-icon">{char.icon}</div>
                  <h4>{char.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY PARENTS CHOOSE US */}
      <section className="why-us-section">
        <div className="content-wrapper">
          <h2 className="section-title">Trusted by Local Families</h2>

          <div className="why-us-grid">
            {[
              "Professional and friendly performers",
              "High-quality costumes",
              "Great with kids of all ages",
              "On time and reliable",
              "Easy, stress-free booking"
            ].map((reason, i) => (
              <div key={i} className="why-card">
                <span className="check-icon">✓</span>
                <p>{reason}</p>
              </div>
            ))}
          </div>

          <p className="why-footer-note">
            👉 We make your life easier — and your child’s day unforgettable.
          </p>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="steps-section">
        <div className="content-wrapper">
          <h2 className="section-title">Simple and Fast Booking</h2>
          
          <div className="steps-grid">
            {[
              { step: "1", title: "Tell us your date and location" },
              { step: "2", title: "Choose your character" },
              { step: "3", title: "We handle the rest" }
            ].map((item, i) => (
              <div key={i} className="step-card">
                <span className="step-number">{item.step}</span>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SERVICE AREA */}
      <section className="area-section">
        <div className="content-wrapper-narrow">
          <span className="area-icon">📍</span>
          <h2>Serving Los Angeles, Pasadena & Nearby Areas</h2>
          <p>Have a different location? Contact us to check availability.</p>
        </div>
      </section>

      {/* 9. CALL TO ACTION & 10. CONTACT */}
      <section className="cta-section">
        <div className="content-wrapper-narrow">
          <h2 className="cta-headline">Ready to Make Your <br />Child’s Day Special?</h2>
          <p className="cta-urgency">Weekend dates fill up fast.</p>
          <p className="cta-subtext">👉 Call or text now to check availability</p>

          <div className="contact-card">
            <div className="contact-list">
              <a href="tel:tbc" className="contact-item">
                <span className="item-icon">📞</span>
                <div>
                  <label>Call / Text</label>
                  <span>tbc</span>
                </div>
              </a>
              <a href="https://instagram.com/tbc" target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="item-icon">📸</span>
                <div>
                  <label>Instagram</label>
                  <span>@tbc</span>
                </div>
              </a>
              <Link href="/contact-page" className="contact-item">
                <span className="item-icon">✉️</span>
                <div>
                  <label>Contact</label>
                  <span>Contact</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
