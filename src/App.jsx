import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebsiteHome from './pages/WebsiteHome';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebsiteHome />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
