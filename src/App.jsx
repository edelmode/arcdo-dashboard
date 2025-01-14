import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HTEDashboardPage from './pages/HTEDashboardPage';
import MoasPage from './pages/MoasPage';
import OJTCoordinatorsPage from './pages/OJTCoordinatorsPage';
import IndustryPartnersPage from './pages/IndustryPartnersPage';
import UserPage from './pages/UserPage';
import OverviewPage from './pages/OverviewPage';
import AdminProfile from './components/AdminProfile';



function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/hte" element={<HTEDashboardPage />} />
            <Route path="/moas" element={<MoasPage />} />
            <Route path="/coordinator" element={<OJTCoordinatorsPage />} />
            <Route path="/partners" element={<IndustryPartnersPage />} />
            <Route path="/account" element={<UserPage />} />
            <Route path="/overviewpage" element={<OverviewPage />} />
            <Route path="/login" element={<LandingPage />} />
            <Route path="/adminprofile" element={<AdminProfile />} />
          </Routes>
        
    </Router>
  );
}

export default App;
