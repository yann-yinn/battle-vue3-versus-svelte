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
  error = null;
  state = "pending";
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
  });
  if (!response.ok) {
    state = "error";
    error = `HTTP Error: ${response.status} ${response.statusText}`;
    throw new Error(error);
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
      <button type="submit" :disabled="state == 'pending'">Save</button>
    </div>
    <p v-if="state == 'pending'">Sauvegarde en cours</p>
    <p v-if="state == 'error'">{{ error }}</p>
    <p v-if="state == 'success'">Votre profil a été correctement sauvegardé</p>
  </form>
</template>
