<script setup lang="ts">
import type { User } from "@/types";

const props = defineProps<{
  user: User;
}>();

const error = $ref(null);
const isFinished = $ref(false);
const isFetching = $ref(false);

const formValues = $ref({
  id: props.user.id,
  name: props.user.name,
  email: props.user.email,
});

async function submit() {
  isFetching = true;
  isFinished = false;
  error = null;
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
  });
  isFinished = true;
  isFetching = false;
  if (!response.ok) {
    const errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
    error = errorMessage;
    throw new Error(errorMessage);
  }
}
</script>

<template>
  <form ref="form" @submit.prevent="submit">
    <div>
      <input name="name" type="text" v-model="formValues.name" required />
    </div>
    <div>
      <input name="email" type="email" v-model="formValues.email" required />
    </div>
    <div>
      <button type="submit" :disabled="isFetching">Save</button>
    </div>
    <p v-if="isFetching">Sauvegarde en cours</p>
    <p v-if="error">{{ error }}</p>
    <p v-if="isFinished && !error">
      Votre profil a été correctement sauvegardé
    </p>
  </form>
</template>
