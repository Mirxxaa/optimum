import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollProvider from "./components/landingPage/ScrollProvider";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Services from "./Pages/Services.jsx";
import Careers from "./Pages/Careers.jsx";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <ScrollProvider>
        {/* Navbar is included here so it appears on all pages */}
        <Navbar showNavbar={true} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          {/* Add other routes as needed */}
        </Routes>
      </ScrollProvider>
    </Router>
  );
}

export default App;
