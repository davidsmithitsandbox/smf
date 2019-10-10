import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home/Index.vue";
import Login from "@/views/login/Index.vue";
import Users from "@/views/users/Index.vue";
import UsersShow from "@/views/users/Show.vue";
import NotFound from "@/components/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/users",
      name: "users",
      component: Users
    },
    {
      path: "/users/:username",
      name: "users-show",
      component: UsersShow,
      props: true
    },
    {
      path: "*",
      component: NotFound
    }
    // {
    //   // path: "/about",
    //   // name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () =>
    //   //   import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
