"use client";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";
import { Background } from "@/components/ui/Background";
import { motion } from "framer-motion";
import { caseStudy } from "@/settings/case-study";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Particles = dynamic(() => import("@/components/ui/ParticlesBackground"), {
  ssr: false,
  loading: () => null,
});

export default function CaseStudiesPage() {
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
                Case Studies
              </h1>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                Discover how we've helped businesses achieve remarkable results
                through innovative technology solutions.
              </p>
            </motion.div>
          </section>
        </Background>

        {/* Case Studies List */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="space-y-12">
            {caseStudy.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-blue-400">
                        Case Study #{study.id}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 mb-8">{study.description}</p>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500 mb-2">
                          KEY HIGHLIGHTS
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            Custom development approach
                          </li>
                          <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            Performance optimized
                          </li>
                          <li className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            User-centric design
                          </li>
                        </ul>
                      </div>
                    </div>

                    <button className="mt-8 w-fit flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors group">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Image */}
                  <div className="flex items-center justify-center">
                    <div className="w-full h-64 md:h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg overflow-hidden border border-slate-600">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
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
              Your Success Story Starts Here
            </h2>
            <p className="text-neutral-200 mb-8 max-w-2xl mx-auto">
              Let's create your next success story. Contact us to discuss how
              we can help your project succeed.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-neutral-200 transition-colors"
            >
              Start Your Project
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
