import Blog from "@/components/Blog";
import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="space-y-40 mb-40">
        <HeroSection />
        <Features />
        <Stats />
        <Testimonials />
        <CallToAction />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
