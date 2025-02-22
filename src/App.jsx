

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";  // ✅ Updated import
import Campaigns from "./components/Campaigns";
import Donors from "./components/Donors";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/donors" element={<Donors />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
