import React from "react";

// Define the types for project details
export interface ProjectPainPoint {
  title: string;
  description: string;
  icon?: React.ReactElement;
}

export interface ProjectSolution {
  title: string;
  description: string;
  image?: string; // URL to solution image
}

export interface ProjectScreenshot {
  url: string;
  alt: string;
  caption?: string;
  type?: 'desktop' | 'mobile'; // Specify if it's a mobile or desktop screenshot
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string; // URL to author image or company logo
}

export interface ProjectMetric {
  value: string;
  label: string;
  icon?: React.ReactElement;
}

export interface ProjectDetails {
  id: string; // Unique identifier, also used for URL routing
  title: string;
  category: string;
  description: string;
  coverImage: string;
  date: string;
  metrics: ProjectMetric[];
  videoUrl?: string; // YouTube embed URL (optional)
  screenshots: ProjectScreenshot[];
  problemDescription: string;
  painPoints: ProjectPainPoint[];
  solutionDescription: string;
  solutions: ProjectSolution[];
  testimonial?: ProjectTestimonial;
}

// Sample project data for KapitalBank (we'll expand this as you provide more details)
export const projectDetailsData: Record<string, ProjectDetails> = {
  "kapitalbank": {
    id: "kapitalbank",
    title: "KapitalBank Securities Platform",
    category: "Financial",
    description: "Built a securities product with AI-powered analysis to grow 18x in 2 years.",
    coverImage: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=1600&h=900&q=80", // Placeholder
    date: "2023 - 2024",
    metrics: [
      { value: "18x", label: "Growth in 2 years" },
      { value: "40%", label: "Increased User Retention" },
      { value: "65%", label: "Cost Reduction" }
    ],
    // videoUrl: "https://www.youtube.com/embed/VIDEO_ID", // Replace VIDEO_ID with actual YouTube video ID
    screenshots: [
      { url: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=800&h=500&q=80", alt: "Dashboard View", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=800&h=500&q=80", alt: "Analytics Panel", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=400&h=800&q=80", alt: "Mobile Dashboard", type: "mobile" },
      { url: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=800&h=500&q=80", alt: "User Portfolio", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=400&h=800&q=80", alt: "Mobile Portfolio", type: "mobile" },
    ],
    problemDescription: "KapitalBank needed a modern securities platform that could handle complex financial data while providing actionable insights to both novice and experienced investors.",
    painPoints: [
      {
        title: "Complex Data Visualization",
        description: "Existing solutions made it difficult for users to understand market trends and make informed investment decisions."
      },
      {
        title: "Scale Limitations",
        description: "Legacy systems couldn't handle the increasing volume of transactions and real-time market data."
      },
      {
        title: "Regulatory Compliance",
        description: "Keeping up with changing financial regulations was labor-intensive and prone to human error."
      }
    ],
    solutionDescription: "We developed an AI-powered securities platform that simplifies complex data, scales effortlessly, and automates regulatory compliance.",
    solutions: [
      {
        title: "Intuitive Data Visualization",
        description: "Implemented interactive charts and simplified dashboards that make complex financial data accessible to all users."
      },
      {
        title: "Cloud-Native Architecture",
        description: "Built a scalable, cloud-based system that handles millions of transactions with minimal latency."
      },
      {
        title: "AI-Powered Compliance",
        description: "Created automated systems that continuously monitor and adapt to regulatory changes, reducing manual oversight by 85%."
      }
    ],
    testimonial: {
      quote: "The platform Juggernot AI built has transformed our securities business. What used to be a complex system only professionals could navigate is now accessible to all our customers.",
      author: "Alex Johnson",
      position: "CTO",
      company: "KapitalBank"
    }
  }
};