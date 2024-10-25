<script setup lang="ts">
defineProps({
  mobile: Boolean
})

const active = useState('view', () => 0)
const title = [{ icon: 'mdi:home', title: 'Home' }, { icon: 'mdi:information', title: 'About me' }, { icon: 'mdi:account-hard-hat', title: 'Experience' }, { icon: 'mdi:briefcase', title: 'Projects' }, { icon: 'mdi:dots-vertical', title: 'More' }]
</script>

<template>
  <div class="main-title" v-if="!mobile">
    <Icon :name="title[active | 0].icon" class="icon-title" />
    <h1 class="main-title">{{ title[active].title }}</h1>
  </div>
  <div class="main-title" v-else>
    <Icon name="mdi:briefcase" class="icon-title
    -mobile" />
    <h1 class="main-title">Portfolio</h1>
  </div>
</template>

<style scoped>
h1 {
  border: none;
}
</style>