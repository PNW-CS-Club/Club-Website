import React, { useState } from 'react';
import http from '../http-common';
import '/src/styles_pages/home.css';

const LandingPage = () => {
  const features = [
    {
      iconClass: "fas fa-gamepad", // Using Font Awesome classes instead of Lucide
      title: "Game Design",
      description: "Create engaging games and interactive experiences"
    },
    {
      iconClass: "fas fa-brain",
      title: "Artificial Intelligence",
      description: "Explore machine learning and AI applications"
    },
    {
      iconClass: "fas fa-desktop",
      title: "Web Design",
      description: "Build modern web applications and interfaces"
    },
    {
      iconClass: "fas fa-trophy",
      title: "Competitive Programming",
      description: "Sharpen your problem-solving skills"
    }
  ];

  const offerings = [
    {
      title: "Hands-On Projects",
      description: "Engage in real-world projects across various fields"
    },
    {
      title: "Workshops and Events",
      description: "Regular sessions to learn new skills, share knowledge, and network"
    },
    {
      title: "Community & Support",
      description: "Join a supportive environment where you can tackle challenges together"
    }
  ];

    const [data, setData] = useState(null);

    const handleButtonClick = async () => {
        const response = await http.get('/test');
        setData(response.data);
    };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Welcome to the Computer Science Club!
          </h1>
          <p className="hero-subtitle">
            Collaborate, Learn, and Grow Together
          </p>
          <p className="hero-description">
            At our club, we're dedicated to creating a space for computer science students 
            to connect, learn, and innovate. Whether you're a beginner or an advanced 
            programmer, we offer opportunities to explore exciting areas of technology.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">What We Focus On</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-content">
                  <div className="feature-icon">
                    <i className={feature.iconClass}></i>
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="offerings-section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="offerings-grid">
            {offerings.map((offering, index) => (
              <div key={index} className="offering-card">
                <h3 className="offering-title">{offering.title}</h3>
                <p className="offering-description">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Join?</h2>
          <p className="cta-description">
            Getting involved is easy—just reach out to us!
          </p>
          <button 
            className="cta-button"
            onClick={() => window.location.href = 'mailto:csclub@university.edu'}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Computer Science Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;