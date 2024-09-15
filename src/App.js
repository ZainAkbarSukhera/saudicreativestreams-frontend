import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all pages/components
import Navbar from './components/NavigationBar/Navbar';
import BiddersProfile from './pages/BiddersProfile';
import ArtLearn from './pages/Art-Learn';
import ArtConnect from './pages/Art-Connect';
import CreativeProfile from './pages/CreativeProfile';
import ArtBid from './pages/Art-Bid';
// Uncomment when landing page is ready
import Landing from './pages/Landing';
import ScrollToTop from './components/ScrollToTop';
export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/bidders-profile" element={<BiddersProfile />} />
        <Route path="/art-learn" element={<ArtLearn />} />
        <Route path="/art-connect" element={<ArtConnect />} />
        <Route path="/creative-profile" element={<CreativeProfile />} />
        <Route path="/art-bid" element={<ArtBid/>}/>
      </Routes>
    </Router>
  );
}
