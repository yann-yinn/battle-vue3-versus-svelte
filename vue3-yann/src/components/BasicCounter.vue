<script setup lang="ts">
let count = $ref(0);
</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="count++">Increment</button>
</template>
