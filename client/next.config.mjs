import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
  // Your Next.js config options go here
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
