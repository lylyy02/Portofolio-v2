const { defineConfig } = require('@vue/cli-service')

// GitHub Pages serves the site from /Portofolio-v2/, while Netlify serves it from the domain root.
const isGitHubPages = process.env.NODE_ENV === 'production' && !process.env.NETLIFY

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: isGitHubPages ? '/Portofolio-v2/' : '/'
})
