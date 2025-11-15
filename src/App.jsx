import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Marquee from "./component/Marquee";
import AboutSection from "./component/AboutSection";
import CTASection from "./component/CTASection";
import EduMenu from "./component/EduMenu";
import AdBanner from "./component/AdBanner";
import LogoMarquee from "./component/LogoMarquee";
import Testimonial from "./component/Testimonial";
import Contact from "./component/Contact"
import Footer from "./component/Footer";
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <AboutSection />
      <CTASection />
      <EduMenu />
      <AdBanner />
      <LogoMarquee />
      <Testimonial />
      <Contact />
      <Footer />

    </>

  )
}

export default App