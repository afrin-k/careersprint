import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { USP } from "./components/USP";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Homie } from "./web/Homie";
import { Technical } from "./web/Technical";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <USP />
      <CTA />
      <Footer />
      
    </>
  );
}
