import React from 'react';
import HomeNavbar from "../components/HomeNavbar";
import HomeBody from "../components/HomeBody";
import Navbar from "../components/Navbar";


export default function LandingPage() {
  return (
    <div className="font-montserrat overflow-auto">
      <HomeNavbar />
      <HomeBody />
      <Navbar />
     
    </div>
  );
}
