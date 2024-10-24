<script setup lang="ts">

const active = useState('view', () => 0)
const icons = ['mdi:home', 'mdi:information', 'mdi:account-hard-hat', 'mdi:briefcase', 'mdi:dots-vertical']
</script>

<template>
  <div class="main-title">
    <Icon :name="icons[active | 0]" class="icon-title" />
    <div class="main-title">asasasas</div>
  </div>
</template>
