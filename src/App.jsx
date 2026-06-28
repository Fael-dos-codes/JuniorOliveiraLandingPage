import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import WebsiteHome from './pages/WebsiteHome';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Site Institucional Principal */}
        <Route path="/" element={<WebsiteHome />} />
        
        {/* Landing Page (Focada em conversão/tráfego) */}
        <Route path="/campanha" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
