import HomeNavbar from "../components/HomeNavbar"
import HTEDashboard from "../components/HTEDashboard"
import Navbar from "../components/Navbar"

export default function HTEDashboardPage() {
    return (
      <div className="font-montserrat h-screen">
        <Navbar />
        <HTEDashboard />
        <HomeNavbar />
        
        
      </div>
    )
  }