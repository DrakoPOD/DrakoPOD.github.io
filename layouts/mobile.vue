<script setup lang="ts"></script>

<template>
  <div class="main-page">
    <AppHeader />
    <CardMenu />
    <div class="main-content-mobile">
      <Home :mobile="true" />
      <About :mobile="true" />
      <Experience :mobile="true" />
      <Projects :mobile="true" />
      <More :mobile="true" />
    </div>
    <SVGBackground class="background" />
  </div>
</template>