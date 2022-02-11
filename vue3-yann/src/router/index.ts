import { createRouter, createWebHistory } from "vue-router";
import BasicCounterView from "@/views/BasicCounterView.vue";
import BasicCounterWithDoubleView from "@/views/BasicCounterWithDoubleView.vue";
import ProfileFormView from "@/views/ProfileFormView.vue";
import ProfileFormViewWithUseFetch from "@/views/ProfileFormViewWithUseFetch.vue";

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
      component: ProfileFormView,
    },
    {
      path: "/profile-form-with-use-fetch",
      name: "ProfileFormWithUseFetch",
      component: ProfileFormViewWithUseFetch,
    },
  ],
});

export default router;
