import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function App() {
  //This is the homepage of PNW CS Club website
  const location = useLocation();

  return (
  <>
    <Navbar />
    {/*if currpath is "/" (home), display homepage content*/}
    {location.pathname === "/" && (<Home />)}
  
    {/*this tells the page to display the content of the current route*/}
    <div id="detail">
      <Outlet />
    </div>
  </>
  );
}
