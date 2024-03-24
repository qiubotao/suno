/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
    reactStrictMode: true,
    i18n,
    // 在这里添加其他 Next.js 配置
  };
  
module.exports = nextConfig;