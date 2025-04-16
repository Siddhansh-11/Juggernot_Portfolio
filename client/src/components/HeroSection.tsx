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
        className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            AI Agents, built for{" "}
            <span className="gradient-text">speed, scale, and quality</span>
          </h1>

          <p className="text-lg text-gray-300 mb-10 max-w-xl">
            Handling complex queries, boosting efficiency, and streamlining
            support, so your business scales faster with precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium text-center"
            >
              <a href="#contact">Get started</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border border-white/20 hover:border-accent/50 hover:bg-accent/5 text-white px-8 py-3 rounded-lg font-medium text-center"
            >
              <a href="#services">Explore services</a>
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative grid-lines rounded-2xl border border-border/20 p-8 h-[400px] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/10 rounded-2xl"></div>
          <svg
            className="w-full h-full object-cover object-center rounded-lg opacity-80 mix-blend-lighten"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <circle cx="400" cy="300" r="200" stroke="#6C5CE7" strokeWidth="2" strokeDasharray="10 5" />
              <circle cx="400" cy="300" r="150" stroke="#6C5CE7" strokeWidth="2" strokeDasharray="10 5" />
              <circle cx="400" cy="300" r="100" stroke="#6C5CE7" strokeWidth="2" strokeDasharray="10 5" />
              
              <path d="M300 300 L500 300" stroke="#4B0082" strokeWidth="2" />
              <path d="M400 200 L400 400" stroke="#4B0082" strokeWidth="2" />
              
              <circle cx="350" cy="250" r="15" fill="#6C5CE7" />
              <circle cx="450" cy="350" r="15" fill="#6C5CE7" />
              <circle cx="350" cy="350" r="15" fill="#4B0082" />
              <circle cx="450" cy="250" r="15" fill="#4B0082" />
              
              <path d="M350 250 L450 250 L450 350 L350 350 Z" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="5 5" />
              
              <path d="M250 200 C300 150, 500 150, 550 200" stroke="#6C5CE7" strokeWidth="2" />
              <path d="M250 400 C300 450, 500 450, 550 400" stroke="#6C5CE7" strokeWidth="2" />
              
              <text x="380" y="310" fill="white" fontSize="14" fontFamily="Inter, sans-serif">AI</text>
            </g>
          </svg>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container mx-auto px-6 mt-20"
      >
        <div className="border-t border-border/20 pt-10">
          <p className="text-sm text-gray-400 mb-6">Trusted by innovative companies</p>
          <div className="flex flex-wrap gap-12 justify-center md:justify-between items-center opacity-70">
            <div className="h-8 w-24 bg-white/10 rounded-md flex items-center justify-center">
              <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 5 L15 10 L10 15" stroke="white" strokeWidth="2" />
                <path d="M20 5 L20 15" stroke="white" strokeWidth="2" />
                <path d="M25 5 L30 5 L30 15 L25 15" stroke="white" strokeWidth="2" />
                <path d="M35 5 L40 10 L35 15" stroke="white" strokeWidth="2" />
                <path d="M45 5 L45 15 M45 10 L50 10" stroke="white" strokeWidth="2" />
                <path d="M55 5 L60 5 L60 15" stroke="white" strokeWidth="2" />
                <path d="M65 5 L70 5 L70 15 L65 15" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div className="h-8 w-24 bg-white/10 rounded-md flex items-center justify-center">
              <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="10" r="5" stroke="white" strokeWidth="2" />
                <path d="M25 5 L25 15" stroke="white" strokeWidth="2" />
                <path d="M30 5 L35 10 L30 15" stroke="white" strokeWidth="2" />
                <path d="M40 5 L45 5 L45 15 L40 15" stroke="white" strokeWidth="2" />
                <path d="M50 5 L55 10 L50 15" stroke="white" strokeWidth="2" />
                <path d="M60 5 L60 15 M60 10 L65 10" stroke="white" strokeWidth="2" />
                <path d="M70 5 L75 5 L75 15 L70 15" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div className="h-8 w-24 bg-white/10 rounded-md flex items-center justify-center">
              <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="5" width="10" height="10" stroke="white" strokeWidth="2" />
                <circle cx="30" cy="10" r="5" stroke="white" strokeWidth="2" />
                <path d="M40 5 L50 5 L50 15 L40 15" stroke="white" strokeWidth="2" />
                <path d="M55 5 L65 5 L65 15 L55 15" stroke="white" strokeWidth="2" />
                <path d="M70 5 L75 10 L70 15" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div className="h-8 w-24 bg-white/10 rounded-md flex items-center justify-center">
              <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10 L20 10" stroke="white" strokeWidth="2" />
                <path d="M25 5 L35 5 L35 15 L25 15" stroke="white" strokeWidth="2" />
                <circle cx="45" cy="10" r="5" stroke="white" strokeWidth="2" />
                <path d="M55 5 L55 15" stroke="white" strokeWidth="2" />
                <path d="M60 5 L70 5 L70 15 L60 15" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div className="h-8 w-24 bg-white/10 rounded-md flex items-center justify-center">
              <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 5 L20 5 L20 15 L10 15" stroke="white" strokeWidth="2" />
                <path d="M25 5 L30 10 L25 15" stroke="white" strokeWidth="2" />
                <path d="M35 5 L45 5 L45 15 L35 15" stroke="white" strokeWidth="2" />
                <path d="M50 5 L50 15" stroke="white" strokeWidth="2" />
                <path d="M55 5 L65 15 M55 15 L65 5" stroke="white" strokeWidth="2" />
                <path d="M70 5 L75 10 L70 15" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
