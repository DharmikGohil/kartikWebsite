import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import FoamControlEngineering from "./pages/FoamControlEngineering";
import Solutions from "./pages/Solutions";
import IndustryPage from "./pages/IndustryPage";
import Technologies from "./pages/Technologies";
import Sustainability from "./pages/Sustainability";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foam-control-engineering" element={<FoamControlEngineering />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:industrySlug" element={<IndustryPage />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
