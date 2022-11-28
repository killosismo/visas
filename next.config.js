/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return[
      {
      source:'/especiales/el-jugoso-negocio-de-las-visas-dominicanas-en-haiti',
      destination:'/',
      permanent: true,
      },
    ]  
  }
  
  
}

module.exports = nextConfig
