


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavigationBar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import Campaigns from "./components/Campaigns";
// import Donors from "./components/Donors";
// import About from "./components/AboutUs";
// import Contact from "./components/ContactUs";
// import Login from "./components/login";

// function App() {
//   return (
//     <Router>
//       <NavigationBar />
//       <div className="container mt-4">
//         <div className="p-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/campaigns" element={<Campaigns />} />
//           <Route path="/donors" element={<Donors />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Login />} /> {/* Add Login Route */}
//         </Routes>
//         </div>
//       </div>
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
//import './App.css'; // Adjust the path if your CSS file is in a different location
function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<div className="full-height"><Home /></div>} />
          <Route path="/campaigns" element={<div className="full-height"><Campaigns /></div>} />
          <Route path="/donors" element={<div className="full-height"><Donors /></div>} />
          <Route path="/about" element={<div className="full-height"><About /></div>} />
          <Route path="/contact" element={<div className="full-height"><Contact /></div>} />
          <Route path="/login" element={<div className="full-height"><Login /></div>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;