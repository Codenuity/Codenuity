import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import { BackgroundBeams } from "@/components/ui/background-beams";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codenuity",
  description:
    "Top Mobile App Development Company. Experts in iOS/Android Apps, Web Design, UX/UI, AI, Machine Learning, Blockchain, Cybersecurity. Trusted Technology Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Background layers - all behind content */}
        <div className="fixed inset-0 z-0 bg-black pointer-events-none" />
        
        {/* Animated Beams - behind content */}
        <BackgroundBeams />
        
        {/* Animated Stars - behind content */}
        <Suspense fallback={null}>
          <ParticlesBackground />
        </Suspense>
        
        {/* Main content on top */}
        <div className="relative z-50">
          <SmoothScroll>{children}</SmoothScroll>
        </div>
      </body>
    </html>
  );
}
