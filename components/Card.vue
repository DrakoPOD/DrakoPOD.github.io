<script lang="ts" setup>

interface CardProps {
  title: string
  link?: string
  imgUrl?: string
  description: string
  tags: string[]
  top: number
  left: number
  zIndex: number
  index: number
}

const props = defineProps<CardProps>()
const tags = ['Vue', 'Vite', 'TypeScript', 'TailwindCSS']
</script>

<template>
  <div class="card">
    <div class="card-title">{{ props.title }}</div>
    <div class="card-image-section">
      <img v-if="props.imgUrl" class="card-image" :src="props.imgUrl" alt="an image">
      <div v-else class="image-icon">
        <Icon name="mdi:image-off" class="mdi-icon" />
      </div>
    </div>
    <div class="card-divider"></div>
    <div class="card-section">{{ props.description }}</div>
    <div class="card-divider"></div>
    <div class="card-tags-section">
      <div class="card-tag" v-for="tag in props.tags" :key="tag">{{ tag }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  top: v-bind("props.top + 'px'");
  left: v-bind("props.left + 'px'");
  z-index: v-bind("props.zIndex");
  flex-shrink: 1;
}
</style>