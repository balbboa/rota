/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  compiler: {
    styledComponents: true,
  }
}
// ./next.conf