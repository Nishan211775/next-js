// /** @type {import('next').NextConfig} */
// const nextConfig = {};
import nextPwa from 'next-pwa';

// export default nextConfig;
// Configuration options for Next.js
const nextConfig = {
    reactStrictMode: true, // Enable React strict mode for improved error handling
    swcMinify: true,      // Enable SWC minification for improved performance
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
    },
};

// Configuration object tells the next-pwa plugin 
const withPWA = nextPwa({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
});

// Export the combined configuration for Next.js with PWA support
module.exports = withPWA(nextConfig);