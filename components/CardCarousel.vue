<script setup lang="ts">
interface DataCard {
  title: string
  description: string
  technologies: string[]
  index?: number
  url?: string
  repo?: boolean
  imgUrl?: string
}

interface Props {
  list: DataCard[]
  title: string
}

const props = defineProps<Props>()

</script>

<template>
  <div class="carousel-area">
    <div class="carousel-title">
      <h1>{{ title }}</h1>
    </div>
    <div class="carousel">
      <Card v-for="card in props.list" :key="card.title" :title="card.title" :description="card.description"
        :tags="card.technologies" :imgUrl="card.imgUrl" />
    </div>
  </div>
</template>

<style scoped>
.carousel {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
}

.carousel-title {
  padding: 10px;
}

.carousel-area h1 {
  border-bottom: 1px solid var(--cactus-900);
  padding: 10px;
}
</style>