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

export interface TechStackItem {
  name: string;
  logo?: string; // URL to logo image or icon
  category: 'design' | 'development' | 'analytics';
}

export interface ProjectDetails {
  id: string; // Unique identifier, also used for URL routing
  title: string;
  category: string;
  description: string;
  coverImage: string;
  date: string;
  metrics: ProjectMetric[];
  externalLink?: {
    url: string;
    label: string;
    type: 'web' | 'app_store' | 'play_store' | 'github';
  }; // External link to project website, app store, etc.
  videoUrl?: string; // YouTube embed URL (optional)
  screenshots: ProjectScreenshot[];
  problemDescription: string;
  painPoints: ProjectPainPoint[];
  solutionDescription: string;
  solutions: ProjectSolution[];
  techStack: TechStackItem[]; // Tech stack used in the project
  testimonial?: ProjectTestimonial;
}

// Project data for all client projects
export const projectDetailsData: Record<string, ProjectDetails> = {
  // 1. KapitalBank Securities Platform
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
    techStack: [
      { name: "Figma", category: "design" },
      { name: "Adobe XD", category: "design" },
      { name: "Sketch", category: "design" },
      { name: "React", category: "development" },
      { name: "TypeScript", category: "development" },
      { name: "Node.js", category: "development" },
      { name: "PostgreSQL", category: "development" },
      { name: "AWS", category: "development" },
      { name: "Google Analytics", category: "analytics" },
      { name: "Mixpanel", category: "analytics" },
      { name: "Amplitude", category: "analytics" }
    ],
    testimonial: {
      quote: "The platform Juggernot AI built has transformed our securities business. What used to be a complex system only professionals could navigate is now accessible to all our customers.",
      author: "Alex Johnson",
      position: "CTO",
      company: "KapitalBank"
    }
  },

  // 2. ReplyRocket AI (AI agent for twitter)
  "replyrocket": {
    id: "replyrocket",
    title: "ReplyRocket AI",
    category: "AI Agent",
    description: "An intelligent AI agent that automates Twitter engagement while maintaining authentic brand voice.",
    coverImage: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1600&h=900&q=80", // Placeholder
    date: "2024",
    metrics: [
      { value: "5.3x", label: "Engagement Increase" },
      { value: "73%", label: "Time Saved on Social" },
      { value: "47%", label: "Follower Growth" }
    ],
    screenshots: [
      { url: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=500&q=80", alt: "ReplyRocket Dashboard", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=500&q=80", alt: "AI Response Settings", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=800&q=80", alt: "Mobile Dashboard", type: "mobile" },
      { url: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=500&q=80", alt: "Analytics Dashboard", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=800&q=80", alt: "Mobile Notifications", type: "mobile" },
    ],
    problemDescription: "Businesses struggle to consistently engage with their Twitter audience, missing valuable opportunities for connection while spending excessive time managing social interactions manually.",
    painPoints: [
      {
        title: "Response Delays",
        description: "Brands taking too long to respond to mentions and messages, leading to decreased engagement and missed opportunities."
      },
      {
        title: "Inconsistent Voice",
        description: "Multiple team members responding differently, creating an inconsistent brand voice and customer experience."
      },
      {
        title: "Scaling Limitations",
        description: "Growing accounts unable to manually respond to increasing volumes of interactions while maintaining quality."
      }
    ],
    solutionDescription: "We developed ReplyRocket AI, a sophisticated agent that intelligently engages with Twitter audiences in real-time while preserving the brand's authentic voice and personality.",
    solutions: [
      {
        title: "Voice-Matched AI Responses",
        description: "Advanced machine learning algorithm that studies your existing content to perfectly match tone, style, and brand personality in every interaction."
      },
      {
        title: "Smart Prioritization",
        description: "Intelligent triage system that identifies high-value engagement opportunities and prioritizes responses based on user influence and sentiment."
      },
      {
        title: "Human-in-the-Loop Controls",
        description: "Customizable approval workflows for different interaction types, allowing brands to maintain oversight while automating routine engagements."
      },
      {
        title: "Performance Analytics",
        description: "Comprehensive dashboard tracking engagement metrics, sentiment analysis, and growth statistics to continuously optimize performance."
      }
    ],
    techStack: [
      { name: "Figma", category: "design" },
      { name: "Framer", category: "design" },
      { name: "Python", category: "development" },
      { name: "TensorFlow", category: "development" },
      { name: "React", category: "development" },
      { name: "AWS", category: "development" },
      { name: "Twitter API", category: "development" },
      { name: "Mixpanel", category: "analytics" },
      { name: "Posthog", category: "analytics" }
    ],
    testimonial: {
      quote: "ReplyRocket transformed our Twitter presence. We've seen incredible growth in engagement without increasing our team's workload. The AI responses are indistinguishable from our own writing!",
      author: "Sarah Chen",
      position: "Social Media Director",
      company: "TechForward"
    }
  },

  // 3. Agent Ari (AI Job Seeker - Development in progress)
  "agent-ari": {
    id: "agent-ari",
    title: "Agent Ari",
    category: "AI Career Assistant",
    description: "An AI-powered job seeking assistant that personalizes applications and tracks opportunities.",
    coverImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1600&h=900&q=80", // Placeholder
    date: "2024 - In Development",
    metrics: [
      { value: "70%", label: "Time Saved" },
      { value: "3.2x", label: "Interview Rate" },
      { value: "94%", label: "User Satisfaction" }
    ],
    screenshots: [
      { url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&q=80", alt: "Job Matching Dashboard", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&q=80", alt: "Resume Builder", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=800&q=80", alt: "Mobile Application View", type: "mobile" },
      { url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&q=80", alt: "Interview Preparation", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=800&q=80", alt: "Mobile Job Alerts", type: "mobile" },
    ],
    problemDescription: "Job seekers face overwhelming challenges in today's competitive market, from tailoring applications to tracking opportunities and preparing for interviews, all while maintaining motivation during a stressful process.",
    painPoints: [
      {
        title: "Application Fatigue",
        description: "Job seekers burn out from repeatedly customizing resumes and cover letters for each position, often with limited feedback."
      },
      {
        title: "Opportunity Management",
        description: "Tracking applications across multiple platforms and stages leads to missed follow-ups and disorganized job search efforts."
      },
      {
        title: "Interview Preparation",
        description: "Candidates struggle to effectively prepare for company-specific interviews without insider knowledge or comprehensive resources."
      }
    ],
    solutionDescription: "Agent Ari serves as an intelligent job search companion that streamlines applications, provides personalized guidance, and optimizes each stage of the job seeking process.",
    solutions: [
      {
        title: "Smart Application Customization",
        description: "AI-powered resume and cover letter tailoring that matches your experience to job descriptions, highlighting relevant skills and accomplishments."
      },
      {
        title: "Unified Opportunity Tracker",
        description: "Centralized dashboard aggregating positions across platforms with automated follow-up reminders and application status tracking."
      },
      {
        title: "Company-Specific Preparation",
        description: "Custom interview preparation with company research, industry-specific questions, and AI-powered mock interviews with feedback."
      },
      {
        title: "Career Development Insights",
        description: "Personalized skill gap analysis and learning recommendations to strengthen candidacy for target roles and industries."
      }
    ],
    techStack: [
      { name: "Figma", category: "design" },
      { name: "Adobe XD", category: "design" },
      { name: "React Native", category: "development" },
      { name: "Node.js", category: "development" },
      { name: "GPT-4", category: "development" },
      { name: "MongoDB", category: "development" },
      { name: "Firebase", category: "development" },
      { name: "Heap", category: "analytics" },
      { name: "Hotjar", category: "analytics" }
    ],
    testimonial: {
      quote: "Agent Ari has revolutionized my job search. It's like having a personal career coach and assistant available 24/7. The personalized applications and interview preparation gave me the edge I needed.",
      author: "Michael Rodriguez",
      position: "Product Manager",
      company: "Recently hired at TechCorp"
    }
  },

  // 4. Agent Lav: AI Social Media agent
  "agent-lav": {
    id: "agent-lav",
    title: "Agent Lav",
    category: "AI Social Media",
    description: "Comprehensive AI social media manager that works across all major platforms.",
    coverImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&h=900&q=80", // Placeholder
    date: "2023 - 2024",
    metrics: [
      { value: "67%", label: "Content Creation Speed" },
      { value: "4.7x", label: "Engagement Growth" },
      { value: "82%", label: "Team Time Saved" }
    ],
    screenshots: [
      { url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&q=80", alt: "Cross-Platform Dashboard", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&q=80", alt: "Content Calendar", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&q=80", alt: "Mobile Analytics", type: "mobile" },
      { url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&q=80", alt: "AI Content Generator", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&q=80", alt: "Mobile Engagement View", type: "mobile" },
    ],
    problemDescription: "Brands struggle to maintain consistent, engaging presences across multiple social media platforms, each with unique audience expectations, content formats, and optimization strategies.",
    painPoints: [
      {
        title: "Platform Fragmentation",
        description: "Managing separate strategies, content, and analytics across multiple platforms creates inefficiencies and inconsistent brand messaging."
      },
      {
        title: "Content Creation Burden",
        description: "Producing high-quality, platform-optimized content at the necessary frequency overwhelms marketing teams and creative resources."
      },
      {
        title: "Trend Responsiveness",
        description: "Brands struggle to identify and capitalize on trending topics quickly enough to maximize relevance and engagement."
      }
    ],
    solutionDescription: "Agent Lav unifies social media management across all major platforms with AI-driven content creation, engagement automation, and cross-platform analytics.",
    solutions: [
      {
        title: "Unified Management Console",
        description: "Centralized dashboard for managing content, engagement, and analytics across Instagram, Twitter, Facebook, LinkedIn, TikTok, and YouTube from a single interface."
      },
      {
        title: "Cross-Platform Content Adaptation",
        description: "AI that automatically adapts core content to the optimal format, style, and specifications for each platform while maintaining brand consistency."
      },
      {
        title: "Trend Intelligence",
        description: "Real-time monitoring system that identifies emerging trends relevant to your brand and suggests timely content opportunities across platforms."
      },
      {
        title: "Engagement Automation",
        description: "Platform-specific response automation that maintains authentic interactions with followers while respecting each platform's unique community norms."
      }
    ],
    techStack: [
      { name: "Figma", category: "design" },
      { name: "Adobe Creative Suite", category: "design" },
      { name: "React", category: "development" },
      { name: "Python", category: "development" },
      { name: "GraphQL", category: "development" },
      { name: "AWS", category: "development" },
      { name: "Platform APIs", category: "development" },
      { name: "Amplitude", category: "analytics" },
      { name: "Mixpanel", category: "analytics" },
      { name: "Custom Analytics", category: "analytics" }
    ],
    testimonial: {
      quote: "Agent Lav transformed our social media strategy. We're now active across 7 platforms with half the team size, and our engagement metrics have never been better. The platform-specific optimizations give us an edge our competitors can't match.",
      author: "Priya Mehta",
      position: "Head of Digital Marketing",
      company: "Lifestyle Brands Inc."
    }
  },

  // 5. Agent Malcom (AI Guide for Travel, Activities and Dineout in a city)
  "agent-malcom": {
    id: "agent-malcom",
    title: "Agent Malcom",
    category: "AI Travel Guide",
    description: "Personalized AI city guide for travel, activities, and dining recommendations.",
    coverImage: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1600&h=900&q=80", // Placeholder
    date: "2023",
    metrics: [
      { value: "93%", label: "Recommendation Relevance" },
      { value: "4.8/5", label: "User Satisfaction" },
      { value: "32%", label: "Repeat Usage Rate" }
    ],
    screenshots: [
      { url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&h=500&q=80", alt: "City Exploration Home", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&h=500&q=80", alt: "Restaurant Recommendations", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400&h=800&q=80", alt: "Mobile Itinerary View", type: "mobile" },
      { url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&h=500&q=80", alt: "Activities Map", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400&h=800&q=80", alt: "Mobile Real-time Guide", type: "mobile" },
    ],
    problemDescription: "Travelers and locals alike struggle to discover authentic, personalized experiences in cities, often settling for tourist traps or chain establishments due to information overload and unreliable recommendations.",
    painPoints: [
      {
        title: "Recommendation Overload",
        description: "Users face overwhelming choices across fragmented platforms, leading to decision fatigue and missed opportunities."
      },
      {
        title: "Personalization Gaps",
        description: "Generic travel guides fail to account for individual preferences, dietary restrictions, budget constraints, and contextual factors."
      },
      {
        title: "Local Authenticity",
        description: "Difficulty distinguishing authentic local experiences from tourist-oriented options, especially in unfamiliar cities."
      }
    ],
    solutionDescription: "Agent Malcom provides hyper-personalized city guidance by combining AI with local expertise to curate perfect dining, activity, and travel experiences tailored to each user's preferences.",
    solutions: [
      {
        title: "Preference Learning Engine",
        description: "Sophisticated AI that builds a comprehensive preference profile through natural conversation, capturing nuanced tastes without tedious questionnaires."
      },
      {
        title: "Contextual Recommendations",
        description: "Intelligent suggestions that adapt to time of day, weather, location, group size, and other real-time factors for perfectly timed recommendations."
      },
      {
        title: "Dynamic Itinerary Planning",
        description: "AI-crafted itineraries that balance user preferences with practical logistics like travel time, opening hours, and reservation availability."
      },
      {
        title: "Local Expert Validation",
        description: "Recommendations enhanced by a network of local experts who validate suggestions and contribute insider knowledge unavailable on mainstream platforms."
      }
    ],
    techStack: [
      { name: "Figma", category: "design" },
      { name: "Adobe XD", category: "design" },
      { name: "React Native", category: "development" },
      { name: "Node.js", category: "development" },
      { name: "MongoDB", category: "development" },
      { name: "GPT-4", category: "development" },
      { name: "Google Maps API", category: "development" },
      { name: "Segment", category: "analytics" },
      { name: "Mixpanel", category: "analytics" }
    ],
    testimonial: {
      quote: "Agent Malcom completely changed how we explore cities. During our trip to Tokyo, it recommended this incredible hidden izakaya we would've never found on our own. It's like having a local friend who knows exactly what you'll love.",
      author: "James Whitaker",
      position: "Frequent Traveler",
      company: "Travel Enthusiast"
    }
  },

  // 6. Omnycomm: Ecommerce Platform (Like Shopify but for UAE market)
  "omnycomm": {
    id: "omnycomm",
    title: "Omnycomm",
    category: "E-commerce Platform",
    description: "UAE-focused e-commerce platform tailored for Middle Eastern markets and consumers.",
    coverImage: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=1600&h=900&q=80", // Placeholder
    date: "2022 - 2023",
    metrics: [
      { value: "15K+", label: "Active Merchants" },
      { value: "45%", label: "Conversion Increase" },
      { value: "3.2x", label: "GMV Growth" }
    ],
    screenshots: [
      { url: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&h=500&q=80", alt: "Merchant Dashboard", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&h=500&q=80", alt: "Store Builder", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=400&h=800&q=80", alt: "Mobile Checkout", type: "mobile" },
      { url: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&h=500&q=80", alt: "Analytics Dashboard", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=400&h=800&q=80", alt: "Mobile Product Management", type: "mobile" },
    ],
    problemDescription: "UAE and Middle Eastern merchants struggled with global e-commerce platforms that lacked regional payment methods, language support, and cultural adaptations necessary for the local market.",
    painPoints: [
      {
        title: "Payment Integration Challenges",
        description: "Existing platforms lacked seamless integration with preferred regional payment methods and local banking systems."
      },
      {
        title: "Language and Cultural Barriers",
        description: "Global platforms offered limited Arabic support and lacked features aligned with regional shopping behaviors and expectations."
      },
      {
        title: "Logistical Complexity",
        description: "Merchants faced difficulties integrating with local logistics providers and navigating regional shipping and delivery nuances."
      }
    ],
    solutionDescription: "Omnycomm provides a comprehensive e-commerce platform specifically designed for UAE and Middle Eastern merchants with localized features, integrations, and cultural adaptations.",
    solutions: [
      {
        title: "Regional Payment Ecosystem",
        description: "Seamless integration with all major UAE and MENA payment methods including tabby, regional card processors, and bank-specific solutions."
      },
      {
        title: "Bilingual Store Management",
        description: "Fully bilingual Arabic-English store management system with right-to-left design support and region-specific content templates."
      },
      {
        title: "Integrated Local Logistics",
        description: "Native integration with Aramex, Emirates Post, and other regional carriers with automated customs documentation and address formatting."
      },
      {
        title: "Cultural Shopping Adaptations",
        description: "Features supporting regional shopping behaviors including specialized Ramadan campaign tools, voice-based shopping, and family account structures."
      }
    ],
    techStack: [
      { name: "Figma", category: "design" },
      { name: "Adobe Creative Suite", category: "design" },
      { name: "React", category: "development" },
      { name: "Node.js", category: "development" },
      { name: "MongoDB", category: "development" },
      { name: "AWS", category: "development" },
      { name: "Docker", category: "development" },
      { name: "Segment", category: "analytics" },
      { name: "Google Analytics 4", category: "analytics" },
      { name: "Hotjar", category: "analytics" }
    ],
    testimonial: {
      quote: "Omnycomm transformed our online business. As a UAE-based fashion brand, we struggled with international platforms that didn't understand our market. With Omnycomm, our conversion rate increased by 45% and customer satisfaction scores have never been higher.",
      author: "Fatima Al-Maktoum",
      position: "CEO",
      company: "Elegance Abayas"
    }
  },

  // 7. INAAM App (Loyalty Application)
  "inaam": {
    id: "inaam",
    title: "INAAM Loyalty",
    category: "Customer Loyalty",
    description: "Cross-merchant loyalty platform unifying rewards across businesses and brands.",
    coverImage: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1600&h=900&q=80", // Placeholder
    date: "2022",
    metrics: [
      { value: "27%", label: "Customer Retention Increase" },
      { value: "4.3x", label: "Repeat Purchase Rate" },
      { value: "10K+", label: "Participating Businesses" }
    ],
    screenshots: [
      { url: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=500&q=80", alt: "Rewards Dashboard", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=500&q=80", alt: "Merchant Portal", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=800&q=80", alt: "Mobile Rewards Card", type: "mobile" },
      { url: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=500&q=80", alt: "Analytics Dashboard", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=800&q=80", alt: "Mobile Redemption", type: "mobile" },
    ],
    problemDescription: "Businesses struggled with standalone loyalty programs that suffered from low engagement, while customers were frustrated by managing multiple loyalty cards and programs across different merchants.",
    painPoints: [
      {
        title: "Program Fragmentation",
        description: "Consumers faced 'loyalty fatigue' from managing numerous separate programs, cards, and apps across different merchants."
      },
      {
        title: "Small Merchant Limitations",
        description: "Smaller businesses lacked resources to build and maintain effective loyalty programs that could compete with larger chains."
      },
      {
        title: "Reward Utilization",
        description: "Low redemption rates and engagement across standalone programs led to unrealized value for both businesses and customers."
      }
    ],
    solutionDescription: "INAAM created a unified loyalty ecosystem where customers earn and redeem points across a network of businesses, while merchants benefit from cross-promotion and shared customer insights.",
    solutions: [
      {
        title: "Universal Rewards Currency",
        description: "Unified points system that works seamlessly across all participating businesses with intelligent reward exchange rates based on business categories."
      },
      {
        title: "Turnkey Merchant Integration",
        description: "Simple integration options allowing businesses of any size to join the ecosystem through POS plugins, API, or even SMS-based transactions."
      },
      {
        title: "Community-Based Discovery",
        description: "Personalized merchant recommendations based on spending patterns, driving discovery of new businesses within the loyalty network."
      },
      {
        title: "Coalition Analytics",
        description: "Anonymized data insights providing merchants with valuable customer behavior patterns across complementary businesses."
      }
    ],
    techStack: [
      { name: "Figma", category: "design" },
      { name: "Adobe XD", category: "design" },
      { name: "React Native", category: "development" },
      { name: "Node.js", category: "development" },
      { name: "PostgreSQL", category: "development" },
      { name: "AWS", category: "development" },
      { name: "Firebase", category: "development" },
      { name: "Mixpanel", category: "analytics" },
      { name: "Amplitude", category: "analytics" }
    ],
    testimonial: {
      quote: "INAAM revolutionized our customer retention strategy. As a small café, we could never afford to build our own loyalty program, but with INAAM, we're on equal footing with major chains. We've seen a 30% increase in repeat customers and discovered valuable cross-promotion opportunities with complementary businesses.",
      author: "Hassan Al-Farsi",
      position: "Owner",
      company: "Bloom Café"
    }
  },

  // 8. Nyuyu: Style Guide (Look Book) that enables users to explore styles, products and beauty centers locally
  "nyuyu": {
    id: "nyuyu",
    title: "Nyuyu Style Guide",
    category: "Beauty & Fashion",
    description: "Digital lookbook connecting users with local beauty services, products and styles.",
    coverImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&h=900&q=80", // Placeholder
    date: "2022 - 2023",
    metrics: [
      { value: "85%", label: "Salon Booking Conversion" },
      { value: "32%", label: "Product Discovery Rate" },
      { value: "50K+", label: "Monthly Active Users" }
    ],
    screenshots: [
      { url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=500&q=80", alt: "Style Exploration", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=500&q=80", alt: "Salon Directory", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=800&q=80", alt: "Mobile Lookbook", type: "mobile" },
      { url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=500&q=80", alt: "Product Discovery", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=800&q=80", alt: "Mobile Booking", type: "mobile" },
    ],
    problemDescription: "Beauty enthusiasts struggled to bridge the gap between style inspiration and local implementation, unable to easily find services, stylists, and products to achieve their desired looks within their community.",
    painPoints: [
      {
        title: "Inspiration-Reality Gap",
        description: "Users found plenty of style inspiration online but lacked actionable paths to recreate these looks locally with available services and products."
      },
      {
        title: "Service Discovery Challenges",
        description: "Finding qualified local stylists and salons with proven expertise in specific styles required extensive research across fragmented platforms."
      },
      {
        title: "Product Uncertainty",
        description: "Uncertainty about which exact products were used to create inspirational looks led to wasted purchases and disappointing results."
      }
    ],
    solutionDescription: "Nyuyu created a comprehensive platform connecting style inspiration directly to local services, stylists, and products, making beauty and fashion discoveries immediately actionable.",
    solutions: [
      {
        title: "Shoppable Lookbooks",
        description: "Interactive style collections that break down exact products, techniques, and local services needed to achieve specific looks."
      },
      {
        title: "Stylist Matching",
        description: "AI-powered matching system connecting users with local beauty professionals who specialize in their preferred styles, verified by portfolio work."
      },
      {
        title: "Virtual Try-On Technology",
        description: "Advanced AR capabilities allowing users to virtually test hairstyles, makeup, and fashion looks before booking services or purchasing products."
      },
      {
        title: "Community Style Sharing",
        description: "User-generated content platform where local successes are showcased with full details on stylists, products, and techniques used."
      }
    ],
    techStack: [
      { name: "Figma", category: "design" },
      { name: "Adobe Creative Suite", category: "design" },
      { name: "React Native", category: "development" },
      { name: "Node.js", category: "development" },
      { name: "MongoDB", category: "development" },
      { name: "AWS", category: "development" },
      { name: "AR Kit", category: "development" },
      { name: "Amplitude", category: "analytics" },
      { name: "Firebase Analytics", category: "analytics" }
    ],
    testimonial: {
      quote: "Nyuyu transformed my salon's business model. Our bookings increased by 70% as clients could now discover our specialty services through style matches. The platform brings in exactly the right clients for our expertise, and we've built a loyal community through the style sharing features.",
      author: "Layla Mahmoud",
      position: "Owner",
      company: "Glow Beauty Studio"
    }
  },

  // 9. Verizon: Blue Jeans (Like Microsoft Teams)
  "verizon-bluejeans": {
    id: "verizon-bluejeans",
    title: "Verizon BlueJeans",
    category: "Enterprise Communication",
    description: "Enterprise-grade video conferencing and collaboration platform with advanced security.",
    coverImage: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1600&h=900&q=80", // Placeholder
    date: "2021 - 2022",
    metrics: [
      { value: "99.99%", label: "Uptime Reliability" },
      { value: "40%", label: "Meeting Efficiency Increase" },
      { value: "500+", label: "Enterprise Clients" }
    ],
    screenshots: [
      { url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=500&q=80", alt: "Video Conference", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=500&q=80", alt: "Admin Dashboard", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=800&q=80", alt: "Mobile Meeting", type: "mobile" },
      { url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=500&q=80", alt: "Security Settings", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=800&q=80", alt: "Mobile Content Share", type: "mobile" },
    ],
    problemDescription: "Enterprise organizations required secure, reliable video communication platforms that could integrate with their existing workflows while meeting strict compliance and security requirements.",
    painPoints: [
      {
        title: "Security Vulnerabilities",
        description: "Existing video platforms lacked enterprise-grade security features necessary for sensitive business communications and regulated industries."
      },
      {
        title: "Integration Fragmentation",
        description: "Organizations struggled with video solutions that didn't integrate well with their existing enterprise software ecosystems."
      },
      {
        title: "Scalability Challenges",
        description: "Growing enterprises faced performance degradation and reliability issues when scaling video communications across global teams."
      }
    ],
    solutionDescription: "We helped develop a secure, enterprise-focused video collaboration platform with seamless integration capabilities, advanced admin controls, and industry-leading reliability.",
    solutions: [
      {
        title: "End-to-End Encryption",
        description: "Military-grade security architecture ensuring all communications remain private with detailed access controls and compliance features for regulated industries."
      },
      {
        title: "Enterprise Integration Ecosystem",
        description: "Seamless connections with major enterprise software including Salesforce, Microsoft 365, Slack, and custom enterprise systems through robust APIs."
      },
      {
        title: "Smart Meeting Technology",
        description: "AI-powered features including real-time transcription, meeting highlights, action item extraction, and intelligent noise cancellation."
      },
      {
        title: "Global Infrastructure",
        description: "Distributed edge computing architecture ensuring consistent, low-latency performance across international teams regardless of geographic location."
      }
    ],
    techStack: [
      { name: "Figma", category: "design" },
      { name: "Adobe XD", category: "design" },
      { name: "React", category: "development" },
      { name: "WebRTC", category: "development" },
      { name: "TypeScript", category: "development" },
      { name: "Java", category: "development" },
      { name: "Kubernetes", category: "development" },
      { name: "Datadog", category: "analytics" },
      { name: "Splunk", category: "analytics" },
      { name: "Custom Analytics", category: "analytics" }
    ],
    testimonial: {
      quote: "BlueJeans has revolutionized how our global teams collaborate. The security features meet our strict compliance requirements, while the integration capabilities have streamlined our entire workflow. Our teams report significantly more productive meetings and faster decision-making.",
      author: "Robert Chen",
      position: "CIO",
      company: "Global Financial Services Corp"
    }
  },

  // 10. EsDee: Sports Wear Brand (Like HRX)
  "esdee": {
    id: "esdee",
    title: "EsDee Sportswear",
    category: "E-commerce",
    description: "Performance sportswear brand with immersive digital shopping experience.",
    coverImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&h=900&q=80", // Placeholder
    date: "2021",
    metrics: [
      { value: "2.5x", label: "Conversion Rate" },
      { value: "65%", label: "Lower Return Rate" },
      { value: "3.8M", label: "Monthly Site Visitors" }
    ],
    screenshots: [
      { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=500&q=80", alt: "Product Showcase", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=500&q=80", alt: "Virtual Fitting Room", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=800&q=80", alt: "Mobile Shop", type: "mobile" },
      { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=500&q=80", alt: "Performance Dashboard", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=800&q=80", alt: "Mobile AR Experience", type: "mobile" },
    ],
    problemDescription: "Online sportswear retailers faced high return rates and low customer confidence due to uncertainty about fit, material performance, and how items would look in real-world athletic scenarios.",
    painPoints: [
      {
        title: "Fit Uncertainty",
        description: "Customers struggled to determine proper sizing across different sportswear types, leading to high return rates and customer dissatisfaction."
      },
      {
        title: "Performance Verification",
        description: "Shoppers couldn't effectively evaluate how technical fabrics and designs would perform during their specific activities before purchasing."
      },
      {
        title: "Inspiration Gap",
        description: "Traditional product displays failed to inspire customers with real-world applications and styling options for sportswear items."
      }
    ],
    solutionDescription: "We developed an immersive digital shopping experience for EsDee Sportswear that bridges the online-physical gap through innovative visualization technologies and activity-specific product testing.",
    solutions: [
      {
        title: "Virtual Try-On Technology",
        description: "Advanced body scanning and AR visualization allowing customers to see exactly how products will fit their unique body dimensions in motion."
      },
      {
        title: "Activity-Based Testing Videos",
        description: "Interactive product pages showing real athletes testing items during specific activities with detailed performance metrics and stress testing results."
      },
      {
        title: "3D Fabric Exploration",
        description: "Close-up fabric visualization technology demonstrating breathability, stretch, and texture with interactive sensory descriptions and comparative analysis."
      },
      {
        title: "Personalized Performance Matching",
        description: "AI recommendation engine that matches products to customer's specific athletic activities, performance needs, and body movement patterns."
      }
    ],
    techStack: [
      { name: "Figma", category: "design" },
      { name: "Cinema 4D", category: "design" },
      { name: "Adobe Creative Suite", category: "design" },
      { name: "React", category: "development" },
      { name: "Three.js", category: "development" },
      { name: "WebGL", category: "development" },
      { name: "Node.js", category: "development" },
      { name: "AWS", category: "development" },
      { name: "Google Analytics 4", category: "analytics" },
      { name: "Hotjar", category: "analytics" },
      { name: "Optimizely", category: "analytics" }
    ],
    testimonial: {
      quote: "The digital experience Juggernot AI built for our brand completely transformed our e-commerce performance. Our return rates dropped by 65% while conversion rates more than doubled. Customers tell us it's the most confident they've ever felt buying sportswear online.",
      author: "David Singh",
      position: "Founder & CEO",
      company: "EsDee Sportswear"
    }
  }
};