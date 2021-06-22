import { createRouter, createWebHistory } from "vue-router";
import Login from "../Views/Pages/Login.vue";

const routes = [
  {
    path: "/",
    name: "Workspace",
    component: () => import("../Views/Pages/Workspace/Workspace.vue"),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    beforeEnter: (to: any, from: any, next: any) => {
      const token = localStorage.getItem("token");
      if (!token) next({ name: "Login" });
      else next();
    },
  },
  {
    path: "/sales",
    name: "Sales",
    component: () => import("../Views/Pages/Sales.vue"),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    beforeEnter: (to: any, from: any, next: any) => {
      const token = localStorage.getItem("token");
      if (!token) next({ name: "Login" });
      else next();
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
