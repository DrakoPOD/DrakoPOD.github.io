<script setup lang="ts">
</script>

<template>
  <div class="main-page">
    <AppHeader />
    <CardMenu />
    <div class="main-content">
      <slot></slot>
    </div>
    <SVGBackground class="background" />
  </div>
</template>