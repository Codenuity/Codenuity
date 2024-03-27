import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codenuity",
  description:
    "Top Mobile App Development Company. Experts in iOS/Android Apps, Web Design, UX/UI, AI, Machine Learning, Blockchain, Cybersecurity. Trusted Technology Solutions.",
  twitter:{
    card:"summary_large_image",
  },
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
          {children}
          </SmoothScroll>
      </body>
    </html>
  );
}
