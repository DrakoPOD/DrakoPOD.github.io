---
home: true
---
<script setup lang="ts">
  import {ref, computed} from "vue";
  import {mdiHome, mdiInformation, mdiAccountHardHat, mdiBriefcase, mdiDotsVertical} from "@mdi/js"
  const currentPage = ref(0)
  const icon = [
    mdiHome,
    mdiInformation,
    mdiAccountHardHat,
    mdiBriefcase,
    mdiDotsVertical
  ]

  
  const title = computed(() => {
    switch (currentPage.value) {
      case 0:
        return "Home"
      case 1:
        return "About Me"
      case 2:
        return "Experience"
      case 3:
        return "Projects"
      case 4:
        return "More"
      default:
        return "Home"
    }
  })
</script>


<div class="main-page">
  <div class="main-title">
    <svg class="icon" viewBox="0 0 24 24">
    <path :d="icon[currentPage]"></path>
    </svg>
    <h1>{{ title }}</h1>
  </div>
  
  <CardMenu v-model="currentPage"></CardMenu>
  <div class="main-content">
    <Transition name="content" mode="out-in">
      <div v-if="currentPage == 0">aaaaa</div>
      <div v-else-if="currentPage == 1" class="about">
<span v-pre>
<!--@include: ./sections/aboutMe.md-->
</span>
      </div>
      <div v-else-if="currentPage == 2">
       <Experience></Experience>
      </div>
      <div v-else-if="currentPage == 3">
        <Projects></Projects>
      </div>
      <div v-else></div>
    </Transition>
  </div>
  <div class="main-content-mobile">
    <div></div>
    <div class="about">
    </div>
    <div class="experience-section">
      <Experience></Experience>
    </div>
    <div class="projects-section">
      <Projects></Projects>
    </div>
  </div>
  <SVGBackground class="background"></SVGBackground>
</div>
