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
import ArtMarket from './pages/Art-Market';
// Uncomment when landing page is ready
import Landing from './pages/Landing';
import ScrollToTop from './components/ScrollToTop';
import BidderProfile from './components/BidderProfile/profileBidder';
export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/art-market" element={<ArtMarket/>}/>
        <Route path="/bidders-profile" element={<BiddersProfile />} />
        <Route path="/art-learn" element={<ArtLearn />} />
        <Route path="/art-connect" element={<ArtConnect />} />
        <Route path="/creative-profile" element={<CreativeProfile />} />
        <Route path="/art-bid" element={<ArtBid/>}/>
        {/* <Route path="/bidderprofile" element={<BidderProfile/>}/> */}
      </Routes>
    </Router>
  );
}
