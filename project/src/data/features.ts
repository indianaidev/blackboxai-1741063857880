import { Code, Terminal, Zap, BarChart, Cloud, Shield, Users, Settings, Cpu, LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  IconComponent: LucideIcon;
}

// Feature Data
export const features: Feature[] = [
  {
    title: "Intelligent Code Analysis",
    description: "Our AI-powered code analysis identifies bugs, security vulnerabilities, and performance issues before they reach production.",
    IconComponent: Code
  },
  {
    title: "Automated Testing",
    description: "Create, run, and maintain comprehensive test suites with minimal effort using our advanced testing framework.",
    IconComponent: Terminal
  },
  {
    title: "CI/CD Integration",
    description: "Seamlessly integrate with your existing CI/CD pipelines to automate builds, tests, and deployments.",
    IconComponent: Zap
  },
  {
    title: "Performance Optimization",
    description: "Identify bottlenecks and optimize your application's performance with our comprehensive profiling tools.",
    IconComponent: BarChart
  },
  {
    title: "Cloud Management",
    description: "Monitor, optimize, and control your cloud resources across all major providers from a single dashboard.",
    IconComponent: Cloud
  },
  {
    title: "Security Scanning",
    description: "Protect your applications with continuous security scanning for vulnerabilities in your code and dependencies.",
    IconComponent: Shield
  },
  {
    title: "Team Collaboration",
    description: "Enhance team productivity with built-in code review, knowledge sharing, and collaboration features.",
    IconComponent: Users
  },
  {
    title: "Customizable Workflows",
    description: "Tailor our tools to fit your specific development process with extensive customization options.",
    IconComponent: Settings
  },
  {
    title: "Cross-Platform Support",
    description: "Develop on any platform with tools that work seamlessly across Windows, macOS, and Linux environments.",
    IconComponent: Cpu
  }
];
