<script setup lang="ts">
const { isMobile } = useDevice();
</script>

<template>
  <ClientOnly>
    <div>
      {{ isMobile }}
      <NuxtLayout :name="isMobile ? 'mobile' : 'default'">

      </NuxtLayout>
    </div>
  </ClientOnly>
</template>
