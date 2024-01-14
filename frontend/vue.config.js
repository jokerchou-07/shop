let path = require("path")
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: "https://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          '^/api':'/api'
        }
      }
    },
  },
  configureWebpack: (config)=>{
    config.resolve = {
      extensions: ['.js','.json','vue'],
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
}
