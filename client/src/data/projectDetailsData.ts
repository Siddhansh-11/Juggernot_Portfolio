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
  category: 'design' | 'development' | 'analytics' | 'integration' | 'llm model' | 'AI-Image model';
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
    coverImage: "/images/kapitalbank.webp", // Using project card image
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
    coverImage: "/images/replyrocket.webp",
    date: "2024",
    metrics: [
      { value: "5.3x", label: "Engagement Increase" },
      { value: "73%", label: "Time Saved on Social" },
      { value: "47%", label: "Follower Growth" }
    ],
    // External link removed as requested
    videoUrl: "/videos/ReplyRocket_VideoDemo_JNT.mp4",
    screenshots: [],
    problemDescription: "Businesses struggle to consistently engage with their Twitter audience, missing valuable opportunities for connection, lead generation, and support. Manual handling of customer queries, influencer tracking, and product marketing slows down teams and makes it hard to scale authentic interactions.",
    painPoints: [
      {
        title: "Response Delays",
        description: "Brands taking too long to respond to mentions and complaints, hurting retention and leaving customers feeling ignored."
      },
      {
        title: "Missed Marketing Opportunities",
        description: "Companies fail to join relevant trending conversations where their product could shine, resulting in lost inbounds."
      },
      {
        title: "Lack of Proactive Networking",
        description: "It's difficult to track and engage with high-value individuals consistently at scale."
      }
    ],
    solutionDescription: "We developed ReplyRocket AI — a fully autonomous Twitter agent that handles customer support, product marketing, and proactive networking in real time. It mirrors your brand's tone, prioritizes responses intelligently, and boosts visibility by engaging first with your target audience.",
    solutions: [
      {
        title: "Instant AI-Powered Replies",
        description: "Fully automated, lightning-fast responses to support mentions and DMs — ensuring your customers feel heard, instantly."
      },
      {
        title: "Contextual Product Positioning",
        description: "The agent intelligently inserts your product into relevant Twitter conversations, helping drive inbounds with zero manual effort."
      },
      {
        title: "Influencer & Prospect Tracking",
        description: "Track your target audience and ensure you're the first to engage with their posts, building relationships that convert to partnerships and sales."
      }
    ],
    techStack: [
      { name: "Go", category: "development" },
      { name: "React", category: "development" },
      { name: "Twitter APIs", category: "development" },
      { name: "OpenAI GPT-4", category: "development" },
      { name: "OpenAI Dalle", category: "development" }
    ],
    testimonial: {
      quote: "ReplyRocket transformed our Twitter presence. We've seen incredible growth in engagement without increasing our team's workload. The AI responses are indistinguishable from our own writing!",
      author: "Sarah Chen",
      position: "Social Media Director",
      company: "TechForward"
    }
  },

  // 3. AI JobSeeker Agent
  "agent-ari": {
    id: "jobseeker-agent",
    title: "AI JobSeeker Agent",
    category: "AI Agent / Job Automation",
    description: "An intelligent AI-powered agent that automates the entire job application lifecycle for users—from personalized job discovery to seamless application submission and strategic networking.",
    coverImage: "/images/agent-ari.webp",
    date: "2024",
    metrics: [
      { value: "80%", label: "Reduction in Time Spent Applying" },
      { value: "5x", label: "Increase in Personalized Job Matches" },
      { value: "60%", label: "Better Response Rate via Strategic Networking" }
    ],
    screenshots: [
      { url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&q=80", alt: "Job Matching Dashboard", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&q=80", alt: "Resume Builder", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=800&q=80", alt: "Mobile Application View", type: "mobile" },
      { url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&q=80", alt: "Interview Preparation", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=800&q=80", alt: "Mobile Job Alerts", type: "mobile" },
    ],
    problemDescription: "Finding the right job today is a broken experience. Users are overwhelmed by irrelevant listings, forced to manually re-enter their details across platforms, and struggle to stand out. Fatigue sets in, personalization drops, and networking—often the key to landing a role—is left to chance.",
    painPoints: [
      {
        title: "Manual Fatigue",
        description: "Users apply manually to hundreds of listings."
      },
      {
        title: "Poor Personalization",
        description: "Generic feeds waste time."
      },
      {
        title: "Inefficient Networking",
        description: "No scalable way to get referrals."
      }
    ],
    solutionDescription: "JobSeeker Agent offers end-to-end job application automation.",
    solutions: [
      {
        title: "Real-time Job Discovery",
        description: "Intelligent job discovery from LinkedIn with customized filters based on user resume and preferences."
      },
      {
        title: "Automated Application Submission",
        description: "Agent-controlled browser to submit applications with AI-generated custom cover letters tailored to each position."
      },
      {
        title: "Strategic Networking",
        description: "Automated referral outreach to key employees on LinkedIn, increasing chances of application review."
      },
      {
        title: "Personalized Job Matching",
        description: "Smart filtering system that matches opportunities to your skills and career goals with high precision."
      }
    ],
    techStack: [
      { name: "Electron", category: "development" },
      { name: "React", category: "development" },
      { name: "ShadCN UI", category: "design" },
      { name: "Supabase", category: "development" },
      { name: "Railway", category: "development" },
      { name: "LangChain", category: "development" },
      { name: "Gemini", category: "development" },
      { name: "Browser Use", category: "development" },
      { name: "Replit", category: "design" }
    ],
    testimonial: {
      quote: "The AI JobSeeker Agent has completely transformed my job search. What used to take me weeks now happens automatically. I'm getting interviews at companies I never thought would respond, and the personalized outreach has led to meaningful connections.",
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
    coverImage: "/images/agent-lav.webp",
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
    coverImage: "/images/agent-malcom.webp",
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

  // 6. Omnycomm: Ecommerce Platform with ERP Automation
  "omnycomm": {
    id: "omnycomm",
    title: "Omnycomm",
    category: "E-commerce / ERP Automation",
    description: "White-labeled e-commerce + ERP platform enabling hypermarkets and retail merchants to digitize inventory, launch online stores, and sync with regional marketplaces.",
    coverImage: "/images/omnycomm.webp",
    date: "2022",
    metrics: [
      { value: "5x", label: "Faster Merchant Onboarding" },
      { value: "60%", label: "Reduction in Order Processing Time" },
      { value: "2000+", label: "Merchant Stores Enabled" }
    ],
    screenshots: [
      { url: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&h=500&q=80", alt: "Merchant Dashboard", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&h=500&q=80", alt: "Store Builder", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=400&h=800&q=80", alt: "Mobile Checkout", type: "mobile" },
      { url: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&h=500&q=80", alt: "Analytics Dashboard", type: "desktop" },
      { url: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=400&h=800&q=80", alt: "Mobile Product Management", type: "mobile" },
    ],
    problemDescription: "Traditional merchants lacked a scalable way to go online, sync with marketplaces, or manage high-volume inventory efficiently.",
    painPoints: [
      {
        title: "No Digital Storefront",
        description: "Merchants struggled to create branded e-commerce experiences."
      },
      {
        title: "Disconnected Systems",
        description: "Inventory and order data were scattered across platforms."
      },
      {
        title: "No Marketplace Sync",
        description: "Manual updates led to frequent listing errors and stockouts."
      }
    ],
    solutionDescription: "Omnycomm offered a plug-and-play infrastructure to launch, manage, and scale online retail across marketplaces.",
    solutions: [
      {
        title: "DIY E-commerce Store Builder",
        description: "Templates and branding tools for merchants to quickly create customized online storefronts."
      },
      {
        title: "Unified Management Dashboard",
        description: "Centralized system for inventory, order, and warehouse management across all sales channels."
      },
      {
        title: "Marketplace Auto-Sync",
        description: "Automatic synchronization with Amazon, Noon, and 15+ marketplaces via prebuilt connectors."
      },
      {
        title: "Inventory Digitization",
        description: "Support for over 2 million SKUs with streamlined operations across sourcing, order management, and last-mile delivery."
      }
    ],
    techStack: [
      { name: "React", category: "development" },
      { name: "Django", category: "development" },
      { name: "PostgreSQL", category: "development" },
      { name: "AWS", category: "development" },
      { name: "Google Analytics", category: "analytics" },
      { name: "Google Lighthouse", category: "analytics" }
    ],
    testimonial: {
      quote: "Omnycomm transformed how we manage our retail business. The platform helped us launch 50+ branded stores while maintaining a single inventory source. The marketplace sync feature alone saved us hundreds of hours in manual updates.",
      author: "Mohammed Al-Qasimi",
      position: "Digital Director",
      company: "Western International Group"
    }
  },

  // 7. INAAM App (Loyalty Application)
  "inaam": {
    id: "inaam",
    title: "INAAM Loyalty",
    category: "Customer Loyalty",
    description: "Cross-merchant loyalty platform unifying rewards across businesses and brands.",
    coverImage: "/images/inaam.webp",
    date: "2022",
    metrics: [
      { value: "27%", label: "Customer Retention Increase" },
      { value: "4.3x", label: "Repeat Purchase Rate" },
      { value: "10K+", label: "Participating Businesses" }
    ],
    screenshots: [
      { url: "/images/Inaam 2.webp", alt: "INAAM Dashboard", type: "desktop" },
      { url: "/images/Inaam 5.webp", alt: "INAAM Configuration", type: "desktop" },
      { url: "/images/Inaam 6.webp", alt: "INAAM Interface", type: "desktop" },
      { url: "/images/Inaam 7.png", alt: "INAAM Analytics", type: "desktop" },
      { url: "/images/Inaam 8.png", alt: "INAAM Metrics", type: "desktop" },
      { url: "/images/Inaam 9.png", alt: "INAAM Reports", type: "desktop" },
      { url: "/images/Inaam 10.png", alt: "INAAM Engagement", type: "desktop" },
      { url: "/images/Inaam 11.png", alt: "INAAM Features", type: "desktop" },
    ],
    externalLink: {
      url: "https://play.google.com/store/apps/details?id=com.AlWafa.Nesto&hl=en_IN",
      label: "Download App",
      type: "play_store"
    },
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
    coverImage: "/images/nyuyu.webp",
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
    coverImage: "/images/verizon-bluejeans.webp",
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
    coverImage: "/images/ess-dee.webp",
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