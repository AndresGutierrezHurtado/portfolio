import createNextIntlPlugin from "next-intl/plugin";
 
const withNextIntl = createNextIntlPlugin();
``
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com", "localhost", "andres-portfolio-usop.onrender.com", "media.licdn.com"],
        formats: ["image/avif", "image/webp"],
        dangerouslyAllowSVG: true,
    }
};

export default withNextIntl(nextConfig);
