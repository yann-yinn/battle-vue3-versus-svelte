<script setup lang="ts">
import type { User } from "@/types";
import useFetch from "@/composables/useFetch";

const props = defineProps<{
  user: User;
}>();

const { state, error, execute } = useFetch<User>(
  "https://jsonplaceholder.typicode.com/users/1",
  { method: "PUT" }
);

const formValues = $ref({
  name: props.user.name,
  email: props.user.email,
});

async function submit() {
  execute();
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
    <p v-if="state === 'pending'">Sauvegarde en cours</p>
    <p v-if="state === 'error'">{{ error }}</p>
    <p v-if="state === 'success'">Succès de la sauvegarde!</p>
  </form>
</template>
