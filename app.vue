<script setup lang="ts">
const active = useState('view', () => 0)
</script>

<template>
  <ClientOnly>
    <div>
      <NuxtLayout>
        <Transition name="content" mode="out-in">
          <Home v-if="active == 0" />
          <About v-else-if="active == 1" />
          <Experience v-else-if="active == 2" />
          <Projects v-else-if="active == 3" />
          <More v-else />
        </Transition>
      </NuxtLayout>
    </div>
  </ClientOnly>
</template>
