<script setup lang="ts">
import ProfileForm from "@/components/ProfileForm.vue";
import type { User } from "@/types";

let data = $ref<User | null>(null);
let isFetching = $ref(true);
let error = $ref<string | null>(null);

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    if (!response.ok) {
      const errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
      error = errorMessage;
      isFetching = false;
      throw new Error(errorMessage);
    }
    return response.json();
  })
  .then((result) => {
    isFetching = false;
    data = result;
  });
</script>

<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="isFetching">Chargement</div>
  <div v-if="data">
    <ProfileForm :user="data"></ProfileForm>
  </div>
</template>
