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
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Checkout.vue")
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Products.vue")
  },
  {
    path: "/products/:id",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Product.vue")
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
        path: "orders",
        name: "Orders",
        // 驗證判斷也須放到子層
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "products" */ "../components/Orders.vue")
      },
      {
        path: "coupon",
        name: "Coupon",
        // 驗證判斷也須放到子層
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "products" */ "../components/Coupon.vue")
      },
      {
        path: "testorder",
        name: "Testorder",
        meta: {
          requiresAuth: false
        },
        component: () =>
          import(
            /* webpackChunkName: "products" */ "../components/Testorder.vue"
          )
      },
      {
        // 結帳頁記得帶入 orderId ，冒號為動態綁定參數
        path: "checkout/:orderId",
        name: "Checkout",
        meta: {
          requiresAuth: false
        },
        component: () =>
          import(
            /* webpackChunkName: "products" */ "../components/Checkout.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
