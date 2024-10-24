<script setup lang="ts">
import CardGrid from './CardGrid.vue'
import { data as projects } from '../project.data.ts'
</script>

<template>
  <CardGrid :list="projects" />
</template>