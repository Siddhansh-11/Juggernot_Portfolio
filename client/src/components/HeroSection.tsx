import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-primary rounded-full blur-3xl opacity-20 blob-animation"></div>
      </div>

      <div className="absolute -left-64 top-1/2 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10 blob-animation"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            AI Agents, built for{" "}
            <span className="gradient-text">speed, scale, and quality</span>
          </h1>

          <p className="text-lg text-gray-300 mb-10">
            Handling complex queries, boosting efficiency, and streamlining
            support, so your business scales faster with precision.
          </p>

          <div className="flex justify-center">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium text-center"
            >
              <a href="#contact">Get started</a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
