import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const baseURL = "/v1"
export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/v1"
    },
    {
      path: "/index.html",
      redirect: "/v1"
    },
    {
      path: "/index",
      redirect: "/v1"
    },
    {
      name: "Loading",
      path: "/v1",
      component: () => import("@/views/Loading.vue"),
    },
    {
      name: "SignIn",
      path: baseURL + "/signIn",
      component: () => import("@/views/SignIn.vue"),
    },
    {
      name: "Home",
      path: baseURL + "/home",
      component: () => import("@/views/Home.vue"),
    },
    {
      name: 'MainPage',
      path: baseURL + '/channel',
      component: () => import("@/views/MainPage.vue"),
    },
    {
      path: baseURL + "/storysetting",
      name: "StorySetting",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "setting" */ "@/views/StorySetting.vue"),
    },
    {
      path: baseURL + "/mainsetting",
      name: "MainSetting",
      component: () => import("@/views/MainSetting.vue"),
    },
    {
      path: baseURL + "/topicsetting",
      name: "TopicSetting",
      component: () => import("@/views/TopicSetting.vue"),
    },
    {
      path: baseURL + "/accountsetting",
      name: "AccountSetting",
      component: () => import("@/views/AccountSetting.vue"),
    },
    {
      path: baseURL + "/detailtopic",
      name: "DetailTopic",
      component: () => import("@/views/DetailTopic.vue"),
    },
  ],
});
