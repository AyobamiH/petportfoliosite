import React from "react";
import Layout from "./Layout";
import HeroSection from "./HeroSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import TestimonialsSection from "./TestimonialsSection";
import ProcessSection from "./ProcessSection";
import CallToAction from "./CallToAction";


const Home = () => {
  return (
    <>

    <Layout>
      <HeroSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <CallToAction />
      <TestimonialsSection />

      
   
    </Layout>
    </>
  );
};

export default Home;
