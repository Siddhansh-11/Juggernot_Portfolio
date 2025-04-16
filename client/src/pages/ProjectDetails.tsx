import React, { useEffect, useRef, useState } from "react";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, AlertTriangle, Globe, Smartphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectDetailsData } from "../data/projectDetailsData";
import { cn } from "@/lib/utils";
import Footer from "../components/Footer";

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
    const scrollSpeed = 0.8; // pixels per frame (increased for faster scrolling)
    
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
    const walk = (x - startX) * 3; // Scroll speed multiplier (increased for faster manual scrolling)
    screenshotScrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Don't render testimonial or screenshots for Agent Ari project
  const shouldShowTestimonial = projectDetails?.testimonial && projectId !== "agent-ari";
  const shouldShowScreenshots = projectDetails?.screenshots && projectDetails.screenshots.length > 0 && projectId !== "agent-ari";

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
                <p className="text-xl font-medium text-white">{metric.value}</p>
              </div>
            ))}
            
            {/* External Link Button (if available) */}
            {projectDetails.externalLink && (
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="bg-accent/20 hover:bg-accent/30 border border-white/10"
              >
                <a 
                  href={projectDetails.externalLink.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  {projectDetails.externalLink.type === 'web' && <Globe size={18} />}
                  {projectDetails.externalLink.type === 'app_store' && <Smartphone size={18} />}
                  {projectDetails.externalLink.type === 'play_store' && <Smartphone size={18} />}
                  {projectDetails.externalLink.type === 'github' && <ExternalLink size={18} />}
                  {projectDetails.externalLink.label}
                  <ExternalLink size={16} />
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>
      
      {/* Video section (if available) */}
      {projectDetails.videoUrl && (
        <section className="py-20 bg-background relative grid-lines">
          {/* Grid overlay background */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">See it in action</h2>
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl shadow-accent/10">
              {projectDetails.videoUrl.includes('youtube.com') ? (
                <iframe 
                  src={projectDetails.videoUrl} 
                  title={`${projectDetails.title} Video`}
                  className="w-full h-full" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src={projectDetails.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </section>
      )}
      
      {/* Screenshots section */}
      {shouldShowScreenshots && projectDetails.id !== 'inaam' && projectDetails.id !== 'omnycomm' && (
        <section className="py-20 bg-card/5">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Gallery</h2>
            
            <div 
              ref={screenshotScrollRef}
              className="overflow-x-auto cursor-grab active:cursor-grabbing horizontal-scroll-container"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="inline-flex space-x-4">
                {projectDetails.screenshots.map((screenshot, index) => (
                  <motion.img 
                    key={index}
                    src={screenshot.url} 
                    alt={screenshot.alt}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex-none rounded-lg shadow-lg ${
                      screenshot.type === 'mobile' 
                        ? 'w-[260px] md:w-[300px]' 
                        : 'w-[260px] md:w-[340px]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Temporary placeholder for INAAM project */}
      {shouldShowScreenshots && projectDetails.id === 'inaam' && (
        <section className="py-20 bg-card/5">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Gallery</h2>
              <div className="bg-card/10 p-6 rounded-lg border border-white/10">
                <p className="text-gray-400 italic">
                  Gallery images will be added soon. Check back later for a complete showcase of the INAAM project.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Temporary placeholder for OmnyComm project */}
      {shouldShowScreenshots && projectDetails.id === 'omnycomm' && (
        <section className="py-20 bg-card/5">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Gallery</h2>
              <div className="bg-card/10 p-6 rounded-lg border border-white/10">
                <p className="text-gray-400 italic">
                  Gallery images will be added soon. Check back later for a complete showcase of the OmnyComm project.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      
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
            
            <div className="space-y-6">
              {projectDetails.painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/10 p-6 rounded-lg border border-white/10 flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-rose-500/15 rounded-full flex items-center justify-center text-rose-400">
                    {point.icon || <AlertTriangle size={20} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                    <p className="text-gray-400">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Solution section */}
      <section className="py-20 bg-card/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-gray-300 mb-12">{projectDetails.solutionDescription}</p>
            </motion.div>
            
            <div className="space-y-6">
              {projectDetails.solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/10 p-6 rounded-lg border border-white/10 flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/15 rounded-full flex items-center justify-center text-emerald-400">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-gray-400">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack section - Updated with simplified design */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Technology Stack</h2>
              <p className="text-gray-300">Tools and technologies used to deliver this project</p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {projectDetails.techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-card/10 px-4 py-2 rounded-full"
                >
                  {tech.logo ? (
                    <img src={tech.logo} alt={tech.name} className="w-5 h-5" />
                  ) : (
                    <div className="w-5 h-5 bg-card/50 rounded-md flex items-center justify-center text-xs font-bold">
                      {tech.name.charAt(0)}
                    </div>
                  )}
                  <span className="text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial section - hidden for Agent Ari project */}
      {shouldShowTestimonial && projectDetails.testimonial && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto bg-card/10 p-8 md:p-12 rounded-xl border border-white/10"
            >
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-accent/50 mb-6">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
                
                <blockquote className="text-xl md:text-2xl italic text-gray-200 mb-8">
                  "{projectDetails.testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center flex-col">
                  <cite className="font-bold text-gray-100 not-italic">
                    {projectDetails.testimonial.author}
                  </cite>
                  <span className="text-gray-400 text-sm mt-1">
                    {projectDetails.testimonial.position}, {projectDetails.testimonial.company}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
}