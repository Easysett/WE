import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicePage from './pages/Service';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';
import { servicesData } from './data/servicesData';
import { trackPageView } from './config/analytics';
import Sitemap from './pages/Sitemap';

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/business-setup" element={<ServicePage {...servicesData['business-setup']} />} />
          <Route path="/services/visa-services" element={<ServicePage {...servicesData['visa-services']} />} />
          <Route path="/services/family-visa" element={<ServicePage {...servicesData['family-visa']} />} />
          <Route path="/services/golden-visa" element={<ServicePage {...servicesData['golden-visa']} />} />
          <Route path="/services/amer-tasheel" element={<ServicePage {...servicesData['amer-tasheel']} />} />
          <Route path="/services/attestation" element={<ServicePage {...servicesData['attestation']} />} />
          <Route path="/services/translation" element={<ServicePage {...servicesData['translation']} />} />
          <Route path="/services/notary-legal" element={<ServicePage {...servicesData['notary-legal']} />} />
          <Route path="/services/typing" element={<ServicePage {...servicesData['typing']} />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sitemap.xml" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;