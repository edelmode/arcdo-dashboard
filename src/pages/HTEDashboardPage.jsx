import HomeNavbar from "../components/HomeNavbar"
import HTEDashboard from "../components/HTEDashboard"
import Navbar from "../components/Navbar"

export default function HTEDashboardPage() {
    return (
      <div className="font-montserrat overflow-hidden h-screen">
        <HomeNavbar />
        <HTEDashboard />
        <Navbar />
      </div>
    )
  }