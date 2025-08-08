import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "andres-portfolio-b4dv.onrender.com",
            },
            {
                protocol: "https",
                hostname: "media.licdn.com",
            },
        ],
        formats: ["image/avif", "image/webp"],
        dangerouslyAllowSVG: true,
    },
};

export default withNextIntl(nextConfig);
