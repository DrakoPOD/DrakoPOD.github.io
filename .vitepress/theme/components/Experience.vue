<script setup lang="ts">
import { data as experience } from '../experience.data'

</script>

<template>
  <div class="content-section">
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

<style scoped></style>