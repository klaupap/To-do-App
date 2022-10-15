import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: () => import("../views/DashboardPage.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/AuthPage.vue"),
    },
  ],
});

export default router;
