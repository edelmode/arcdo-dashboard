import React from 'react';
import HomeNavbar from "../components/HomeNavbar";
import Overview from "../components/Overview";
import Navbar from "../components/Navbar";



export default function OverviewPage() {
  return (
    <div className="font-montserrat overflow-hidden h-screen">
      <Navbar />
      <Overview />
      <HomeNavbar />
  
     
    </div>
  );
}
