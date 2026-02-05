"use client";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";
import { Background } from "@/components/ui/Background";
import { motion } from "framer-motion";
import { Clock, User, ArrowRight, Search, Filter } from "lucide-react";
import * as React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Particles = dynamic(() => import("@/components/ui/ParticlesBackground"), {
  ssr: false,
  loading: () => null,
});

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping web development including AI integration, performance optimization, and modern frameworks.",
    author: "Sarah Johnson",
    date: "January 28, 2024",
    readTime: "5 min read",
    category: "Web Development",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    featured: true,
  },
  {
    id: 2,
    title: "Understanding AI-Powered Chatbots and Their Business Impact",
    excerpt:
      "Discover how AI chatbots are revolutionizing customer service and driving business growth across industries.",
    author: "Mike Chen",
    date: "January 25, 2024",
    readTime: "7 min read",
    category: "AI & Machine Learning",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    featured: true,
  },
  {
    id: 3,
    title: "Securing Your Applications: Best Practices for 2024",
    excerpt:
      "Essential security practices to protect your applications and user data from evolving cyber threats.",
    author: "David Wilson",
    date: "January 22, 2024",
    readTime: "6 min read",
    category: "Cybersecurity",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    featured: false,
  },
  {
    id: 4,
    title: "Building Scalable Mobile Apps: A Complete Guide",
    excerpt:
      "Learn the best practices for building mobile applications that scale with your user base.",
    author: "Emma Davis",
    date: "January 19, 2024",
    readTime: "8 min read",
    category: "Mobile Development",
    image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    featured: false,
  },
  {
    id: 5,
    title: "Web3 and Blockchain: The Next Internet Revolution",
    excerpt:
      "An overview of blockchain technology and how it's reshaping the internet and digital economy.",
    author: "James Rodriguez",
    date: "January 16, 2024",
    readTime: "9 min read",
    category: "Blockchain",
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    featured: true,
  },
  {
    id: 6,
    title: "Design Systems: Creating Consistency at Scale",
    excerpt:
      "How to build and maintain design systems that improve team efficiency and product consistency.",
    author: "Lisa Wang",
    date: "January 13, 2024",
    readTime: "6 min read",
    category: "Design",
    image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    featured: false,
  },
];

const categories = [
  "All",
  "Web Development",
  "AI & Machine Learning",
  "Cybersecurity",
  "Mobile Development",
  "Blockchain",
  "Design",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter((post) => post.featured);
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
                Blog
              </h1>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
                Stay updated with the latest insights on technology, development,
                and digital transformation.
              </p>
            </motion.div>
          </section>
        </Background>

        {/* Featured Posts */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden border-2 border-purple-500 bg-gradient-to-br from-transparent via-transparent to-purple-900 backdrop-blur-lg backdrop-filter flex flex-col group"
              >
                {/* Image */}
                <div
                  className="h-48 w-full bg-gradient-to-br group-hover:scale-105 transition-transform duration-300"
                  style={{ background: post.image }}
                ></div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full">
                      FEATURED • {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 flex-1">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>

                  {/* Meta Info */}
                  <div className="mb-4 pb-4 border-t border-slate-700 pt-4">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white border border-blue-600"
                    : "bg-slate-800 text-gray-300 border border-slate-700 hover:border-blue-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden border border-neutral-900 bg-gradient-to-br from-transparent via-transparent to-purple-900 backdrop-blur-lg backdrop-filter hover:border-purple-500 transition-all duration-300 group flex flex-col"
              >
                {/* Image */}
                <div
                  className="h-48 w-full bg-gradient-to-br group-hover:scale-105 transition-transform duration-300"
                  style={{ background: post.image }}
                ></div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 flex-1">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>

                  {/* Meta Info */}
                  <div className="mb-4 pb-4 border-t border-slate-700 pt-4">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Load More */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="px-8 py-3 button-animation border border-neutral-800 text-white rounded-lg font-semibold transition-colors">
              Load More Articles
            </button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
