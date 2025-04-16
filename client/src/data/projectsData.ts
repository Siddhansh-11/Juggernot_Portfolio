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
  {
    id: "kapitalbank",
    title: "KapitalBank",
    category: "Financial",
    description: "Built a securities product with AI-powered analysis to grow 18x in 2 years.",
    // This is a placeholder for demonstration - replace with actual image path
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
  {
    id: "quickbite",
    title: "QuickBite",
    category: "Food Tech",
    description: "Enabled multi-brand product delivery 2.5x faster with AI routing and logistics.",
    icon: [
      React.createElement("circle", { key: 1, cx: "200", cy: "150", r: "120", fill: "#4B0082", opacity: "0.1" }),
      React.createElement("path", { 
        key: 2,
        d: "M140,130 C140,80 260,80 260,130 L240,220 L160,220 L140,130 Z",
        fill: "#6C5CE7",
        opacity: "0.2",
        stroke: "#6C5CE7",
        strokeWidth: "2"
      }),
      React.createElement("circle", { key: 3, cx: "160", cy: "110", r: "15", fill: "#6C5CE7", opacity: "0.5" }),
      React.createElement("circle", { key: 4, cx: "240", cy: "110", r: "15", fill: "#6C5CE7", opacity: "0.5" }),
      React.createElement("path", {
        key: 5,
        d: "M170,180 C190,200 210,200 230,180",
        stroke: "#FFFFFF",
        strokeWidth: "3",
        fill: "none"
      })
    ]
  },
  {
    id: "ridetech",
    title: "RideTech",
    category: "Mobility",
    description:
      "Retention improved 40% with AI-powered app personalization and route optimization.",
    icon: [
      React.createElement("rect", { key: 1, x: "80", y: "60", width: "240", height: "180", rx: "20", fill: "#4B0082", opacity: "0.1" }),
      React.createElement("circle", { key: 2, cx: "200", cy: "150", r: "70", fill: "#6C5CE7", opacity: "0.2", stroke: "#6C5CE7", strokeWidth: "2" }),
      React.createElement("path", {
        key: 3,
        d: "M160,130 L240,130 L240,170 L160,170 Z",
        fill: "#6C5CE7",
        opacity: "0.3",
        stroke: "#6C5CE7",
        strokeWidth: "2"
      }),
      React.createElement("circle", { key: 4, cx: "160", cy: "150", r: "10", fill: "#FFFFFF" }),
      React.createElement("circle", { key: 5, cx: "240", cy: "150", r: "10", fill: "#FFFFFF" }),
      React.createElement("path", {
        key: 6,
        d: "M140,190 C140,220 260,220 260,190",
        stroke: "#6C5CE7",
        strokeWidth: "2",
        fill: "none"
      })
    ]
  },
  {
    id: "globalcorp",
    title: "GlobalCorp",
    category: "Enterprise",
    description:
      "Reduced support costs by 60% with AI-driven customer service automation.",
    icon: [
      React.createElement("rect", { key: 1, x: "100", y: "80", width: "200", height: "140", rx: "10", fill: "#4B0082", opacity: "0.1" }),
      React.createElement("circle", { key: 2, cx: "150", cy: "120", r: "20", fill: "#6C5CE7", opacity: "0.3" }),
      React.createElement("circle", { key: 3, cx: "200", cy: "120", r: "20", fill: "#6C5CE7", opacity: "0.5" }),
      React.createElement("circle", { key: 4, cx: "250", cy: "120", r: "20", fill: "#6C5CE7", opacity: "0.7" }),
      React.createElement("rect", { key: 5, x: "120", y: "160", width: "160", height: "20", rx: "5", fill: "#6C5CE7", opacity: "0.2" }),
      React.createElement("rect", { key: 6, x: "120", y: "190", width: "100", height: "10", rx: "5", fill: "#6C5CE7", opacity: "0.2" })
    ]
  },
];
