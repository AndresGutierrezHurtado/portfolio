/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com", "localhost", "andres-portfolio-usop.onrender.com"],
        formats: ["image/avif", "image/webp"],
        dangerouslyAllowSVG: true,
    }
};

export default nextConfig;
