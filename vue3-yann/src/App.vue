<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Basic counter</RouterLink> |
    <RouterLink to="/basic-counter-with-double">
      Basic counter with double
    </RouterLink>
    |
    <RouterLink to="/profile-form"> Profile Form </RouterLink>
  </nav>

  <RouterView />
</template>
