"use client";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";
import { Background } from "@/components/ui/Background";
import { motion } from "framer-motion";
import { Award, Users, Lightbulb, Target, TrendingUp, Heart, Star } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Particles = dynamic(() => import("@/components/ui/ParticlesBackground"), {
  ssr: false,
  loading: () => null,
});

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly push boundaries and embrace new technologies to solve complex problems.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and working closely with our clients to achieve success.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from code quality to customer service.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We operate with honesty and transparency, building trust with our clients and partners.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "We're committed to continuous learning and helping our clients grow their businesses.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Quality is never compromised. We deliver solutions that exceed expectations.",
  },
];

const stats = [
  { number: "150+", label: "Successful Projects" },
  { number: "50+", label: "Team Members" },
  { number: "10+", label: "Years of Experience" },
  { number: "30+", label: "Happy Clients" },
];

const timeline = [
  {
    year: "2014",
    title: "Founded",
    description: "Codenuity Solutions was founded with a vision to transform businesses through technology.",
  },
  {
    year: "2016",
    title: "First Milestone",
    description: "Reached 50 successful projects and expanded our team to 15 members.",
  },
  {
    year: "2018",
    title: "Global Expansion",
    description: "Started working with clients from 10+ countries across different continents.",
  },
  {
    year: "2020",
    title: "AI & Innovation",
    description: "Launched AI-powered solutions and expanded into blockchain development.",
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Recognized as a top technology development company in the region.",
  },
  {
    year: "2024",
    title: "Future Ready",
    description: "Positioned as leaders in AI, Web3, and cutting-edge technology solutions.",
  },
];

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    bio: "Visionary leader with 15+ years of experience in technology and business strategy.",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    bio: "Tech innovator passionate about AI and machine learning solutions.",
  },
  {
    name: "Michael Johnson",
    role: "VP Engineering",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    bio: "Full-stack expert leading our development teams across all projects.",
  },
  {
    name: "Emily Rodriguez",
    role: "VP Design",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    bio: "Creative visionary focused on user-centered design and innovation.",
  },
  {
    name: "David Park",
    role: "VP Product",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    bio: "Product strategist with expertise in scaling technology platforms.",
  },
  {
    name: "Lisa Wong",
    role: "Head of Operations",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    bio: "Operations expert ensuring seamless project delivery and client satisfaction.",
  },
];

const testimonials = [
  {
    name: "Alex Thompson",
    company: "TechCorp Inc.",
    text: "Working with Codenuity transformed our entire digital infrastructure. Their expertise and dedication are unmatched.",
    rating: 5,
  },
  {
    name: "Jessica Lee",
    company: "StartupHub",
    text: "The team's innovative approach and problem-solving skills helped us launch our MVP in record time.",
    rating: 5,
  },
  {
    name: "Robert Martinez",
    company: "Global Solutions Ltd.",
    text: "Exceptional quality, excellent communication, and truly collaborative partnership throughout the project.",
    rating: 5,
  },
];

export default function AboutPage() {
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
                About Codenuity
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a team of passionate developers, designers, and innovators
              dedicated to transforming businesses through technology.
            </p>
          </motion.div>
        </section>
        </Background>

        {/* Mission & Vision */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-blue-100 leading-relaxed">
                To empower businesses by delivering innovative, scalable, and
                high-quality technology solutions that drive growth and create
                lasting value. We believe technology should be a catalyst for
                positive change and business transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Our Vision
              </h2>
              <p className="text-purple-100 leading-relaxed">
                To be the trusted technology partner of choice for businesses
                worldwide, known for innovation, quality, and customer success.
                We envision a future where technology seamlessly empowers every
                organization to achieve their goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-neutral-900 bg-gradient-to-br from-transparent via-transparent to-purple-900 p-6 backdrop-blur-lg backdrop-filter hover:border-purple-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Journey
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-blue-600 to-transparent mt-2"></div>
                  )}
                </div>
                <div className="rounded-2xl border border-neutral-900 bg-gradient-to-br from-transparent via-transparent to-purple-900 p-6 backdrop-blur-lg backdrop-filter flex-1">
                  <h3 className="text-xl font-bold text-blue-400 mb-1">
                    {item.year}
                  </h3>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-neutral-900 bg-gradient-to-br from-transparent via-transparent to-purple-900 p-6 backdrop-blur-lg backdrop-filter text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-blue-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-neutral-900 bg-gradient-to-br from-transparent via-transparent to-purple-900 p-8 backdrop-blur-lg backdrop-filter"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 via-slate-800 to-slate-900 rounded-xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              At Codenuity, we believe that great technology comes from great
              people working in an inspiring environment. We foster a culture of
              continuous learning, innovation, and collaboration where every team
              member can thrive and make a meaningful impact.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-bold text-blue-400 mb-2">
                  Continuous Learning
                </h4>
                <p className="text-gray-400">
                  We invest in our team's growth through training, workshops, and
                  exposure to cutting-edge technologies.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-400 mb-2">
                  Work-Life Balance
                </h4>
                <p className="text-gray-400">
                  Flexible hours, remote work options, and a supportive environment
                  that respects personal time.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-400 mb-2">
                  Innovation First
                </h4>
                <p className="text-gray-400">
                  We encourage experimentation and reward creative thinking that
                  drives our industry forward.
                </p>
              </div>
            </div>
          </motion.div>
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
              Ready to Work Together?
            </h2>
            <p className="text-neutral-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business succeed through
              innovative technology solutions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-neutral-200 transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
