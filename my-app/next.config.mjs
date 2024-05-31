/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      minimumCacheTTL: 30,
      remotePatterns: [
        {
          hostname: "firebasestorage.googleapis.com",
          protocol: "https",
        },
      ],
    },
  
    
  };
  
  export default nextConfig;
  