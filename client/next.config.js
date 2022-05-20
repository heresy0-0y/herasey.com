const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
  });
  
  module.exports = withBundleAnalyzer({
    compress: true,
    swcMinify: true,
    compiler: {
    //   removeConsole: true,
    },
    images: {
      formats: ["image/avif", "image/webp"],
      deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 350],
    },
  });
  