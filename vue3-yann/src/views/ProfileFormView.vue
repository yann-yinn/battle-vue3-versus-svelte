<script setup lang="ts">
import ProfileForm from "@/components/ProfileForm.vue";
import type { User, RequestState } from "@/types";

let data = $ref<User | null>(null);
let state = $ref<RequestState>("PENDING");
let error = $ref<string | null>(null);

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    if (!response.ok) {
      const errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
      error = errorMessage;
      state = "ERROR";
      throw new Error(errorMessage);
    }
    return response.json();
  })
  .then((result) => {
    state = "SUCCESS";
    data = result;
  });
</script>

<template>
  <div v-if="state == 'ERROR'">{{ error }}</div>
  <div v-if="state == 'PENDING'">Chargement</div>
  <div v-if="state == 'SUCCESS'">
    <ProfileForm :user="data"></ProfileForm>
  </div>
</template>
