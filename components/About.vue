<script setup lang="ts">
defineProps({
  mobile: Boolean
})
</script>

<template>
  <div :class="mobile ? 'about-mobile' : 'about'">
    <h3 v-if="mobile">About me</h3>
    <p>I'm a front-end and back-end developer, I also have experience with microcontrollers. I consider myself a
      self-learner, able to quickly grasp new technologies and adapt to new situations.</p>

    <h3>Languages</h3>
    <ul>
      <li>JavaScript/TypeScript</li>
      <li>Python</li>
      <li>C++</li>
      <li>SQL</li>
    </ul>
  </div>
</template>