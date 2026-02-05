"use client";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";
import { Background } from "@/components/ui/Background";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Zap,
  Shield,
  Palette,
  Cpu,
  CheckCircle,
  Award,
  Zap as ZapIcon,
} from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Particles = dynamic(() => import("@/components/ui/ParticlesBackground"), {
  ssr: false,
  loading: () => null,
});

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Build scalable and responsive web applications using modern frameworks like React, Next.js, and Vue.js. We create user-centric solutions that drive engagement and conversions.",
    features: [
      "Custom web applications",
      "E-commerce platforms",
      "SaaS solutions",
      "Progressive web apps",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Develop high-performance mobile apps for iOS and Android platforms. Our native and cross-platform solutions ensure optimal user experience across devices.",
    features: [
      "Native iOS apps",
      "Native Android apps",
      "React Native development",
      "Flutter development",
    ],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description:
      "Leverage artificial intelligence to automate processes and gain insights. From chatbots to predictive analytics, we implement intelligent solutions tailored to your needs.",
    features: [
      "Custom AI models",
      "Natural language processing",
      "Computer vision",
      "Predictive analytics",
    ],
  },
  {
    icon: Zap,
    title: "Blockchain Development",
    description:
      "Build decentralized applications and smart contracts on blockchain platforms. We offer complete web3 solutions for the next generation of internet.",
    features: [
      "Smart contract development",
      "DApp creation",
      "NFT platforms",
      "DeFi solutions",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with comprehensive security solutions. From penetration testing to vulnerability assessments, we ensure your systems are secure.",
    features: [
      "Penetration testing",
      "Security audits",
      "Vulnerability assessment",
      "Security consulting",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Create beautiful and intuitive user interfaces that delight users. Our design-first approach ensures every product looks great and functions flawlessly.",
    features: [
      "User interface design",
      "User experience design",
      "Wireframing & prototyping",
      "Brand identity design",
    ],
  },
];

const developmentProcess = [
  {
    step: 1,
    title: "Discovery & Planning",
    description: "We understand your business goals, requirements, and target audience to create a comprehensive project plan.",
  },
  {
    step: 2,
    title: "Design & Prototyping",
    description: "Create beautiful wireframes and prototypes to visualize the solution before development begins.",
  },
  {
    step: 3,
    title: "Development & Testing",
    description: "Build your solution using best practices and rigorous testing to ensure quality and performance.",
  },
  {
    step: 4,
    title: "Deployment & Launch",
    description: "Seamlessly deploy your application to production with comprehensive support and monitoring.",
  },
  {
    step: 5,
    title: "Maintenance & Support",
    description: "Provide ongoing support, updates, and optimizations to keep your application running smoothly.",
  },
];

const technologies = [
  "React", "Next.js", "Vue.js", "TypeScript", "Node.js", "Python",
  "AWS", "Google Cloud", "Docker", "Kubernetes", "MongoDB", "PostgreSQL",
  "TensorFlow", "PyTorch", "Solidity", "Web3.js", "Figma", "Tailwind CSS"
];

const metrics = [
  { label: "99.9%", title: "Uptime Guarantee", description: "Enterprise-grade reliability" },
  { label: "24/7", title: "Support Available", description: "Round-the-clock assistance" },
  { label: "2x", title: "Faster Delivery", description: "Compared to industry average" },
  { label: "98%", title: "Client Satisfaction", description: "Based on client surveys" },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="h-fit overflow-x-hidden bg-black text-neutral-50 pt-32 lg:pt-40 relative">
        <Suspense fallback={null}>
          <Particles />
        </Suspense>
        <Background ClassName="">
          {/* Header */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                Comprehensive technology solutions tailored to transform your
                business and drive growth in the digital age.
            </p>
            </motion.div>
          </section>
        </Background>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-neutral-900 bg-gradient-to-br from-transparent via-transparent to-purple-900 p-8 backdrop-blur-lg backdrop-filter hover:border-purple-500 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                      <Icon className="w-7 h-7 text-purple-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 mb-6">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-neutral-300"
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Development Process */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {developmentProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 h-full">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                {index < developmentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-blue-600 to-transparent transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-12 border border-slate-700"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Technologies We Use
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/50 font-semibold"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Success Metrics */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Choose Codenuity?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {metric.label}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {metric.title}
                </h3>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="button-animation rounded-xl p-12 text-center border border-neutral-800"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-neutral-200 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our services can help you achieve
              your business goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-neutral-200 transition-colors"
            >
              Get Started
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
