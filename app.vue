<script setup lang="ts">
const session = await $fetch('/api/session', { method: 'post' })
const isLoggedIn = ref(false)
</script>

<template>
  <Login v-if="!isLoggedIn" />
</template>

<style>
body {
  @apply bg-light-300;
}
</style>
