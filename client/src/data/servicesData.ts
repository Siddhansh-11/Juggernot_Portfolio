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
    icon: React.createElement(ImageIcon, { className: "h-5 w-5 text-accent" }),
    features: [
      "Real-time recognition",
      "Custom training models",
      "99.8% accuracy rate",
    ],
    demoContent: "Image recognition system showing coffee image with 96% confidence score and related classification metrics."
  },
  {
    title: "Automated Quality Audits",
    description:
      "Ensure complete oversight by automating quality checks across all interactions.",
    icon: React.createElement(ShieldCheck, { className: "h-5 w-5 text-accent" }),
    features: [
      "Comprehensive SOP coverage",
      "Sentiment analysis",
      "Actionable feedback",
    ],
    demoContent: "Quality assurance checklist displaying successful greeting and action items with a failed customer sentiment check."
  },
  {
    title: "Voice AI Agents",
    description:
      "Build and deploy low-cost voice AI agents that talk and take actions like humans.",
    icon: React.createElement(Mic, { className: "h-5 w-5 text-accent" }),
    features: [
      "Low latency audio streaming",
      "Multilingual support",
      "Natural conversational flow",
    ],
    demoContent: "Voice assistant interface showing audio latency metrics and language support indicators."
  },
  {
    title: "AI Powered Analytics",
    description:
      "Identify issues, ask questions, and unlock valuable insights from your interactions.",
    icon: React.createElement(BarChart3, { className: "h-5 w-5 text-accent" }),
    features: [
      "Natural language querying",
      "Advanced visualization",
      "Trend detection",
    ],
    demoContent: "Analytics interface with natural language query: 'Which queries are best suited for automated response?'"
  },
  {
    title: "Intelligent Conversations",
    description:
      "Seamlessly integrate data sources and SOPs to generate accurate responses and actions.",
    icon: React.createElement(MessageSquare, { className: "h-5 w-5 text-accent" }),
    features: [
      "Context-aware responses",
      "Knowledge base integration",
      "Effortless support automation",
    ],
    demoContent: "Chat interface showing a multi-turn conversation with a customer about a spilled coffee incident."
  },
  {
    title: "Fluid Integrations",
    description:
      "Integrate seamlessly with tools like Freshdesk, Zoho, and more for maximum efficiency.",
    icon: React.createElement(Zap, { className: "h-5 w-5 text-accent" }),
    features: [
      "API-first architecture",
      "No-code connection tools",
      "Enterprise-ready security",
    ],
    demoContent: "Integration hub displaying connections to multiple platforms (Freshdesk, Salesforce, WhatsApp, Zoom) around a central 'nugget' node."
  },
];
