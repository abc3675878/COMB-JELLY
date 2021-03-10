import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    children: [
      {
        path: "products",
        name: "Products",
        // 驗證判斷也須放到子層
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(
            /* webpackChunkName: "products" */ "../components/Products.vue"
          )
      },
      {
        path: "testorder",
        name: "Testorder",
        // 驗證判斷也須放到子層
        // meta: {
        //   requiresAuth: true
        // },
        component: () =>
          import(
            /* webpackChunkName: "products" */ "../components/Testorder.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
