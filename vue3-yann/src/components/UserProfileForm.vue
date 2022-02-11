<script setup lang="ts">
import type { User } from "@/types";

const props = defineProps<{
  user: User;
}>();

const saveError = $ref(null);
const saveSuccess = $ref(false);
const isSaving = $ref(false);

const formValues = $ref({
  id: props.user.id,
  name: props.user.name,
  email: props.user.email,
});

async function submit() {
  isSaving = true;
  saveError = null;
  saveSuccess = false;
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
  });
  isSaving = false;
  if (!response.ok) {
    const errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
    saveError = errorMessage;
    throw new Error(errorMessage);
  }
  saveSuccess = true;
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
      <button type="submit" :disabled="isSaving">Save</button>
    </div>
    <p v-if="isSaving">Sauvegarde en cours</p>
    <p v-if="saveError">{{ saveError }}</p>
    <p v-if="saveSuccess">Votre profil a été correctement sauvegardé</p>
  </form>
</template>
