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
  
  // 1. ReplyRocket AI
  {
    id: "replyrocket",
    title: "ReplyRocket AI",
    category: "AI Agent",
    description: "Automated Twitter engagement with brand-matching AI responses that increased engagement by 5.3x.",
    image: "/images/replyrocket.webp",
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
  
  // 2. Agent Ari
  {
    id: "agent-ari",
    title: "Agent Ari",
    category: "AI Career Assistant",
    description: "AI job seeking assistant that increases interview rates by 3.2x through personalized applications.",
    image: "/images/agent-ari.webp",
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
  
  // 3. Agent Lav
  {
    id: "agent-lav",
    title: "Agent Lav",
    category: "AI Social Media",
    description: "Cross-platform social media manager that increased engagement by 4.7x across 7 platforms.",
    image: "/images/agent-lav.webp",
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
  
  // 4. Agent Malcom
  {
    id: "agent-malcom",
    title: "Agent Malcom",
    category: "AI Travel Guide",
    description: "Personalized city guide with 93% recommendation relevance for travel, dining, and activities.",
    image: "/images/agent-malcom.webp",
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
  
  // 5. Omnycomm
  {
    id: "omnycomm",
    title: "Omnycomm",
    category: "E-commerce Platform",
    description: "UAE-focused e-commerce platform that increased merchant conversions by 45%.",
    image: "/images/omnycomm.webp",
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
  
  // 6. INAAM Loyalty
  {
    id: "inaam",
    title: "INAAM Loyalty",
    category: "Customer Loyalty",
    description: "Unified rewards platform that increased merchant retention by 27% across 10K+ businesses.",
    image: "/images/inaam.webp",
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
  
  // 7. Nyuyu Style Guide
  {
    id: "nyuyu",
    title: "Nyuyu Style Guide",
    category: "Beauty & Fashion",
    description: "Digital lookbook that connected users with local beauty services with 85% booking conversion.",
    image: "/images/nyuyu.webp",
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
  
  // 8. Verizon BlueJeans
  {
    id: "verizon-bluejeans",
    title: "Verizon BlueJeans",
    category: "Enterprise Communication",
    description: "Secure video platform with 99.99% uptime that increased meeting efficiency by 40%.",
    image: "/images/verizon-bluejeans.webp",
    icon: [
      React.createElement("rect", { key: 1, x: "100", y: "100", width: "200", height: "120", rx: "10", fill: "#4B0082", opacity: "0.1" }),
      React.createElement("rect", { key: 2, x: "120", y: "130", width: "160", height: "60", rx: "5", fill: "#6C5CE7", opacity: "0.3" }),
      React.createElement("circle", { key: 3, cx: "150", cy: "160", r: "15", fill: "#FFFFFF" }),
      React.createElement("circle", { key: 4, cx: "200", cy: "160", r: "15", fill: "#FFFFFF" }),
      React.createElement("circle", { key: 5, cx: "250", cy: "160", r: "15", fill: "#FFFFFF" }),
      React.createElement("rect", { key: 6, x: "120", y: "200", width: "160", height: "15", rx: "5", fill: "#6C5CE7", opacity: "0.3" })
    ]
  },
  
  // 9. EsDee Sportswear
  {
    id: "esdee",
    title: "EsDee Sportswear",
    category: "E-commerce",
    description: "Immersive sportswear shopping experience that reduced returns by 65% with virtual try-on.",
    image: "/images/esdee.webp",
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
