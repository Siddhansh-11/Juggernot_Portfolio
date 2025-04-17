import {
  ImageIcon,
  Mic,
  BarChart3,
  MessageSquare,
  Zap,
  Workflow,
  Globe,
  Database,
  Video,
} from "lucide-react";
import React from "react";

export const servicesData = [
  {
    title: "Conversational Chatbots",
    description:
      "Build smart bots that talk, understand intent, and guide users through multi-step conversations.",
    icon: React.createElement(MessageSquare, {
      className: "h-5 w-5 text-accent",
    }),
    features: [
      "Smart intent recognition",
      "Guided multi-step interactions",
      "Contextual understanding",
    ],
    demoContent:
      "Chatbot interface demonstrating a multi-step conversation with intent recognition and guided interactions.",
  },
  {
    title: "AI Analytics",
    description:
      "Ask questions in plain language and let AI find patterns, predict trends, or flag issues in your data.",
    icon: React.createElement(BarChart3, { className: "h-5 w-5 text-accent" }),
    features: [
      "Plain language querying",
      "Pattern recognition",
      "Trend prediction",
    ],
    demoContent:
      "Analytics platform displaying trends, patterns, and anomaly detection generated from natural language queries.",
  },
  {
    title: "Voice AI Agents",
    description:
      "Talk to your systems naturally. These voice bots understand context and respond like humans.",
    icon: React.createElement(Mic, { className: "h-5 w-5 text-accent" }),
    features: [
      "Natural context-aware responses",
      "Human-like conversational flow",
      "Contextual understanding",
    ],
    demoContent:
      "Voice interaction interface showing metrics and human-like understanding capabilities.",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate complex tasks where AI agents handle multi-step processes — no manual work needed.",
    icon: React.createElement(Workflow, { className: "h-5 w-5 text-accent" }),
    features: [
      "End-to-end process automation",
      "Conditional logic operations",
      "Error management",
    ],
    demoContent:
      "Automation interface illustrating a fully automated multi-step business process.",
  },
  {
    title: "Smart Integrations",
    description:
      "Connect AI with tools like CRMs, helpdesks, and messaging platforms for smooth, real-time sync.",
    icon: React.createElement(Zap, { className: "h-5 w-5 text-accent" }),
    features: [
      "Real-time integration",
      "Cross-system synchronization",
      "Unified platforms",
    ],
    demoContent:
      "Integration display showing dynamic connection with various business platforms.",
  },
  {
    title: "AI Memory",
    description:
      "Give your agents memory so they remember past interactions and learn over time.",
    icon: React.createElement(Database, { className: "h-5 w-5 text-accent" }),
    features: [
      "Persistent knowledge storage",
      "Interaction recall",
      "Progressive learning",
    ],
    demoContent:
      "Memory dashboard illustrating past interaction retrieval and continuous learning progress.",
  },
  {
    title: "Browser Use",
    description:
      "AI agents can browse websites, fill forms, and gather information — just like a human user.",
    icon: React.createElement(Globe, { className: "h-5 w-5 text-accent" }),
    features: ["Autonomous browsing", "Form automation", "Data gathering"],
    demoContent:
      "Navigation system showing automated browsing and form filling in a simulated retail checkout scenario.",
  },
  {
    title: "Web Scraping Agents",
    description:
      "Use AI to extract data from websites intelligently — adapting to changes in layout or structure.",
    icon: React.createElement(Globe, { className: "h-5 w-5 text-accent" }),
    features: [
      "Intelligent data extraction",
      "Layout adaptation",
      "Structured information harvesting",
    ],
    demoContent:
      "Scraping tool interface showing dynamic content extraction and structure adaptation to web changes.",
  },
  {
    title: "Image Understanding",
    description:
      "Let AI look at images and instantly recognize what’s inside — for support, tagging, or audits.",
    icon: React.createElement(ImageIcon, { className: "h-5 w-5 text-accent" }),
    features: ["Instant image recognition", "Content tagging", "Audit support"],
    demoContent:
      "Image analysis screen presenting automatic tagging and recognition results for visual content.",
  },
  {
    title: "Video Intelligence",
    description:
      "Pull useful insights from video: detect scenes, track objects, or summarize content automatically.",
    icon: React.createElement(Video, { className: "h-5 w-5 text-accent" }),
    features: ["Scene analysis", "Object tracking", "Automated summarization"],
    demoContent:
      "Video processing dashboard showing scene and object tracking with automated summarization insights.",
  },
];
