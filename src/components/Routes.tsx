import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes from react-router-dom
import Home from "../pages/Home";
// import Music from "../pages/Music";
// import Videos from "../pages/Videos";
// import Streams from "../pages/Streams";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
import Navigation from "../components/Navigation";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Navigation>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/streams" element={<Streams />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Navigation>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
