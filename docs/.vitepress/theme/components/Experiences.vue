<script setup lang="ts">
import CardGrid from './CardGrid.vue'
import { data as experience } from '../experience.data.ts'
</script>

<template>
  <CardGrid :list="experience" />
</template>