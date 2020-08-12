import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "SignIn",
      path: "/",
      component: () => import("@/views/SignIn.vue"),
    },
    {
      name: "Home",
      path: "/home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/storysetting",
      name: "StorySetting",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "setting" */ "@/views/StorySetting.vue"),
    },
    {
      path: "/mainpage",
      name: "MainPage",
      component: () => import("@/views/MainPage.vue"),
    },
    {
      path: "/mainsetting",
      name: "MainSetting",
      component: () => import("@/views/MainSetting.vue"),
    },
    {
      path: "/topicsetting",
      name: "TopicSetting",
      component: () => import("@/views/TopicSetting.vue"),
    },
    {
      path: "/accountsetting",
      name: "AccountSetting",
      component: () => import("@/views/AccountSetting.vue"),
    },
    {
      path: "/detailtopic",
      name: "DetailTopic",
      component: () => import("@/views/DetailTopic.vue"),
    },
  ],
});
