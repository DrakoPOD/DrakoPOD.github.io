<script setup lang="ts">
import { ref, onMounted } from 'vue';

const particles = ref<HTMLElement>();

const lifeSpam = 4;
const particleCount = 10;

const newParticle = (particle: HTMLElement) => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const scale = Math.random() + 0.5;

  const lifeTime = ((Math.random() * lifeSpam) + 2) * 1000;

  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.transform = `scale(${scale})`;

  const animation = particle.animate([
    { opacity: 0, transform: `translate(0px, 0px) scale(${scale})` },
    { opacity: 1, transform: `translate(0px, -20px) scale(${scale})`, offset: 0.1 },
    { opacity: 0, transform: `translate(0px, -200px) scale(${scale})` }
  ], {
    duration: lifeTime,
    easing: 'ease-in-out',
    fill: 'forwards',
  });

  setTimeout(() => {
    animation.cancel();
    newParticle(particle)
  }, lifeTime);
};

onMounted(() => {
  const particleArea = particles.value!;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.setAttribute('class', 'particle');

    newParticle(particle);
    particleArea.appendChild(particle);
  }
})
</script>
<template>
  <div class="particle-area" ref="particles">
  </div>
</template>

<style>
.particle-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: relative;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  background-color: #ffffff44;
  box-shadow: 0 0 20px 10px #fff;
}
</style>
