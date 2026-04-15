import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import Services from "../sections/Services";
import About from "../sections/About";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}