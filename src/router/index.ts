import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: () => import("../pages/WelcomePage.vue"),
    },
    {
      path: "/dashboard",
      name: "home",
      component: () => import("../pages/HomePage.vue"),
    }
  ],
});

export default router;
