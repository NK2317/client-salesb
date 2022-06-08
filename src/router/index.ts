import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/Login.vue"),
  },
  {
    path: "/categories",
    name: "Categories",
    component: () =>
      import(/* webpackChunkName: "Categories" */ "@/views/Categories.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "Products" */ "@/views/Products.vue"),
  },
  {
    path: "/clients",
    name: "Clients",
    component: () =>
      import(/* webpackChunkName: "Clients" */ "@/views/Clients.vue"),
  },
  {
    path: "/orders",
    name: "Orders",
    component: () =>
      import(/* webpackChunkName: "Orders" */ "@/views/Orders.vue"),
  },
  {
    path: "/orders/new",
    name: "NewOrder",
    component: () =>
      import(/* webpackChunkName: "NewOrder" */ "@/views/NewOrder.vue"),
  },
  {
    path: "/orders/:id",
    name: "ShowOrderDetail",
    component: () =>
      import(
        /* webpackChunkName: "ShowOrderDetail" */ "@/views/ShowOrderDetail.vue"
      ),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "SignUp" */ "@/views/SignUp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(({ name }) => {
  if (name !== "Login") {
    try {
      //const json = localStorage.getItem("auth/user_data");
      const json = sessionStorage.getItem("auth/user_data");
      if (json) {
        const { accessToken = false, userID = false } = JSON.parse(json);
        if (!(accessToken && userID)) return { name: "Login" };
      } else {
        return { name: "Login" };
      }
    } catch (error) {
      console.error(error);
      return { name: "Login" };
    }
  }
});

export default router;
