/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        // loader: "custom",
    },
    skipTrailingSlashRedirect: true,
    trailingSlash: true,
    transpilePackages: ["three"],
};

export default nextConfig;
