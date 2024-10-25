<script setup lang="ts">
const myProjects = projects();
</script>

<template>
  <CardGrid :list="myProjects" />
</template>