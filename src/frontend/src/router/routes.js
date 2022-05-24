export default [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/Index.vue"),
    meta: {
      layout: "AppLayoutMain",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("@/views/Orders.vue"),
    meta: {
      layout: "AppLayoutOrdersProfile",
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/Cart.vue"),
    meta: {
      layout: "AppLayoutMain",
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/Profile.vue"),
    meta: {
      layout: "AppLayoutOrdersProfile",
    },
  },
];
