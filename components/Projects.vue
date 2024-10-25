<script setup lang="ts">
const { isMobile } = useDevice();

const myProjects = projects();
</script>

<template>
  <CardGrid :list="myProjects" v-if="!isMobile" />
  <CardCarousel title="Projects" :list="myProjects" v-else />
</template>