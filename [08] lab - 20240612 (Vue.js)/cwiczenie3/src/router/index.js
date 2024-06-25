import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/list",
      name: "list",
      component: () => import("../views/ListPeoples.vue"),
      props: { msg: "List of persons" },
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../views/AddPerson.vue"),
      props: { msg: "New person" },
    },
  ],
});

export default router;
