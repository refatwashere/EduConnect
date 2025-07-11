/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'supabase.co'],
  },
  // Enable static exports for Tauri only
  output: process.env.TAURI_BUILD === 'true' ? 'export' : undefined,
  trailingSlash: process.env.TAURI_BUILD === 'true',
  distDir: process.env.TAURI_BUILD === 'true' ? 'out' : '.next',
}

module.exports = nextConfig