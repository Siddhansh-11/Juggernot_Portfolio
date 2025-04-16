import {
  ImageIcon,
  ShieldCheck,
  Mic,
  BarChart3,
  MessageSquare,
  Zap,
} from "lucide-react";
import React from "react";

export const servicesData = [
  {
    title: "Accurate Image Classification",
    description:
      "Enhance support by precisely categorizing images for faster resolutions.",
    icon: React.createElement(ImageIcon, { className: "h-6 w-6 text-accent" }),
    features: [
      "Real-time recognition",
      "Custom training models",
      "99.8% accuracy rate",
    ],
  },
  {
    title: "Automated Quality Audits",
    description:
      "Ensure complete oversight by automating quality checks across all interactions.",
    icon: React.createElement(ShieldCheck, { className: "h-6 w-6 text-accent" }),
    features: [
      "Comprehensive SOP coverage",
      "Sentiment analysis",
      "Actionable feedback",
    ],
  },
  {
    title: "Voice AI Agents",
    description:
      "Build and deploy low-cost voice AI agents that talk and take actions like humans.",
    icon: React.createElement(Mic, { className: "h-6 w-6 text-accent" }),
    features: [
      "Low latency audio streaming",
      "Multilingual support",
      "Natural conversational flow",
    ],
  },
  {
    title: "AI Powered Analytics",
    description:
      "Identify issues, ask questions, and unlock valuable insights from your interactions.",
    icon: React.createElement(BarChart3, { className: "h-6 w-6 text-accent" }),
    features: [
      "Natural language querying",
      "Advanced visualization",
      "Trend detection",
    ],
  },
  {
    title: "Intelligent Conversations",
    description:
      "Seamlessly integrate data sources and SOPs to generate accurate responses and actions.",
    icon: React.createElement(MessageSquare, { className: "h-6 w-6 text-accent" }),
    features: [
      "Context-aware responses",
      "Knowledge base integration",
      "Effortless support automation",
    ],
  },
  {
    title: "Fluid Integrations",
    description:
      "Integrate seamlessly with tools like Freshdesk, Zoho, and more for maximum efficiency.",
    icon: React.createElement(Zap, { className: "h-6 w-6 text-accent" }),
    features: [
      "API-first architecture",
      "No-code connection tools",
      "Enterprise-ready security",
    ],
  },
];
