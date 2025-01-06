import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavbarTopConfigurationPage from "./components/Navbar"; // Assuming the navbar is in a components folder
import HomeNavbar from "./components/HomeNavbar"; // Assuming HomeNavbar is another component

function OverviewPage() {
    return <div>Overview Content</div>;
}

function HTEPage() {
    return <div>HTE Content</div>;
}

function App() {
    return (
        <Router>
            <NavbarTopConfigurationPage /> {/* Main Navbar always visible */}
            <Routes>
                {/* Main Landing Page */}
                <Route path="/" element={<LandingPage />} />

                {/* Pages connected to the Navbar */}
                <Route path="/ARCHDO/overview" element={<OverviewPage />} />
                <Route path="/ARCHDO/hte" element={<HTEPage />} />
            </Routes>

            <HomeNavbar /> {/* Footer or secondary navigation */}
        </Router>
    );
}

export default App;
