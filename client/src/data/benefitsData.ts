import {
  TrendingUp,
  ShieldCheck,
  Clock,
} from "lucide-react";
import React from "react";

export const benefitsData = [
  {
    title: "Queries resolved by AI agents",
    percentage: "80%",
    description:
      "Increase bot resolution rates, minimizing customer frustration and repeat interactions.",
    icon: React.createElement(TrendingUp, { className: "h-6 w-6 text-accent" }),
  },
  {
    title: "Increase in compliance",
    percentage: "25%",
    description:
      "Improve compliance with agent co-pilot, ensuring agents follow best practices.",
    icon: React.createElement(ShieldCheck, { className: "h-6 w-6 text-accent" }),
  },
  {
    title: "Reduction in resolution time",
    percentage: "20%",
    description:
      "Enhance team efficiency allowing for greater focus on high-value or complex queries.",
    icon: React.createElement(Clock, { className: "h-6 w-6 text-accent" }),
  },
];
