import { createRouter, createWebHistory } from "vue-router";
import BasicCounterView from "@/views/BasicCounterView.vue";
import BasicCounterWithDoubleView from "@/views/BasicCounterWithDoubleView.vue";
import userProfileFormView from "@/views/userProfileFormView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "BasicCounter",
      component: BasicCounterView,
    },
    {
      path: "/basic-counter-with-double",
      name: "BasicCounterWithDouble",
      component: BasicCounterWithDoubleView,
    },
    {
      path: "/profile-form",
      name: "ProfileForm",
      component: userProfileFormView,
    },
  ],
});

export default router;
