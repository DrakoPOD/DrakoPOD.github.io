<script setup lang="ts">
const { isMobile } = useDevice();
const myExperience = experience();
</script>

<template>
  <CardGrid :list="myExperience" v-if="!isMobile" />
  <CardCarousel title="Experience" :list="myExperience" v-else />
</template>