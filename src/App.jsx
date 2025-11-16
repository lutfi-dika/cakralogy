import React, { useState } from "react";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Marquee from "./component/Marquee";
import AboutSection from "./component/AboutSection";
import CTASection from "./component/CTASection";
import EduMenu from "./component/EduMenu";
import AdBanner from "./component/AdBanner";
import LogoMarquee from "./component/LogoMarquee";
import Testimonial from "./component/Testimonial";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

import CourseDetail from "./edukasi/CourseDetail";

import "./App.css";

function App() {

  const [selectedCourse, setSelectedCourse] = useState(null);

  // pindah ke halaman detail
  const openCourse = (id) => {
    setSelectedCourse(id);
    window.scrollTo(0, 0); // auto ke atas
  };

  // kembali ke halaman utama
  const backToHome = () => {
    setSelectedCourse(null);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Jika belum pilih course → tampil halaman utama */}
      {!selectedCourse && (
        <>
          <Navbar />
          <Hero />
          <Marquee />
          <AboutSection />
          <CTASection />

          {/* Kirim fungsi pindah halaman */}
          <EduMenu onOpenCourse={openCourse} />

          <AdBanner />
          <LogoMarquee />
          <Testimonial />
          <Contact />
          <Footer />
        </>
      )}

      {/* Jika pilih course → tampil halaman detail */}
      {selectedCourse && (
        <CourseDetail courseId={selectedCourse} onBack={backToHome} />
      )}
    </>
  );
}

export default App;
