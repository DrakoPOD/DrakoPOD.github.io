<script setup lang="ts">
const active = useState('view', () => 0)
</script>

<template>
  <div>
    <NuxtLayout>
      <Home v-if="active == 0" />
      <About v-else-if="active == 1" />
      <Experience v-else-if="active == 2" />
      <Projects v-else-if="active == 3" />
      <div v-else></div>
    </NuxtLayout>
  </div>
</template>
