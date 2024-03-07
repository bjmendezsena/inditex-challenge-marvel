const config = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "",
  PUBLIC_KEY: process.env.NEXT_PUBLIC_PUBLIC_KEY || "",
  PRIVATE_KEY: process.env.NEXT_PUBLIC_PRIVATE_KEY || "",
  PROXI_PROTOCOL: process.env.NEXT_PUBLIC_PROXI_PROTOCOL || "",
  PROXI_HOST: process.env.NEXT_PUBLIC_PROXI_HOST || "",
  PROXI_PORT: Number(process.env.NEXT_PUBLIC_PROXI_PORT),
};

export default config;
