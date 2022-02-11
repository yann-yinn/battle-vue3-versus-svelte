<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div style="padding: 20px; max-width: 800px; margin: auto">
    <nav>
      <RouterLink to="/">Basic counter</RouterLink> |
      <RouterLink to="/basic-counter-with-double">
        Basic counter with double
      </RouterLink>
      |
      <RouterLink to="/profile-form"> Profile Form </RouterLink> |
      <RouterLink to="/profile-form-with-use-fetch">
        Profile Form with UseFetch Composable
      </RouterLink>
      |
      <RouterLink to="/todo-list"> Todo List </RouterLink>
    </nav>
    <div style="margin-top: 20px">
      <RouterView />
    </div>
  </div>
</template>
