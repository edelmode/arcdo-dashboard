import Moas from "../components/Moas"
import Navbar from "../components/Navbar"
import HomeNavbar from "../components/HomeNavbar"

export default function MoasPage() {
  return (
    <div className="font-montserrat overflow-auto h-auto">
      <HomeNavbar />
      <Navbar />
      <Moas />
    </div>
  )
}
