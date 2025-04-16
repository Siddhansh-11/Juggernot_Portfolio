import React from "react";

// Project type definition for better TypeScript support
export interface Project {
  id?: string;      // Optional ID for direct URL linking
  title: string;
  category: string;
  description: string;
  icon: React.ReactElement[];
  image?: string;   // Optional image URL property
}

export const projectsData: Project[] = [
  // 1. KapitalBank
  {
    id: "kapitalbank",
    title: "KapitalBank",
    category: "Financial",
    description: "Built a securities product with AI-powered analysis to grow 18x in 2 years.",
    image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=360&h=360&q=80",
    icon: [
      React.createElement("rect", { key: 1, x: "50", y: "50", width: "300", height: "200", fill: "#4B0082", opacity: "0.2" }),
      React.createElement("line", { key: 2, x1: "100", y1: "100", x2: "300", y2: "100", stroke: "#6C5CE7", strokeWidth: "2" }),
      React.createElement("line", { key: 3, x1: "100", y1: "130", x2: "300", y2: "130", stroke: "#6C5CE7", strokeWidth: "2" }),
      React.createElement("line", { key: 4, x1: "100", y1: "160", x2: "300", y2: "160", stroke: "#6C5CE7", strokeWidth: "2" }),
      React.createElement("line", { key: 5, x1: "100", y1: "190", x2: "300", y2: "190", stroke: "#6C5CE7", strokeWidth: "2" }),
      React.createElement("line", { key: 6, x1: "100", y1: "220", x2: "300", y2: "220", stroke: "#6C5CE7", strokeWidth: "2" }),
      React.createElement("rect", { key: 7, x: "150", y: "75", width: "50", height: "200", fill: "#6C5CE7", opacity: "0.5" }),
      React.createElement("rect", { key: 8, x: "210", y: "50", width: "50", height: "225", fill: "#6C5CE7", opacity: "0.8" }),
      React.createElement("rect", { key: 9, x: "270", y: "100", width: "50", height: "175", fill: "#6C5CE7", opacity: "0.3" })
    ]
  },
  
  // 2. ReplyRocket AI
  {
    id: "replyrocket",
    title: "ReplyRocket AI",
    category: "AI Agent",
    description: "Automated Twitter engagement with brand-matching AI responses that increased engagement by 5.3x.",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=360&h=360&q=80",
    icon: [
      React.createElement("circle", { key: 1, cx: "200", cy: "150", r: "120", fill: "#4B0082", opacity: "0.1" }),
      React.createElement("path", { 
        key: 2, 
        d: "M150,100 C120,130 120,170 150,200 L250,200 C280,170 280,130 250,100 Z", 
        fill: "#6C5CE7", 
        opacity: "0.2",
        stroke: "#6C5CE7",
        strokeWidth: "2"
      }),
      React.createElement("path", { 
        key: 3, 
        d: "M170,140 L230,140 L230,160 L170,160 Z", 
        fill: "#FFFFFF"
      }),
      React.createElement("circle", { key: 4, cx: "180", cy: "130", r: "10", fill: "#6C5CE7", opacity: "0.5" }),
      React.createElement("circle", { key: 5, cx: "220", cy: "130", r: "10", fill: "#6C5CE7", opacity: "0.5" }),
      React.createElement("path", { 
        key: 6, 
        d: "M180,170 C180,180 220,180 220,170", 
        stroke: "#6C5CE7", 
        strokeWidth: "2", 
        fill: "none" 
      })
    ]
  },
  
  // 3. Agent Ari
  {
    id: "agent-ari",
    title: "Agent Ari",
    category: "AI Career Assistant",
    description: "AI job seeking assistant that increases interview rates by 3.2x through personalized applications.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=360&h=360&q=80",
    icon: [
      React.createElement("rect", { key: 1, x: "80", y: "80", width: "240", height: "140", rx: "10", fill: "#4B0082", opacity: "0.1" }),
      React.createElement("path", { 
        key: 2, 
        d: "M120,110 L280,110 M120,140 L280,140 M120,170 L220,170", 
        stroke: "#6C5CE7", 
        strokeWidth: "3", 
        fill: "none" 
      }),
      React.createElement("circle", { key: 3, cx: "260", cy: "170", r: "15", fill: "#6C5CE7", opacity: "0.5" }),
      React.createElement("path", { 
        key: 4, 
        d: "M255,165 L265,175 M255,175 L265,165", 
        stroke: "#FFFFFF", 
        strokeWidth: "2" 
      }),
      React.createElement("rect", { key: 5, x: "100", y: "200", width: "200", height: "20", rx: "5", fill: "#6C5CE7", opacity: "0.2" })
    ]
  },
  
  // 4. Agent Lav
  {
    id: "agent-lav",
    title: "Agent Lav",
    category: "AI Social Media",
    description: "Cross-platform social media manager that increased engagement by 4.7x across 7 platforms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=360&h=360&q=80",
    icon: [
      React.createElement("circle", { key: 1, cx: "200", cy: "150", r: "100", fill: "#4B0082", opacity: "0.1" }),
      React.createElement("circle", { key: 2, cx: "150", cy: "150", r: "30", fill: "#6C5CE7", opacity: "0.3" }),
      React.createElement("circle", { key: 3, cx: "210", cy: "110", r: "25", fill: "#6C5CE7", opacity: "0.5" }),
      React.createElement("circle", { key: 4, cx: "250", cy: "170", r: "20", fill: "#6C5CE7", opacity: "0.7" }),
      React.createElement("path", { 
        key: 5, 
        d: "M150,150 L210,110 M210,110 L250,170 M250,170 L150,150", 
        stroke: "#FFFFFF", 
        strokeWidth: "2", 
        fill: "none" 
      })
    ]
  },
  
  // 5. Agent Malcom
  {
    id: "agent-malcom",
    title: "Agent Malcom",
    category: "AI Travel Guide",
    description: "Personalized city guide with 93% recommendation relevance for travel, dining, and activities.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=360&h=360&q=80",
    icon: [
      React.createElement("rect", { key: 1, x: "100", y: "70", width: "200", height: "160", rx: "15", fill: "#4B0082", opacity: "0.1" }),
      React.createElement("circle", { key: 2, cx: "200", cy: "125", r: "40", fill: "#6C5CE7", opacity: "0.3" }),
      React.createElement("path", { 
        key: 3, 
        d: "M200,85 L200,165 M160,125 L240,125", 
        stroke: "#FFFFFF", 
        strokeWidth: "3" 
      }),
      React.createElement("circle", { key: 4, cx: "160", cy: "190", r: "15", fill: "#6C5CE7", opacity: "0.5" }),
      React.createElement("circle", { key: 5, cx: "200", cy: "190", r: "15", fill: "#6C5CE7", opacity: "0.5" }),
      React.createElement("circle", { key: 6, cx: "240", cy: "190", r: "15", fill: "#6C5CE7", opacity: "0.5" })
    ]
  },
  
  // 6. Omnycomm
  {
    id: "omnycomm",
    title: "Omnycomm",
    category: "E-commerce Platform",
    description: "UAE-focused e-commerce platform that increased merchant conversions by 45%.",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=360&h=360&q=80",
    icon: [
      React.createElement("rect", { key: 1, x: "80", y: "80", width: "240", height: "140", rx: "10", fill: "#4B0082", opacity: "0.1" }),
      React.createElement("rect", { key: 2, x: "120", y: "110", width: "60", height: "80", rx: "5", fill: "#6C5CE7", opacity: "0.3" }),
      React.createElement("rect", { key: 3, x: "200", y: "110", width: "80", height: "50", rx: "5", fill: "#6C5CE7", opacity: "0.5" }),
      React.createElement("rect", { key: 4, x: "200", y: "170", width: "40", height: "20", rx: "5", fill: "#6C5CE7", opacity: "0.7" }),
      React.createElement("path", { 
        key: 5, 
        d: "M130,140 L170,140 M130,150 L170,150 M130,160 L150,160", 
        stroke: "#FFFFFF", 
        strokeWidth: "2" 
      }),
      React.createElement("path", { 
        key: 6, 
        d: "M210,130 L270,130 M210,140 L270,140 M210,150 L240,150", 
        stroke: "#FFFFFF", 
        strokeWidth: "2" 
      })
    ]
  },
  
  // 7. INAAM Loyalty
  {
    id: "inaam",
    title: "INAAM Loyalty",
    category: "Customer Loyalty",
    description: "Unified rewards platform that increased merchant retention by 27% across 10K+ businesses.",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=360&h=360&q=80",
    icon: [
      React.createElement("rect", { key: 1, x: "100", y: "100", width: "200", height: "100", rx: "50", fill: "#4B0082", opacity: "0.1" }),
      React.createElement("path", { 
        key: 2, 
        d: "M130,150 C130,125 270,125 270,150 C270,175 130,175 130,150 Z", 
        fill: "#6C5CE7", 
        opacity: "0.3",
        stroke: "#6C5CE7",
        strokeWidth: "2"
      }),
      React.createElement("circle", { key: 3, cx: "160", cy: "150", r: "15", fill: "#FFFFFF" }),
      React.createElement("circle", { key: 4, cx: "200", cy: "150", r: "15", fill: "#FFFFFF" }),
      React.createElement("circle", { key: 5, cx: "240", cy: "150", r: "15", fill: "#FFFFFF" }),
      React.createElement("path", { 
        key: 6, 
        d: "M155,150 L165,150 M195,150 L205,150 M235,150 L245,150", 
        stroke: "#6C5CE7", 
        strokeWidth: "2" 
      })
    ]
  },
  
  // 8. Nyuyu Style Guide
  {
    id: "nyuyu",
    title: "Nyuyu Style Guide",
    category: "Beauty & Fashion",
    description: "Digital lookbook that connected users with local beauty services with 85% booking conversion.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=360&h=360&q=80",
    icon: [
      React.createElement("circle", { key: 1, cx: "200", cy: "150", r: "100", fill: "#4B0082", opacity: "0.1" }),
      React.createElement("path", { 
        key: 2, 
        d: "M150,110 C150,90 250,90 250,110 L230,200 L170,200 Z", 
        fill: "#6C5CE7", 
        opacity: "0.2",
        stroke: "#6C5CE7",
        strokeWidth: "2"
      }),
      React.createElement("circle", { key: 3, cx: "180", cy: "130", r: "10", fill: "#FFFFFF" }),
      React.createElement("circle", { key: 4, cx: "220", cy: "130", r: "10", fill: "#FFFFFF" }),
      React.createElement("path", { 
        key: 5, 
        d: "M190,160 C190,170 210,170 210,160", 
        stroke: "#FFFFFF", 
        strokeWidth: "2", 
        fill: "none" 
      })
    ]
  },
  
  // 9. Verizon BlueJeans
  {
    id: "verizon-bluejeans",
    title: "Verizon BlueJeans",
    category: "Enterprise Communication",
    description: "Secure video platform with 99.99% uptime that increased meeting efficiency by 40%.",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=360&h=360&q=80",
    icon: [
      React.createElement("rect", { key: 1, x: "100", y: "100", width: "200", height: "120", rx: "10", fill: "#4B0082", opacity: "0.1" }),
      React.createElement("rect", { key: 2, x: "120", y: "130", width: "160", height: "60", rx: "5", fill: "#6C5CE7", opacity: "0.3" }),
      React.createElement("circle", { key: 3, cx: "150", cy: "160", r: "15", fill: "#FFFFFF" }),
      React.createElement("circle", { key: 4, cx: "200", cy: "160", r: "15", fill: "#FFFFFF" }),
      React.createElement("circle", { key: 5, cx: "250", cy: "160", r: "15", fill: "#FFFFFF" }),
      React.createElement("rect", { key: 6, x: "120", y: "200", width: "160", height: "15", rx: "5", fill: "#6C5CE7", opacity: "0.3" })
    ]
  },
  
  // 10. EsDee Sportswear
  {
    id: "esdee",
    title: "EsDee Sportswear",
    category: "E-commerce",
    description: "Immersive sportswear shopping experience that reduced returns by 65% with virtual try-on.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=360&h=360&q=80",
    icon: [
      React.createElement("rect", { key: 1, x: "120", y: "80", width: "160", height: "220", rx: "10", fill: "#4B0082", opacity: "0.1" }),
      React.createElement("rect", { key: 2, x: "140", y: "100", width: "120", height: "100", rx: "5", fill: "#6C5CE7", opacity: "0.3" }),
      React.createElement("path", { 
        key: 3, 
        d: "M140,220 L260,220 M140,240 L200,240", 
        stroke: "#6C5CE7", 
        strokeWidth: "3", 
        fill: "none" 
      }),
      React.createElement("path", { 
        key: 4, 
        d: "M140,150 L260,150 L260,100 L140,100 Z", 
        stroke: "#FFFFFF", 
        strokeWidth: "2", 
        fill: "none" 
      }),
      React.createElement("path", { 
        key: 5, 
        d: "M200,100 L200,150", 
        stroke: "#FFFFFF", 
        strokeWidth: "2" 
      })
    ]
  }
];
