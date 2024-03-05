/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           value: "https://protolylab.onrender.com",
  //         },
  //       ],
  //     },
  //   ];
  // },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       fs: false,
  //       module: false,
  //     };
  //   }

  //   return config;
  // },
  output: "export",
};

module.exports = nextConfig;
