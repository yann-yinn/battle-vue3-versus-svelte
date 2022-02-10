import { createRouter, createWebHistory } from "vue-router";
import BasicCounter from "../views/BasicCounter.vue";
import BasicCounterWithDouble from "../views/BasicCounterWithDouble.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "BasicCounter",
      component: BasicCounter,
    },
    {
      path: "/basic-counter-with-double",
      name: "BasicCounterWithDouble",
      component: BasicCounterWithDouble,
    },
  ],
});

export default router;
