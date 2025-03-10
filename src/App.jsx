import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollProvider from "./components/landingPage/ScrollProvider";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <ScrollProvider>
        {/* Navbar is included here so it appears on all pages */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes as needed */}
        </Routes>
      </ScrollProvider>
    </Router>
  );
}

export default App;
