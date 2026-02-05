"use client";

import BlurCircle from "@/components/common/BlurCircle";
import ContactCard from "@/components/contact/Card";
import ContactSection from "@/components/contact/ContactSection";
import ContactHero from "@/components/contact/hero";
import Footer from "@/components/footer/Footer";
import MobileNavbar from "@/components/navbar/MobileNavbar";
import Navbar from "@/components/navbar/navbar";
import { Background } from "@/components/ui/Background";
import { contact } from "@/settings/contact";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Particles = dynamic(() => import("@/components/ui/ParticlesBackground"), {
  ssr: false,
  loading: () => null,
});

const officeLocations = [
  {
    city: "San Francisco",
    country: "USA",
    address: "123 Tech Street, San Francisco, CA 94102",
    phone: "+1 (415) 555-0100",
    email: "sf@codenuity.com",
    timezone: "PST (UTC-8)",
  },
  {
    city: "London",
    country: "UK",
    address: "456 Innovation Lane, London, EC1A 1BB",
    phone: "+44 (20) 7946 0958",
    email: "london@codenuity.com",
    timezone: "GMT (UTC+0)",
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "789 Digital Hub, Singapore 018956",
    phone: "+65 6637 0002",
    email: "singapore@codenuity.com",
    timezone: "SGT (UTC+8)",
  },
  {
    city: "Toronto",
    country: "Canada",
    address: "321 Tech Tower, Toronto, ON M5V 3A8",
    phone: "+1 (416) 555-0150",
    email: "toronto@codenuity.com",
    timezone: "EST (UTC-5)",
  },
];

const contactChannels = [
  {
    icon: Mail,
    title: "Email",
    description: "We respond within 24 hours",
    contact: "hello@codenuity.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Mon-Fri, 9AM-6PM EST",
    contact: "+1 (415) 555-0100",
  },
  {
    icon: Globe,
    title: "Live Chat",
    description: "Available during business hours",
    contact: "Start Chat",
  },
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity and scope. Most projects range from 2-6 months. We provide detailed timelines after our initial consultation.",
  },
  {
    question: "Do you offer ongoing support after project delivery?",
    answer:
      "Yes, we offer comprehensive maintenance and support plans. We ensure your solution continues to perform optimally with regular updates and enhancements.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern technologies including React, Node.js, Python, mobile development, AI/ML, blockchain, and cloud platforms like AWS and Google Cloud.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We maintain regular communication through weekly meetings, detailed documentation, and dedicated Slack channels. You'll always know the status of your project.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing models including fixed-price projects, time & materials, and retainer agreements. We customize pricing based on your specific needs.",
  },
  {
    question: "Can you work with existing teams?",
    answer:
      "Absolutely! We frequently augment existing teams and integrate seamlessly with your internal developers and designers.",
  },
];

const Contact = () => {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);
  return (
    <div className="h-full w-screen max-w-[100vw] overflow-x-hidden relative">
      <Suspense fallback={null}>
        <Particles />
      </Suspense>
      <Navbar />
      <MobileNavbar />
      <div className="flex h-fit min-h-dvh w-full flex-col bg-black px-10 text-neutral-50 xl:px-20 2xl:px-52">
        <Background ClassName="min-h-fit h-fit max-w-[100vw] flex flex-col justify-center gap-24 relative sm:px-0 md:px-4 xl:px-20">
          <ContactHero />
          <BlurCircle
            options={{ x: [0, -1000, 0], y: [0, 300, 0] }}
            className="right-52 top-52 size-40 blur-[200px]"
          />
          <BlurCircle
            options={{ x: [0, 1000, 0], y: [0, 5, 0] }}
            className="left-52 top-52 size-40 blur-[200px]"
          />
          <BlurCircle
            options={{ x: [0, 0, 0], y: [0, -300, 0] }}
            className="bottom-52 left-64 blur-[100px]"
          />
          {/* <div className="no-scrollbar z-10 flex h-full w-full flex-col justify-between gap-5 overflow-x-auto lg:flex-row lg:gap-10">
            {contact.card.map((item, index) => (
              <ContactCard key={index + item.title} {...item} />
            ))}
          </div> */}
        </Background>
        <ContactSection />

        {/* Contact Channels */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contactChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 text-center"
                >
                  <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {channel.description}
                  </p>
                  <p className="text-blue-400 font-semibold">
                    {channel.contact}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Office Locations */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Offices Worldwide
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {officeLocations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-1">
                  {location.city}
                </h3>
                <p className="text-blue-400 font-semibold mb-6">
                  {location.country}
                </p>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-300">{location.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <a
                      href={`mailto:${location.email}`}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {location.email}
                    </a>
                  </div>

                  <div className="pt-4 border-t border-slate-700">
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold">Timezone:</span>{" "}
                      {location.timezone}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white text-left">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 border-t border-slate-700 bg-slate-900/50"
                  >
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
