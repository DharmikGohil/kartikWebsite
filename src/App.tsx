import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Eager-load above-the-fold page, lazy-load the rest
import Home from "./pages/Home";
const FoamControlEngineering = lazy(() => import("./pages/FoamControlEngineering"));
const Solutions = lazy(() => import("./pages/Solutions"));
const IndustryPage = lazy(() => import("./pages/IndustryPage"));
const SubProcessPage = lazy(() => import("./pages/SubProcessPage"));
const Technologies = lazy(() => import("./pages/Technologies"));
const Sustainability = lazy(() => import("./pages/Sustainability"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function PageLoader() {
  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-brand-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foam-control-engineering" element={<FoamControlEngineering />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:industrySlug" element={<IndustryPage />} />
            <Route path="/solutions/:industrySlug/:subProcessSlug" element={<SubProcessPage />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
