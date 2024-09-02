/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "civilrights.msu.edu",
            pathname: "/_assets/images/placeholder/**",
        }, ],
    },
};

export default nextConfig;