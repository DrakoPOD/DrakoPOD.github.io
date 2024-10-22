<script setup lang="ts">
import { ref } from 'vue'

import { mdiHome, mdiInformation, mdiAccountHardHat, mdiBriefcase, mdiDotsVertical, mdiChevronRight } from '@mdi/js'

const model = defineModel({ default: 0 })

const items = [
  { icon: mdiHome, text: 'Home', value: 0 },
  { icon: mdiInformation, text: 'About', value: 1 },
  { icon: mdiAccountHardHat, text: 'Experience', value: 2 },
  { icon: mdiBriefcase, text: 'Projects', value: 3 },
  { icon: mdiDotsVertical, text: 'More', value: 4 }
]
</script>

<template>
  <nav class="card-menu">
    <ul>
      <li v-for="item in items" :key="item.value" @click="model = item.value" class="card-item"
        :selected="model == item.value">
        <svg class="menu-icon-arrow" viewBox="0 0 24 24">
          <path :d="mdiChevronRight"></path>
        </svg>
        <svg class="menu-icon" viewBox="0 0 24 24">
          <path :d="item.icon"></path>
        </svg>
        <p>{{ item.text }}</p>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>