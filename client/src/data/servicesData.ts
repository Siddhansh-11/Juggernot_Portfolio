import {
  ImageIcon,
  ShieldCheck,
  Mic,
  BarChart3,
  MessageSquare,
  Zap,
} from "lucide-react";
import React from "react";

import { 
  ImageIcon, 
  ShieldCheck, 
  Mic, 
  BarChartBig, 
  Workflow, 
  Globe, 
  Speaker, 
  Video, 
  MessagesSquare, 
  Brain,
  Database
} from "lucide-react";

export const servicesData = [
  {
    title: "Workflow Orchestration",
    description:
      "Create complex, multi-step AI workflows that coordinate between different systems and services seamlessly.",
    icon: React.createElement(Workflow, { className: "h-5 w-5 text-accent" }),
    features: [
      "Parallel processing",
      "Error handling",
      "Conditional branching",
    ],
    demoContent: "Workflow diagram showing a multi-step process with conditional paths and error recovery mechanisms."
  },
  {
    title: "Fluid Integrations (MCPs)",
    description:
      "Connect AI agents with multiple providers and platforms through standardized integration protocols.",
    icon: React.createElement(Globe, { className: "h-5 w-5 text-accent" }),
    features: [
      "Cross-platform compatibility",
      "API standardization",
      "Real-time data flow",
    ],
    demoContent: "Integration map showing multiple services connected through a central hub with bidirectional data flows."
  },
  {
    title: "Browser Automation",
    description:
      "Empower AI agents to navigate and interact with web interfaces just like human users would.",
    icon: React.createElement(Globe, { className: "h-5 w-5 text-accent" }),
    features: [
      "Headless browsing",
      "Visual recognition",
      "Form interaction",
    ],
    demoContent: "Browser automation sequence showing an agent filling forms and extracting data from a website."
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
    title: "Image Classification",
    description:
      "Enhance systems with precise visual recognition to categorize images for faster processing.",
    icon: React.createElement(ImageIcon, { className: "h-5 w-5 text-accent" }),
    features: [
      "Real-time recognition",
      "Custom training models",
      "High accuracy rate",
    ],
    demoContent: "Image recognition system showing classification results with confidence scores."
  },
  {
    title: "Video Insights",
    description:
      "Extract meaningful data and insights from video content through advanced AI analysis.",
    icon: React.createElement(Video, { className: "h-5 w-5 text-accent" }),
    features: [
      "Scene recognition",
      "Content summarization",
      "Object tracking",
    ],
    demoContent: "Video analysis dashboard showing temporal insights and content categorization."
  },
  {
    title: "AI Powered Analytics",
    description:
      "Transform raw data into actionable insights with predictive and descriptive analytics.",
    icon: React.createElement(BarChartBig, { className: "h-5 w-5 text-accent" }),
    features: [
      "Trend prediction",
      "Anomaly detection",
      "Visual dashboards",
    ],
    demoContent: "Analytics dashboard showing predictive trends and anomaly highlights in business metrics."
  },
  {
    title: "Intelligent Conversations",
    description:
      "Create natural, context-aware conversation systems that understand user intent and maintain context.",
    icon: React.createElement(MessagesSquare, { className: "h-5 w-5 text-accent" }),
    features: [
      "Context retention",
      "Intent recognition",
      "Personalized responses",
    ],
    demoContent: "Conversation flow showing contextual understanding and appropriate response generation."
  },
  {
    title: "Web Crawling",
    description:
      "Systematically browse and extract relevant information from the web to keep systems up-to-date.",
    icon: React.createElement(Globe, { className: "h-5 w-5 text-accent" }),
    features: [
      "Targeted extraction",
      "Scheduled updates",
      "Structured output",
    ],
    demoContent: "Web crawler visualization showing sites being analyzed and data being structured."
  },
  {
    title: "Lasting Memory",
    description:
      "Implement sophisticated memory systems that allow AI agents to recall past interactions and learn over time.",
    icon: React.createElement(Brain, { className: "h-5 w-5 text-accent" }),
    features: [
      "Long-term storage",
      "Associative recall",
      "Experience-based learning",
    ],
    demoContent: "Memory system visualization showing contextual associations and temporal relationships."
  }
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
