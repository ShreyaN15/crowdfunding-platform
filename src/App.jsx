

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavigationBar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./components/Home";  // ✅ Updated import
// import Campaigns from "./components/Campaigns";
// import Donors from "./components/Donors";

// function App() {
//   return (
//     <Router>
//       <NavigationBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/campaigns" element={<Campaigns />} />
//         <Route path="/donors" element={<Donors />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Campaigns from "./components/Campaigns";
import Donors from "./components/Donors";
import About from "./components/AboutUs";
import Contact from "./components/ContactUs";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} /> {/* Add Login Route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
