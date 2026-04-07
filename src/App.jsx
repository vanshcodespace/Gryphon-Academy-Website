import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CollegesPage from "./pages/CollegesPage";
import CorporatePage from "./pages/CorporatePage";
import EventsPage from "./pages/EventsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TopPlaced from "./components/TopPlaced";

function App() {
  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colleges" element={<CollegesPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
