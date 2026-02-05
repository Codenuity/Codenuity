"use client";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";
import { Background } from "@/components/ui/Background";
import { motion } from "framer-motion";
import { Box, Zap, Smartphone, Globe, Lock, Brain, Check, Star } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Particles = dynamic(() => import("@/components/ui/ParticlesBackground"), {
  ssr: false,
  loading: () => null,
});

const products = [
  {
    icon: Brain,
    title: "AI Chatbot Platform",
    description:
      "Intelligent conversational AI powered by natural language processing. Automate customer support and engage visitors in real-time.",
    features: [
      "Multi-language support",
      "Custom training capabilities",
      "Integration with any platform",
      "Analytics & reporting",
    ],
    status: "Available",
    pricing: {
      starter: 99,
      professional: 299,
      enterprise: "Custom",
    },
  },
  {
    icon: Globe,
    title: "Web App Builder",
    description:
      "No-code platform to build, deploy, and scale web applications. Perfect for startups and enterprises.",
    features: [
      "Drag-and-drop interface",
      "Pre-built components",
      "One-click deployment",
      "Real-time collaboration",
    ],
    status: "Coming Soon",
    pricing: {
      starter: 149,
      professional: 399,
      enterprise: "Custom",
    },
  },
  {
    icon: Smartphone,
    title: "Mobile Development Kit",
    description:
      "Complete SDK for building native and cross-platform mobile applications with pre-built modules.",
    features: [
      "Native performance",
      "Cross-platform support",
      "Component library",
      "DevTools integration",
    ],
    status: "Available",
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: "Custom",
    },
  },
  {
    icon: Lock,
    title: "Security Suite",
    description:
      "Comprehensive security solution including vulnerability scanning, threat detection, and compliance monitoring.",
    features: [
      "Real-time threat detection",
      "Compliance automation",
      "Incident response",
      "Security analytics",
    ],
    status: "Available",
    pricing: {
      starter: 299,
      professional: 699,
      enterprise: "Custom",
    },
  },
  {
    icon: Zap,
    title: "Performance Dashboard",
    description:
      "Monitor and optimize your applications with real-time performance metrics and insights.",
    features: [
      "Real-time monitoring",
      "Performance optimization",
      "Alert system",
      "Custom dashboards",
    ],
    status: "Available",
    pricing: {
      starter: 79,
      professional: 199,
      enterprise: "Custom",
    },
  },
  {
    icon: Box,
    title: "Integration Hub",
    description:
      "Connect all your business tools seamlessly. Pre-built integrations for 500+ platforms.",
    features: [
      "500+ pre-built connectors",
      "Custom API development",
      "Workflow automation",
      "Data synchronization",
    ],
    status: "Coming Soon",
    pricing: {
      starter: 129,
      professional: 349,
      enterprise: "Custom",
    },
  },
];

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small teams and startups",
    monthlyPrice: 99,
    annualPrice: 990,
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "Email support",
      "Community access",
      "Standard integrations",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses",
    monthlyPrice: 299,
    annualPrice: 2990,
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Advanced integrations",
      "Custom workflows",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    monthlyPrice: null,
    annualPrice: null,
    price: "Custom",
    features: [
      "Dedicated account manager",
      "Custom development",
      "White-label options",
      "24/7 support",
      "SLA guarantee",
      "On-premise deployment",
    ],
    popular: false,
  },
];

const customerReviews = [
  {
    name: "Jennifer Lee",
    company: "TechStart Inc.",
    rating: 5,
    review:
      "The AI Chatbot Platform has reduced our support costs by 40% while improving customer satisfaction. Highly recommended!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer",
  },
  {
    name: "Robert Chen",
    company: "Digital Solutions Co.",
    rating: 5,
    review:
      "The Performance Dashboard gives us insights we never had before. It's become an essential tool for our operations.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
  },
  {
    name: "Sarah Anderson",
    company: "Innovation Labs",
    rating: 5,
    review:
      "Outstanding customer support and continuous product improvements. This is exactly what we needed for scaling.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
];

export default function ProductsPage() {
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
                Our Products
              </h1>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                Innovative solutions designed to solve real-world challenges and
                accelerate your business growth.
              </p>
            </motion.div>
          </section>
        </Background>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              const isAvailable = product.status === "Available";
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-2xl border border-neutral-900 bg-gradient-to-br from-transparent via-transparent to-purple-900 p-8 backdrop-blur-lg backdrop-filter hover:border-purple-500 transition-all duration-300 group"
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isAvailable
                          ? "bg-green-500/20 text-green-300"
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                      <Icon className="w-7 h-7 text-purple-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {product.title}
                  </h3>
                  <p className="text-neutral-400 mb-6">{product.description}</p>

                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-neutral-300"
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                      isAvailable
                        ? "button-animation border border-neutral-800 text-white"
                        : "bg-neutral-800 text-neutral-400 cursor-not-allowed"
                    }`}
                    disabled={!isAvailable}
                  >
                    {isAvailable ? "Learn More" : "Coming Soon"}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </section>
        {/* Pricing Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always flexible to scale as you grow.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden border ${
                  plan.popular
                    ? "button-animation border-neutral-800 transform scale-105"
                    : "border-neutral-900 bg-gradient-to-br from-transparent via-transparent to-purple-900 backdrop-blur-lg backdrop-filter"
                }`}
              >
                <div className="p-8">
                  {plan.popular && (
                    <div className="mb-4 inline-block px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-400">
                    {plan.description}
                  </p>
                  <div className="my-8">
                    {plan.monthlyPrice ? (
                      <>
                        <div className="text-4xl font-bold text-white mb-2">
                          ${plan.monthlyPrice}
                          <span className="text-lg text-neutral-400">/month</span>
                        </div>
                        <p className="text-neutral-400">
                          or ${plan.annualPrice} annually
                        </p>
                      </>
                    ) : (
                      <div className="text-4xl font-bold text-white">
                        {plan.price}
                      </div>
                    )}
                  </div>
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors mb-8 ${
                      plan.popular
                        ? "bg-white text-black hover:bg-neutral-200"
                        : "button-animation border border-neutral-800 text-white"
                    }`}
                  >
                    Get Started
                  </button>
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-white"
                      >
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Loved by Our Customers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {customerReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{review.review}"
                </p>
                <div className="flex items-center gap-4 border-t border-slate-700 pt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>      </main>
      <Footer />
    </>
  );
}
