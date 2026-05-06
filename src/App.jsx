import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Route-level code splitting — each page loads only when navigated to
const Home          = lazy(() => import("./pages/Home"));
const CollegesPage  = lazy(() => import("./pages/CollegesPage"));
const CorporatePage = lazy(() => import("./pages/CorporatePage"));
const EventsPage    = lazy(() => import("./pages/EventsPage"));
const AboutPage     = lazy(() => import("./pages/AboutPage"));
const ContactPage   = lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <Suspense fallback={null}>
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/colleges"  element={<CollegesPage />} />
          <Route path="/corporate" element={<CorporatePage />} />
          <Route path="/events"    element={<EventsPage />} />
          <Route path="/about"     element={<AboutPage />} />
          <Route path="/contact"   element={<ContactPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
