import React from 'react';
import HomeNavbar from "../components/HomeNavbar";
import Overview from "../components/Overview";
import Navbar from "../components/Navbar";


export default function LandingPage() {
  return (
    <div className="font-montserrat overflow-auto">
      <HomeNavbar />
      <Overview />
      <Navbar />
     
    </div>
  );
}
