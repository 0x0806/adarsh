import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Recognition from "@/components/sections/Recognition";
import Works from "@/components/sections/Works";
import Projects from "@/components/sections/Projects";
import Arsenal from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <About />
        <Works />
        <Recognition />
        <Projects />
        <Arsenal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
