<script setup lang="ts">
import { data as experience } from '../experience.data'

</script>

<template>
  <div class="experience-section">
    <p class="title">Experience</p>
    <div class="card-section-container">
      <div class="card" v-for="exp in experience">
        <p class="card-title">{{ exp.title }}</p>
        <p>{{ exp.description }}</p>
        <div class="card-separator"></div>
        <div class="card-tag-section ">
          <div v-for="tag in exp.technologies" class="card-chip">{{ tag }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-section {
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