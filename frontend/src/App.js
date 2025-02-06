import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import Information from "./components/Testimonials/Information";

export default function App() {
  return (
    <>
      <Navbar />
      <Testimonials />
      <Information />
      <Footer />
    </>
  );
}
