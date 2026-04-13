/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pravatar.cc',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;

