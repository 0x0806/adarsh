import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Arsenal from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Arsenal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
