<template>
  <div class="fix-position">
    <div class="content-text">
      <div class="main-text message">{{ greet[0] }}</div>
    </div>
    <div class="mirror-content-text ">
      <div class="mirror-text message">
        <span class="text-gradient">

          {{ greet[0] }}
        </span>
      </div>
    </div>
    <!-- <Arc class="wave"/> -->
  </div>
  <Particle />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Particle from './Particle.vue';

const greet = ref([
  'Hello I\'m dev',
  'I love to code',
  'I love to learn new things',
])

</script>

<style scoped>
.fix-position {
  position: relative;
  height: 0px;
  width: 0px;
}

.content-text {
  width: fit-content;
  position: relative;
  transform: translate(-50%, -100%);
  text-align: center;
  overflow: hidden;
  font-size: 2rem;
  height: 2rem;
  visibility: hidden;

}

.mirror-content-text {
  width: fit-content;
  position: relative;
  transform: translate(-50%, -100%);
  text-align: center;
  overflow: hidden;
  font-size: 2rem;
  height: 2rem;
  visibility: hidden;
}

.message {
  width: 300px;
  position: relative;
  color: white;
  font-family: monospace;
}

.main-text {
  animation: textApear 2s ease-in 1s 1 forwards normal;
}

.mirror-text {
  transform: scale(1, -1);
  animation: textMirrorApear 2s ease-in 1s 1 forwards normal;
}

.text-gradient {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.356), rgba(255, 255, 255, 0.123), transparent, transparent);
  background-clip: text;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}

@keyframes textApear {
  0% {
    top: 100%;
    visibility: visible;

  }

  100% {
    visibility: visible;
    top: 0;
  }
}

@keyframes textMirrorApear {
  0% {
    top: -100%;
    visibility: visible;
  }

  100% {
    visibility: visible;
    top: 0;
  }
}
</style>
