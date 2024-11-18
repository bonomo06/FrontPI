import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    appDir: false, // Desative o modo app caso esteja ativado
  },
};
module.exports = nextConfig;
