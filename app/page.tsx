import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import Features from "./components/features";
import { USP } from "./components/USP";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { FeatureCard2 } from "./components/FeatureCards";

export default function Home() {
  return (
  <>
  <Header/>
  <Hero/>
  <About/>
  <Features/>
  <USP/>
  <CTA/>
  <Footer/>
  </>
);
}