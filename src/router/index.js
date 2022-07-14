import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import log from "../views/log.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: '/index',
    component: HomeView,
    children:[
      // home的首页
      {
        path: "index",
        component: () =>
          import("@/components/Index.vue"),
      },
    ]
  },
  {
    path: '/log',
    name: 'log',
    meta:{token:'3242565'},
    component: log
  },
  // 表单实验页面
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user.vue')
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to,from,next)=>{
  // 路由守卫使用for，陷入死循环
  let token=localStorage.getItem('token')||to.meta.token
  if(token) {
    next()
  }else{
    next('log')
  }
})

export default router;
