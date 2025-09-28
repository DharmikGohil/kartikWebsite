import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ShaderBackground from "./components/ShaderBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Process from "./pages/Process";
import CaseStudies from "./pages/CaseStudies";
import Download from "./pages/Download";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import LabsSearch from "./pages/LabsSearch";

function App() {
  return (
    <ShaderBackground>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/labs-search" element={<LabsSearch />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </ShaderBackground>
  );
}

export default App;
