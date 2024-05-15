import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default nextConfig;
