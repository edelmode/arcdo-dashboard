import HomeNavbar from "../components/HomeNavbar"
import AbouttheDeveloper from "../components/AbouttheDeveloper"
import Navbar from "../components/Navbar"

export default function HTEDashboardPage() {
    return (
      <div className="font-montserrat max-h-screen">
        <Navbar />
        <AbouttheDeveloper />
        <HomeNavbar />
        
        
      </div>
    )
  }