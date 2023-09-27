/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals.push({
            "utf-validate": "commonjs utf-8-validate",
            bufferutil: "commonjs bufferutil"
        });

        return config
    },
    images: {
        domains: [
            "uploadthing.com"
        ]
    }
}

module.exports = nextConfig
