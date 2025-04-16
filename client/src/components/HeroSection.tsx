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
              <a href="#projects">View our work</a>
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative grid-lines rounded-2xl border border-border/20 p-8 h-[400px] flex items-center justify-center"
        >
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
    </section>
  );
}
