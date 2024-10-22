<script setup lang="ts">
import { ref, computed } from 'vue'

import { mdiArrowLeftBoldBox, mdiArrowRightBoldBox, mdiViewGrid, mdiWindowRestore, mdiGithub } from '@mdi/js'

import Card from './Card.vue'


interface Position {
  top: number
  left: number
  zIndex: number
}

interface DataCard {
  title: string
  description: string
  technologies: string[]
  index?: number
  url?: string
  repo?: boolean
}

interface Props {
  list: DataCard[]
}

const props = defineProps<Props>()

const viewIsGrid = ref(false)
const tempExp = ref([...props.list])

const container = computed(() => {
  let exp: Array<DataCard & Position> = [];

  for (let i = 0; i < tempExp.value.length && i < 4; i++) {
    exp.push({
      ...tempExp.value[i],
      top: i * -50,
      left: i * 20,
      zIndex: tempExp.value.length - i
    })
  }

  return exp;
})

const moveNext = () => {
  if (tempExp.value.length < 1) return;
  tempExp.value.push(tempExp.value.shift() as DataCard);
}

const movePrev = () => {
  if (tempExp.value.length < 1) return;
  tempExp.value.unshift(tempExp.value.pop() as DataCard);
}

const changeView = () => {
  viewIsGrid.value = !viewIsGrid.value;
}

</script>

<template>
  <div class="cards-area">
    <Transition name="view" mode="out-in">
      <div class="grid-view" v-if="viewIsGrid">
        <div class="card-grid">
          <Card v-for="exp, i in container" :key="exp.title" :title="exp.title" :description="exp.description"
            :tags="exp.technologies" :top="exp.top" :left="exp.left" :zIndex="exp.zIndex" :index="i"></Card>
        </div>
        <button @click="changeView" class="button">
          <svg class="button-icon" viewBox="0 0 24 24">
            <path :d="mdiWindowRestore"></path>
          </svg>
        </button>
      </div>

      <div v-else class="pile-view">

        <TransitionGroup name="pile" class="pile-card" tag="div">
          <Card v-for="exp, i in container" :key="exp.title" :title="exp.title" :description="exp.description"
            :tags="exp.technologies" :top="exp.top" :left="exp.left" :zIndex="exp.zIndex" :index="i"></Card>
        </TransitionGroup>
        <div class="button-group">
          <button @click="movePrev()" class="button">
            <svg class="button-icon" viewBox="0 0 24 24">
              <path :d="mdiArrowLeftBoldBox"></path>
            </svg>
          </button>
          <button @click="changeView" class="button">
            <svg class="button-icon" viewBox="0 0 24 24">
              <path :d="mdiViewGrid"></path>
            </svg>
          </button>
          <button @click="moveNext" class="button">
            <svg class="button-icon" viewBox="0 0 24 24">
              <path :d="mdiArrowRightBoldBox"></path>
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.cards-area {
  height: 100%;
}

.pile-card {
  height: 590px;
  width: 620px;
}

.button-icon {
  height: 100px;
  width: 100px;
}

.button-icon path {
  fill: var(--cactus-900);
}

.button-group {
  display: flex;
  grid-area: buttons;
  justify-content: space-around;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
}

.button {
  border: none;
  background-color: var(--cactus-100);
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.5);
}

.button:hover {
  background-color: var(--cactus-200);
  cursor: pointer;
}

.pile-move,
/* apply transition to moving elements */
.pile-enter-active,
.pile-leave-active {
  transition: all 0.5s ease;
}

.pile-enter-from,
.pile-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.pile-leave-active {
  position: absolute;
}

.grid-view {
  display: grid;
  grid-template-areas: 'buttons cards';
  align-items: center;
  height: 100%;
  gap: 1rem;
}

.card-grid {
  grid-area: cards;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
  height: 100%;
  width: 100%;
  gap: 1rem;
  padding: 10px;
  border-bottom: 5px solid var(--cactus-900);
  border-top: 5px solid var(--cactus-900);
}

.pile-view {
  display: grid;
  grid-template-areas: 'buttons cards';
  justify-items: center;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 1rem;
}

.view-move,
.view-enter-active,
.view-leave-active {
  transition: all 0.3s ease;
}

.view-enter-from {
  opacity: 0;
  transform: translateX(-30px);

}

.view-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.view-leave-active {
  position: relative;
}
</style>