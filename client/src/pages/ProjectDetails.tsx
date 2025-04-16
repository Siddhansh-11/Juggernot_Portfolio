import React, { useEffect, useRef, useState } from "react";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectDetailsData } from "../data/projectDetailsData";
import { cn } from "@/lib/utils";

export default function ProjectDetails() {
  // Get project ID from URL
  const [, params] = useRoute("/projects/:id");
  const projectId = params?.id;
  
  // Find project details by ID
  const projectDetails = projectId ? projectDetailsData[projectId] : null;
  
  // Refs for horizontal scroll functionality
  const screenshotScrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Auto-scroll for screenshots
  useEffect(() => {
    if (!screenshotScrollRef.current) return;
    
    const scrollContainer = screenshotScrollRef.current;
    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    
    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when we reach the end
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [projectDetails]);
  
  // Handle mouse drag for screenshots
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!screenshotScrollRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - screenshotScrollRef.current.offsetLeft);
    setScrollLeft(screenshotScrollRef.current.scrollLeft);
  };
  
  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !screenshotScrollRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - screenshotScrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    screenshotScrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Render not found if project doesn't exist
  if (!projectDetails) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
        <p className="text-gray-400 mb-8">The project you're looking for doesn't seem to exist.</p>
        <Button asChild>
          <a href="/#projects">Return to Projects</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden bg-black">
        {/* Cover image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={projectDetails.coverImage} 
            alt={projectDetails.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-end pb-16">
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="mb-8 w-fit"
          >
            <a href="/#projects" className="inline-flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </a>
          </Button>
          
          <div className="mb-4">
            <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
              {projectDetails.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {projectDetails.title}
          </h1>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            {projectDetails.description}
          </p>
          
          <div className="flex flex-wrap gap-8">
            <div className="bg-card/20 backdrop-blur-md px-5 py-3 rounded-md border border-white/10">
              <p className="text-sm text-gray-400">Project Timeline</p>
              <p className="text-xl font-medium">{projectDetails.date}</p>
            </div>
            
            {projectDetails.metrics.map((metric, index) => (
              <div 
                key={index} 
                className="bg-card/20 backdrop-blur-md px-5 py-3 rounded-md border border-white/10"
              >
                <p className="text-sm text-gray-400">{metric.label}</p>
                <p className="text-xl font-medium">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video section (if available) */}
      {projectDetails.videoUrl && (
        <section className="py-20 bg-background relative">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">See it in action</h2>
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
              <iframe 
                src={projectDetails.videoUrl} 
                title={`${projectDetails.title} Video`}
                className="w-full h-full" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      )}
      
      {/* Screenshots section */}
      <section className="py-20 bg-card/5">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Gallery</h2>
          
          <div 
            ref={screenshotScrollRef}
            className="overflow-x-auto cursor-grab active:cursor-grabbing pb-8"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="inline-flex space-x-6">
              {projectDetails.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-none w-[280px] md:w-[500px] rounded-lg overflow-hidden shadow-lg"
                >
                  <img 
                    src={screenshot.url} 
                    alt={screenshot.alt}
                    className="w-full h-auto"
                  />
                  {screenshot.caption && (
                    <div className="p-4 bg-card">
                      <p className="text-sm text-gray-300">{screenshot.caption}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Problem section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-gray-300 mb-12">{projectDetails.problemDescription}</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectDetails.painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/10 p-6 rounded-lg border border-white/5"
                >
                  {point.icon && (
                    <div className="mb-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      {point.icon}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                  <p className="text-gray-400">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Solution section */}
      <section className="py-20 bg-card/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">{projectDetails.solutionDescription}</p>
            </motion.div>
            
            <div className="space-y-24">
              {projectDetails.solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "flex flex-col gap-8",
                    index % 2 === 0 
                      ? "md:flex-row" 
                      : "md:flex-row-reverse"
                  )}
                >
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-gray-400">{solution.description}</p>
                  </div>
                  
                  <div className="flex-1 rounded-lg overflow-hidden bg-card/30">
                    {solution.image ? (
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[300px] flex items-center justify-center">
                        <p className="text-gray-500">Image placeholder</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial section */}
      {projectDetails.testimonial && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto bg-card/10 p-8 md:p-12 rounded-xl border border-white/5"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-8">
                  <svg
                    className="absolute -top-8 -left-8 text-accent opacity-20"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032.303-.406.7-.754 1.19-1.05.495-.297 1.05-.536 1.66-.716.61-.18 1.19-.274 1.73-.274.78 0 1.5.21 2.16.63.66.42 1.18 1.02 1.58 1.8.4.78.6 1.71.6 2.77 0 .97-.22 1.81-.66 2.52-.44.71-.98 1.27-1.62 1.67-.72.46-1.45.75-2.28.89-1.1.19-2.12.14-3.06-.14-.88-.25-1.63-.66-2.24-1.22-.61-.56-1.05-1.22-1.32-1.97l1.08-.44c.17.42.42.81.75 1.17.33.36.74.64 1.23.84.49.2 1.05.32 1.68.32.42 0 .83-.08 1.24-.24.41-.16.78-.39 1.1-.69.33-.3.6-.66.8-1.07.2-.41.3-.87.3-1.36zm9.76 0c0-.88-.23-1.618-.69-2.217-.326-.41-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032.303-.406.7-.754 1.19-1.05.495-.297 1.05-.536 1.66-.716.61-.18 1.19-.274 1.73-.274.78 0 1.5.21 2.16.63.66.42 1.18 1.02 1.58 1.8.4.78.6 1.71.6 2.77 0 .97-.22 1.81-.66 2.52-.44.71-.98 1.27-1.62 1.67-.72.46-1.45.75-2.28.89-1.1.19-2.12.14-3.06-.14-.88-.25-1.63-.66-2.24-1.22-.61-.56-1.05-1.22-1.32-1.97l1.08-.44c.17.42.42.81.75 1.17.33.36.74.64 1.23.84.49.2 1.05.32 1.68.32.42 0 .83-.08 1.24-.24.41-.16.78-.39 1.1-.69.33-.3.6-.66.8-1.07.2-.41.3-.87.3-1.36z" />
                  </svg>
                  
                  <p className="text-xl md:text-2xl font-medium text-gray-200 text-center">
                    {projectDetails.testimonial.quote}
                  </p>
                </div>
                
                <div className="flex flex-col items-center">
                  {projectDetails.testimonial.image && (
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                      <img 
                        src={projectDetails.testimonial.image} 
                        alt={projectDetails.testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <p className="font-bold">{projectDetails.testimonial.author}</p>
                  <p className="text-sm text-gray-400">
                    {projectDetails.testimonial.position}, {projectDetails.testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* CTA section */}
      <section className="py-20 bg-card/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to transform your business with AI?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how our solutions can help you achieve similar results.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-black">
              <a href="/#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}