<template>
  <div class="mt-[100px] container">
    <NuxtLink to="/portfolio" class="flex items-center mb-8"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current text-white h-4 "
      >
        <path
          d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
        /></svg
      ><span>Back to Portfolio Page</span></NuxtLink
    >
    <div v-if="project">
      <SectionHeader :center="true" :lines="false">
        {{ project.title }}
      </SectionHeader>
      {{ project }}
    </div>
    <div v-else>
      <div class="flex items-center justify-center space-x-2 animate-pulse">
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '~/models/portfolioProjects.json'
export default {
  // eslint-disable-next-line require-await
  async asyncData({ params }) {
    const slug = params.slug
    const project = data[slug]
    return { project }
  },
  data() {
    return {
      isLoaded: false,
    }
  },
}
</script>
