/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'http://localhost:3000',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET, DELETE, POST, PUT, PATCH',
                    }
                ]
            }
        ]
    },
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.discordapp.com',
            },
            {
                hostname: 'lh3.googleusercontent.com',
            },
            {
                hostname: 'dl-web.dropbox.com',
            }
        ]
    }
}

module.exports = nextConfig
