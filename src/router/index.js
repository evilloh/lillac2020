import { createWebHistory, createRouter } from "vue-router";
import Selflessness from "@/Selflessness.vue";
import Greed from "@/Greed.vue";
import Lust from "@/Lust.vue";
import Behind from "@/Behind.vue";
import Home from "@/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/selflessness",
    name: "Selflessness",
    component: Selflessness,
  },
  {
    path: "/greed",
    name: "Greed",
    component: Greed,
  },
  {
    path: "/lust",
    name: "Lust",
    component: Lust,
  },
  {
    path: "/behindthescenes",
    name: "Behind",
    component: Behind,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
