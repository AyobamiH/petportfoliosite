import React from "react";
import Layout from "./Layout";
import HeroSection from "./HeroSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
// import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import ProcessSection from "./ProcessSection";
// import CTASection from "./CTASection";
import PortfolioSection from "./PortfolioSection";
import CallToAction from "./CallToAction";
import ServicesSlider from "./ServicesSlider"
import ServicePackages from "./ServicePackages"
import QuestionairePage from "./QuestionairePage"
import ContactPage from "./ContactPage"
const Home = () => {
  return (
    <>

    <Layout>
      <HeroSection />
      <ServicesSlider/>
      <ServicePackages/>
      <CallToAction />
      <ProcessSection />
      <WhyChooseUsSection />
      <CallToAction />
      <PortfolioSection/>
      <TestimonialsSection />
      <QuestionairePage/>
      <ContactPage />
   
    </Layout>
    </>
  );
};

export default Home;
