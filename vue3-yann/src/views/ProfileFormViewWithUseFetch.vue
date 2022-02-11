<script setup lang="ts">
import ProfileFormWithUseFetch from "@/components/ProfileFormWithUseFetch.vue";
import useFetch from "@/composables/useFetch";
import type { User } from "@/types";

const { state, data, error, execute } = useFetch<User>(
  "https://jsonplaceholder.typicode.com/users/1"
);
execute();
</script>

<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="state == 'pending'">Chargement</div>
  <div v-if="state == 'success'">
    <ProfileFormWithUseFetch :user="data"></ProfileFormWithUseFetch>
  </div>
</template>
