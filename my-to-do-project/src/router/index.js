import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../components/DashboardPage.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../components/SignIn.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../components/SignUp.vue"),
    },
    {
      path: "/new-task",
      name: "new-task",
      component: () => import("../components/DashboardPage.vue"),
    },
  ],
});

export default router;
