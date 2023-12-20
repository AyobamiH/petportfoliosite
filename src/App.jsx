import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/PetSitters/Home';
import Navigation from './components/PetSitters/Navigation';
import Footer from './components/PetSitters/Footer';
import GlobalSound from './components/PetSitters/GlobalSound';
import PortfolioSection from './components/PetSitters/PortfolioSection';
import QuestionairePage from './components/PetSitters/QuestionairePage';
import ContactPage from './components/PetSitters/ContactPage';
// import Contact from './components/PetSitters/Contact';
import ServicesPage from './components/PetSitters/ServicesPage';
import NotFoundPage from './components/PetSitters/NotFoundPage'; // Import the NotFoundPage component
import React from 'react';

const App = () => {
  return (
    <>
      <GlobalSound />
      
      <Router>
        <Navigation />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioSection />} />
          <Route path="/questionaire" element={<QuestionairePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />

          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for non-existent pages */}
          
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
