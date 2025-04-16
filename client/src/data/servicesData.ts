import {
  ImageIcon,
  Mic,
  BarChart3,
  MessageSquare,
  Zap,
  Brain,
  Workflow,
  Globe,
  Database,
  Video,
} from "lucide-react";
import React from "react";

export const servicesData = [
  {
    title: "Workflow Orchestration",
    description:
      "Design and implement complex automation workflows with AI agents that coordinate multiple tasks seamlessly.",
    icon: React.createElement(Workflow, { className: "h-5 w-5 text-accent" }),
    features: [
      "Multi-step process automation",
      "Conditional logic branching",
      "Error handling and recovery",
    ],
    demoContent: "Workflow diagram showing a customer onboarding process with automated document verification and approval routing."
  },
  {
    title: "Fluid Integrations (MCPs)",
    description:
      "Connect AI systems to multiple platforms and services with multi-channel processors for unified experiences.",
    icon: React.createElement(Zap, { className: "h-5 w-5 text-accent" }),
    features: [
      "API-first architecture",
      "Cross-platform compatibility",
      "Real-time data synchronization",
    ],
    demoContent: "Integration hub displaying connections to multiple platforms (Freshdesk, Salesforce, WhatsApp, Zoom) around a central 'nugget' node."
  },
  {
    title: "Browser Use",
    description:
      "Enable AI agents to navigate websites, fill forms, and extract information as if they were human users.",
    icon: React.createElement(Globe, { className: "h-5 w-5 text-accent" }),
    features: [
      "Interactive web navigation",
      "Form filling automation",
      "Content extraction",
    ],
    demoContent: "Browser automation interface showing an AI agent navigating through an e-commerce checkout process."
  },
  {
    title: "Voice AI Agents",
    description:
      "Create natural-sounding voice assistants that understand context and communicate like humans.",
    icon: React.createElement(Mic, { className: "h-5 w-5 text-accent" }),
    features: [
      "Low latency audio processing",
      "Natural conversational flow",
      "Emotion recognition",
    ],
    demoContent: "Voice assistant interface showing audio latency metrics and language support indicators."
  },
  {
    title: "Image Classification",
    description:
      "Implement powerful computer vision to analyze and categorize images with high accuracy.",
    icon: React.createElement(ImageIcon, { className: "h-5 w-5 text-accent" }),
    features: [
      "Deep learning algorithms",
      "Custom model training",
      "Real-time processing",
    ],
    demoContent: "Image recognition system showing product images with confidence scores and classification results."
  },
  {
    title: "Video Insights",
    description:
      "Extract valuable information from video content through advanced AI analysis and processing.",
    icon: React.createElement(Video, { className: "h-5 w-5 text-accent" }),
    features: [
      "Scene detection",
      "Object tracking",
      "Content summarization",
    ],
    demoContent: "Video analysis dashboard showing object detection, scene classifications, and content summaries."
  },
  {
    title: "AI Powered Analytics",
    description:
      "Identify issues, ask questions, and unlock valuable insights from your data with intelligent analysis.",
    icon: React.createElement(BarChart3, { className: "h-5 w-5 text-accent" }),
    features: [
      "Natural language querying",
      "Predictive modeling",
      "Anomaly detection",
    ],
    demoContent: "Analytics dashboard with natural language query capabilities and automated insight generation."
  },
  {
    title: "Intelligent Conversations",
    description:
      "Develop chatbots and conversational agents that understand context and provide helpful responses.",
    icon: React.createElement(MessageSquare, { className: "h-5 w-5 text-accent" }),
    features: [
      "Context-aware responses",
      "Multi-turn conversations",
      "Intent recognition",
    ],
    demoContent: "Chat interface showing a complex conversation with an AI agent solving a customer's technical problem."
  },
  {
    title: "Web Crawling",
    description:
      "Build intelligent web scrapers that can navigate websites, extract structured data, and process information.",
    icon: React.createElement(Globe, { className: "h-5 w-5 text-accent" }),
    features: [
      "Adaptive navigation",
      "Structured data extraction",
      "Rate limiting compliance",
    ],
    demoContent: "Web crawler interface showing site mapping, data extraction progress, and structured results."
  },
  {
    title: "Lasting Memory",
    description:
      "Implement persistent knowledge storage for AI systems to maintain context and learn from past interactions.",
    icon: React.createElement(Database, { className: "h-5 w-5 text-accent" }),
    features: [
      "Long-term information retention",
      "Contextual recall",
      "Experience-based learning",
    ],
    demoContent: "Memory management interface showing conversation history, learned patterns, and knowledge retrieval capabilities."
  }
];
