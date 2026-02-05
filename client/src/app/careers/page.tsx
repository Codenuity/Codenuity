"use client";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";
import { Background } from "@/components/ui/Background";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Users,
  ArrowRight,
  Heart,
  Zap,
  CheckCircle,
  MessageSquare,
  Code,
} from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Particles = dynamic(() => import("@/components/ui/ParticlesBackground"), {
  ssr: false,
  loading: () => null,
});

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description:
      "We're looking for an experienced full stack developer to lead our web development initiatives using React, Node.js, and modern cloud technologies.",
  },
  {
    id: 2,
    title: "Mobile App Developer (React Native)",
    department: "Mobile",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Join our mobile team to build cross-platform applications for iOS and Android using React Native and modern development practices.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Create beautiful and intuitive user interfaces for our products. We're looking for designers passionate about user-centered design.",
  },
  {
    id: 4,
    title: "ML Engineer",
    department: "AI/ML",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description:
      "Develop and deploy machine learning models for our AI solutions. Experience with Python, TensorFlow, and production ML systems required.",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Build and maintain our cloud infrastructure on AWS and Kubernetes. Help us scale to serve millions of users.",
  },
  {
    id: 6,
    title: "Junior Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "0-2 years",
    description:
      "Fresh out of school? We offer mentorship and training for junior developers eager to grow in a supportive environment.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
  },
  {
    icon: Zap,
    title: "Career Growth",
    description: "Professional development and training opportunities",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented teams in a supportive environment",
  },
  {
    icon: Briefcase,
    title: "Flexible Work",
    description: "Remote and flexible working arrangements",
  },
  {
    icon: Heart,
    title: "Competitive Salary",
    description: "Industry-competitive compensation packages",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Work on cutting-edge technology projects",
  },
];

const interviewProcess = [
  {
    stage: 1,
    title: "Application Review",
    description: "We review your resume and background to ensure a good fit.",
    duration: "1-2 days",
  },
  {
    stage: 2,
    title: "Initial Interview",
    description: "Meet with our HR team to discuss your experience and goals.",
    duration: "30 mins",
  },
  {
    stage: 3,
    title: "Technical Assessment",
    description: "Showcase your skills with a technical challenge relevant to the role.",
    duration: "1-2 hours",
  },
  {
    stage: 4,
    title: "Team Interview",
    description: "Meet with the team members you'll be working with directly.",
    duration: "45 mins",
  },
  {
    stage: 5,
    title: "Final Discussion",
    description: "Final conversation to discuss offer, compensation, and next steps.",
    duration: "30 mins",
  },
];

const employeeTestimonials = [
  {
    name: "Alex Kumar",
    role: "Senior Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    testimonial:
      "Codenuity is more than just a company - it's a community of passionate developers. The learning opportunities and mentorship I've received have been invaluable to my growth.",
  },
  {
    name: "Maria Santos",
    role: "UX Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    testimonial:
      "I love the collaborative environment here. My ideas are heard, and I get to work on projects that truly make a difference. The team celebrates wins together.",
  },
  {
    name: "James Wilson",
    role: "DevOps Engineer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    testimonial:
      "The work-life balance is exceptional. Remote flexibility combined with challenging projects makes this the ideal workplace for me. Highly recommended!",
  },
];

export default function CareersPage() {
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
                Join Our Team
              </h1>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                We're hiring talented individuals who are passionate about
                technology and innovation.
              </p>
            </motion.div>
          </section>
        </Background>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Join Codenuity?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
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
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Job Openings */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Open Positions
          </h2>
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {job.title}
                      </h3>
                      <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-2 button-animation border border-neutral-800 text-white rounded-lg font-semibold transition-colors group-hover:gap-3 whitespace-nowrap">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Employee Testimonials */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What Our Team Says
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {employeeTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-neutral-900 bg-gradient-to-br from-transparent via-transparent to-purple-900 p-8 backdrop-blur-lg backdrop-filter"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interview Process */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Hiring Process
          </h2>
          <div className="space-y-4">
            {interviewProcess.map((interview, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <div className="w-12 h-12 button-animation border border-neutral-800 rounded-full flex items-center justify-center text-white font-bold">
                      {interview.stage}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">
                        {interview.title}
                      </h3>
                      <span className="text-sm text-neutral-400 bg-neutral-800 px-3 py-1 rounded-full">
                        {interview.duration}
                      </span>
                    </div>
                    <p className="text-neutral-400">{interview.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Culture Highlights */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-900 bg-gradient-to-br from-transparent via-transparent to-purple-900 rounded-xl p-12 backdrop-blur-lg backdrop-filter"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Our Culture</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Code Excellence
                </h3>
                <p className="text-gray-400">
                  We maintain high standards for code quality and encourage continuous
                  improvement through peer reviews and best practices.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Teamwork
                </h3>
                <p className="text-gray-400">
                  Collaboration is at our core. We believe great solutions come from
                  diverse perspectives and strong teamwork.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Innovation
                </h3>
                <p className="text-gray-400">
                  We encourage experimentation and reward creative thinking that
                  pushes boundaries and drives progress.
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
              Don't See Your Role?
            </h2>
            <p className="text-neutral-200 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume
              and let's talk about opportunities.
            </p>
            <a
              href="mailto:careers@codenuity.com"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-neutral-200 transition-colors"
            >
              Send Your Resume
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
