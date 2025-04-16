import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProjectShowcase from "../components/ProjectShowcase";
import ServicesSection from "../components/ServicesSection";
import BenefitsSection from "../components/BenefitsSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden"
    >
      <Navbar />
      <HeroSection />
      <ProjectShowcase />
      <ServicesSection />
      <BenefitsSection />
      <CallToAction />
      <Footer />
    </motion.div>
  );
}
