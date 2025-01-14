import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HTEDashboardPage from './pages/HTEDashboardPage';
import MoasPage from './pages/MoasPage';
import OJTCoordinatorsPage from './pages/OJTCoordinatorsPage';
import IndustryPartnersPage from './pages/IndustryPartnersPage';
import UserPage from './pages/UserPage';



function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/hte" element={<HTEDashboardPage />} />
            <Route path="/moas" element={<MoasPage />} />
            <Route path="/coordinator" element={<OJTCoordinatorsPage />} />
            <Route path="/partners" element={<IndustryPartnersPage />} />
            <Route path="/account" element={<UserPage />} />
          </Routes>
        
    </Router>
  );
}

export default App;
