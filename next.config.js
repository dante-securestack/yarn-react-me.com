const { env } = require('./src/server/env')

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function getConfig(config) {
  return config
}

const nextConfig = getConfig({
  devIndicators: {
    buildActivityPosition: 'bottom-left',
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      ...defaultPathMap,
    }
  },
  images: {
    unoptimized: process.env.NEXT_PUBLIC_UNOPTIMIZE_IMAGE === false,
  },
  productionBrowserSourceMaps: true,
  publicRuntimeConfig: {
    NODE_ENV: env.NODE_ENV,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
})

module.exports = nextConfig
