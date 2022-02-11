<script setup lang="ts">
import ProfileFormWithUseFetch from "@/components/ProfileFormWithUseFetch.vue";
import useFetch from "@/composables/useFetch";
import type { User } from "@/types";

const { data, isFetching, error, execute } = useFetch<User>(
  "https://jsonplaceholder.typicode.com/users/1"
);
execute();
</script>

<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="isFetching">Chargement</div>
  <div v-if="data">
    <ProfileFormWithUseFetch :user="data"></ProfileFormWithUseFetch>
  </div>
</template>
