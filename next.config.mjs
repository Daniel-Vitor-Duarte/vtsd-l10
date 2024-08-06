/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    basePath: "/cursodigital/vtsd/l10",
};

export default nextConfig;
