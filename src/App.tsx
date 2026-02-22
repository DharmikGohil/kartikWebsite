import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Eager-load above-the-fold page, lazy-load everything else
import Home from "./pages/Home";
const FoamControlEngineering = lazy(() => import("./pages/FoamControlEngineering"));
const Solutions = lazy(() => import("./pages/Solutions"));
const IndustryPage = lazy(() => import("./pages/IndustryPage"));
const SubProcessPage = lazy(() => import("./pages/SubProcessPage"));
const Technologies = lazy(() => import("./pages/Technologies"));
const Sustainability = lazy(() => import("./pages/Sustainability"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const RequestPricing = lazy(() => import("./pages/RequestPricing"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Programmatic SEO page templates
const LocationsHub = lazy(() => import("./pages/LocationsHub"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const ChemistryPage = lazy(() => import("./pages/ChemistryPage").then((m) => ({ default: m.default })));
const ChemistryHubPage = lazy(() => import("./pages/ChemistryPage").then((m) => ({ default: m.ChemistryHubPage })));
const FoamProblemPage = lazy(() => import("./pages/FoamProblemPage").then((m) => ({ default: m.default })));
const ProblemsHubPage = lazy(() => import("./pages/FoamProblemPage").then((m) => ({ default: m.ProblemsHubPage })));

// Cross-product pages
const LocationIndustryPage = lazy(() => import("./pages/LocationIndustryPage"));
const LocationChemistryPage = lazy(() => import("./pages/LocationChemistryPage"));
const LocationProblemPage = lazy(() => import("./pages/LocationProblemPage"));

// International pages
const GlobalLocationPage = lazy(() => import("./pages/GlobalLocationPage").then((m) => ({ default: m.default })));
const GlobalHubPage = lazy(() => import("./pages/GlobalLocationPage").then((m) => ({ default: m.GlobalHubPage })));

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
            {/* Core pages */}
            <Route path="/" element={<Home />} />
            <Route path="/foam-control-engineering" element={<FoamControlEngineering />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:articleSlug" element={<BlogArticle />} />
            <Route path="/request-pricing" element={<RequestPricing />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />

            {/* Industry pages (hub → industry → sub-process) */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:industrySlug" element={<IndustryPage />} />
            <Route path="/solutions/:industrySlug/:subProcessSlug" element={<SubProcessPage />} />

            {/* Location pages - India (hub → state → city) */}
            <Route path="/locations" element={<LocationsHub />} />
            <Route path="/locations/:stateSlug" element={<LocationPage />} />
            <Route path="/locations/:stateSlug/:citySlug" element={<LocationPage />} />

            {/* Location × Industry cross-product - India */}
            <Route path="/locations/:stateSlug/:citySlug/:industrySlug" element={<LocationIndustryPage />} />

            {/* Location × Chemistry cross-product - India */}
            <Route path="/locations/:stateSlug/:citySlug/chemistry/:chemistrySlug" element={<LocationChemistryPage />} />

            {/* Location × Problem cross-product - India */}
            <Route path="/locations/:stateSlug/:citySlug/foam-problems/:problemSlug" element={<LocationProblemPage />} />

            {/* Global/International pages (hub → country → city) */}
            <Route path="/global" element={<GlobalHubPage />} />
            <Route path="/global/:countrySlug" element={<GlobalLocationPage />} />
            <Route path="/global/:countrySlug/:citySlug" element={<GlobalLocationPage />} />

            {/* Global × Industry cross-product */}
            <Route path="/global/:countrySlug/:citySlug/:industrySlug" element={<LocationIndustryPage />} />

            {/* Global × Chemistry cross-product */}
            <Route path="/global/:countrySlug/:citySlug/chemistry/:chemistrySlug" element={<LocationChemistryPage />} />

            {/* Global × Problem cross-product */}
            <Route path="/global/:countrySlug/:citySlug/foam-problems/:problemSlug" element={<LocationProblemPage />} />

            {/* Chemistry pages (hub → platform → platform×industry) */}
            <Route path="/chemistry" element={<ChemistryHubPage />} />
            <Route path="/chemistry/:chemistrySlug" element={<ChemistryPage />} />
            <Route path="/chemistry/:chemistrySlug/:industrySlug" element={<ChemistryPage />} />

            {/* Foam problem pages (hub → problem) */}
            <Route path="/foam-problems" element={<ProblemsHubPage />} />
            <Route path="/foam-problems/:problemSlug" element={<FoamProblemPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
