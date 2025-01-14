import React from 'react';
import HomeNavbar from "../components/HomeNavbar";
import Overview from "../components/Overview";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';


export default function OverviewPage() {
  return (
    <div className="font-montserrat overflow-hidden h-screen">
      <HomeNavbar />
      <Overview />
      <Navbar />
      <Footer />
     
    </div>
  );
}
