<script setup lang="ts">
import type { User, RequestState } from "@/types";

const props = defineProps<{
  user: User;
}>();

let state = $ref<RequestState>("unsent");
let error = $ref(null);

const formValues = $ref({
  name: props.user.name,
  email: props.user.email,
});

async function submit() {
  state = "PENDING";
  error = null;
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
  });

  if (!response.ok) {
    state = "ERROR";
    const errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
    error = errorMessage;
    throw new Error(errorMessage);
  }
  state = "success";
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
      <button type="submit" :disabled="state == 'PENDING'">Save</button>
    </div>
    <p v-if="state == 'pending'">Sauvegarde en cours</p>
    <p v-if="state == 'error'">{{ error }}</p>
    <p v-if="state == 'success'">Votre profil a été correctement sauvegardé</p>
  </form>
</template>
