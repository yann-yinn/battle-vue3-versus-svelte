<script setup lang="ts">
let count = $ref(0);
const double = $computed(() => count * 2);
</script>

<template>
  <p>Count: {{ count }}</p>
  <p>Count double: {{ double }}</p>
  <button @click="count++">Increment</button>
</template>
