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
    component: Home,
    meta: {
      title: "COMB JELLY"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
    meta: {
      title: "Login"
    }
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "Checkout" */ "../views/Checkout.vue"),
    meta: {
      title: "Checkout | COMB JELLY"
    }
  },
  {
    path: "/checkout/:id",
    name: "Order",
    component: () =>
      import(/* webpackChunkName: "Order" */ "../views/Order.vue"),
    meta: {
      title: "Order Confirm | COMB JELLY"
    }
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "Products" */ "../views/Products.vue"),
    meta: {
      title: "Products | COMB JELLY"
    }
  },
  {
    path: "/products/:id",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "Product" */ "../views/Product.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      requiresAuth: true,
      title: "Dashboard | COMB JELLY"
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
            /* webpackChunkName: "dashboard_products" */ "../components/Products.vue"
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
          import(
            /* webpackChunkName: "dashboard_orders" */ "../components/Orders.vue"
          )
      },
      {
        path: "coupon",
        name: "Coupon",
        // 驗證判斷也須放到子層
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(
            /* webpackChunkName: "dashboard_coupon" */ "../components/Coupon.vue"
          )
      },
      {
        path: "testorder",
        name: "Testorder",
        meta: {
          requiresAuth: false
        },
        component: () =>
          import(
            /* webpackChunkName: "dashboard_testorder" */ "../components/Testorder.vue"
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
            /* webpackChunkName: "dashboard_checkout" */ "../components/Checkout.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
