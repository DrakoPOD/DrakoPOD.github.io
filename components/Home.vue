<script setup lang="ts">
const texts = ref<string[]>([])
const currentText = ref<string>('')
const queueText = [
  'Hello!!!',
  'My name is Emmanuel',
  'I am a web developer',
  'Welcome to my portfolio'
]
let currentTime: NodeJS.Timeout;

const writing = () => {
  if (queueText.length > 0) {
    currentTime = setInterval(() => {
      if (queueText[0].length > 0) {
        currentText.value += queueText[0].charAt(0)
        queueText[0] = queueText[0].substring(1)
      } else {
        clearInterval(currentTime)
        queueText.shift()
        texts.value.push(currentText.value)
        currentText.value = ''

        setTimeout(() => {
          writing()
        }, 1000)
      }
    }, 100)
  }
}

onMounted(() => {
  setTimeout(() => {
    writing()
  }, 1500)
})
</script>

<template>
  <div class="home">
    <div class="text-area">
      <TransitionGroup name="slide" tag="ul">
        <li key="one">----------------------------------------</li>
        <li v-for="text in texts" :key="text">$&gt; {{ text }}</li>
        <li key="last">----------------------------------------</li>
      </TransitionGroup>

      <div class="input-area">user@root&gt;{{ currentText }}<span class="blink-cursor">_</span> </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}

ul {
  list-style: none;
  padding: 0;

  grid-area: list;
}

.text-area {
  display: grid;

  grid-template-areas: 'list'
    'input';
}

.input-area {
  grid-area: input;
}

.blink-cursor {
  animation: blink 1s infinite;
}

@keyframes blink {

  0%,
  100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}
</style>