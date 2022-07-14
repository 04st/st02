import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import elementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
// 启动指令
// console.log("555",process.env)

Vue.config.productionTip = false;
Vue.use(elementUI)

// 引入mock拦截
if(process.env.NODE_ENV==='development'){
  require('./mock/mock.js')
}else{
  console.log(process.env.NODE_ENV)
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
