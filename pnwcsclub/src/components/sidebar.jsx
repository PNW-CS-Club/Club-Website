import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/src/styles/sidebar.css';

const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [activeSection, setActiveSection] = useState(null);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 80; // Khoảng cách 50px
      window.scrollTo({ top: offset, behavior: 'smooth' }); // Cuộn mượt mà đến vị trí
    }
  };

  return (
    <>
      {/* Toggle button for Sidebar */}
      <button 
        onClick={toggleSidebar} 
        style={{
          position: 'fixed',
          top: '70px', // Adjust to position under the navbar
          left: isSidebarVisible ? '190px' : '0px',
          zIndex: 1000,
          fontSize: '15px'
        }}
      >
        {isSidebarVisible ? '◀' : '▶'}
      </button>

      {/* Sidebar */}
      {isSidebarVisible && (
        <div className="sidebar">
          <div className="menu-section">
            <button 
              className={`toggle-button ${activeSection === 'overview' ? 'active' : ''}`} 
              onClick={() => handleScrollTo('home_overview')}
            >
              Overview
            </button>
          </div>

          <div className="menu-section">
            <button 
              className={`toggle-button ${activeSection === 'projects' ? 'active' : ''}`} 
              onClick={() => handleScrollTo('home_projects')}
            >
              Projects
            </button>
          </div>

          <div className="menu-section">
            <button 
              className={`toggle-button ${activeSection === 'events' ? 'active' : ''}`} 
              onClick={() => handleScrollTo('home_events')}
            >
              Events
            </button>
          </div>

          <div className="menu-section">
            <button 
              className={`toggle-button ${activeSection === 'blog' ? 'active' : ''}`} 
              onClick={() => handleScrollTo('home_blog')}
            >
              Blog
            </button>
          </div>

          <div className="menu-section">
            <button><Link to="">Join our community</Link></button>
          </div>
        </div>
      )}
      
      {/* Adjust page content margin based on sidebar visibility */}
      <style>{`
        .page-content {
          flex: 1;
          margin-left: ${isSidebarVisible ? '240px' : '0'};
          padding-top: 40px;
          padding-left: ${isSidebarVisible ? '0px' : '40px'};
        }
      `}</style>
    </>
  );
};

export default Sidebar;