const { defineConfig } = require("@vue/cli-service");
// 全局API
let API = process.env.VUE_APP_API
module.exports = defineConfig({
  transpileDependencies: true,
  // 跨域配置
  "devServer":{
    proxy:{
      "/api":{
        target:API,
        changeOrigin: true,
        pathReWrite:{
          "/api":""
        }
      }
    }
  },
  // 环境配置
  "lintOnSave":false
});
