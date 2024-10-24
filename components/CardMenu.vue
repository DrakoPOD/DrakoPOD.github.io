<script setup lang="ts">
import { ref } from 'vue'

const model = useState('view', () => 0)

const items = [
  { icon: 'mdi:home', text: 'Home', value: 0 },
  { icon: 'mdi:information', text: 'About', value: 1 },
  { icon: 'mdi:account-hard-hat', text: 'Experience', value: 2 },
  { icon: 'mdi:briefcase', text: 'Projects', value: 3 },
  { icon: 'mdi:dots-vertical', text: 'More', value: 4 }
]
</script>

<template>
  <nav class="card-menu">
    <ul>
      <li v-for="item in items" :key="item.value" @click="model = item.value" class="card-item"
        :selected="model == item.value">
        <Icon name="mdi:chevron-right" class="menu-icon-arrow" />
        <Icon :name="item.icon" class="menu-icon" />
        <p>{{ item.text }}</p>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>