<script setup lang="ts">
import ProfileForm from "@/components/ProfileForm.vue";
import type { User, RequestState } from "@/types";

let data = $ref<User | null>(null);
let state = $ref<RequestState>("pending");
let error = $ref<string | null>(null);

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    if (!response.ok) {
      const errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
      error = errorMessage;
      state = "error";
      throw new Error(errorMessage);
    }
    return response.json();
  })
  .then((result) => {
    state = "success";
    data = result;
  });
</script>

<template>
  <div v-if="state == 'error'">{{ error }}</div>
  <div v-if="state == 'pending'">Chargement</div>
  <div v-if="state == 'success'">
    <ProfileForm :user="data"></ProfileForm>
  </div>
</template>
