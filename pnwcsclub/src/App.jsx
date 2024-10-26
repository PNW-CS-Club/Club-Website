import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sidebar from './components/sidebar';

export default function App() {
  //This is the homepage of PNW CS Club website
  const location = useLocation();

  return (
  <>
    <Navbar />
    <div style={{ display: 'flex', marginTop: '60px' }}> {/* Ensure content starts below the navbar */}
        <Sidebar /> {/* Sidebar component now manages its own visibility */}
       
        <div className="page-content">
        {/*if currpath is "/" (home), display homepage content*/}
       {location.pathname === "/" && (<Home />)}

        {/*if currpath is "/about", display about content*/}
        {/*this tells the page to display the content of the current route*/}
        <div id="detail">
          <Outlet />
        </div>
        </div>
    </div>
  </>
  );
}
