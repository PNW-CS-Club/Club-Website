import React from 'react';
import Navbar from '../navbar';
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function App() {
  //This is the homepage of PNW CS Club website
  const location = useLocation();

  return (
  <>
    <Navbar />
    {/*if currpath is "/" (home), display homepage content*/}
    {location.pathname === "/" && (
      <div id="home-content">
        <h1> this is homepage</h1>
      </div>
    )}
  
    {/*this tells the page to display the content of the current route*/}
    <div id="detail">
      <Outlet />
    </div>
  </>
  );
}
