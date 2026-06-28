import { ScrollProgress } from "jannah/components/ScrollProgress";
import { Navbar } from "jannah/components/Navbar";
import { Hero } from "jannah/components/Hero";
import { About } from "jannah/components/About";
import { Services } from "jannah/components/Services";
import { Experience } from "jannah/components/Experience";
import { Skills } from "jannah/components/Skills";
import { Certifications } from "jannah/components/Certifications";
import { Projects } from "jannah/components/Projects";
import { TechStack } from "jannah/components/TechStack";
import { WhyHireMe } from "jannah/components/WhyHireMe";
import { Contact } from "jannah/components/Contact";
import { Footer } from "jannah/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <TechStack />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
