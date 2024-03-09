/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path([^\\d]+)",
        destination: "/",
        permanent: true,
        has: [
          {
            type: "host",
            value: ".*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
