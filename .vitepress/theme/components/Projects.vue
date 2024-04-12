<script setup lang="ts">
import { data as projects } from '../project.data'
</script>

<template>
  <div class="project-section">
    <p class="title">Projects</p>
    <div class="card-section-container">
      <div class="card" v-for="project in projects">
        <p class="card-title">{{ project.title }}</p>
        <p>{{ project.summary }}</p>
        <div v-if="!!project.projectUrl">
          <a :href="project.projectUrl" target="_blank" class="card-link">View Project</a>
        </div>
        <div class="card-separator"></div>
        <div class="card-tag-section ">
          <div v-for="tag in project.technologies" class="card-chip">{{ tag }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-section {
  background: black;
  height: 100vh;
  overflow: hidden;
  padding: 3rem;
}

.title {
  color: white;
  text-align: center;
  padding: 2rem 0;
  font-size: 2.5rem;
  font-weight: bold;
}
</style>