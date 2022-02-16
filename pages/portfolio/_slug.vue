<template>
  <div class="mt-[100px] container">
    <div v-if="project">

      <SectionHeader :center="true" :lines="false">
        {{project.title}}
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
        const slug = params.slug;
        const project = data[slug];
        return { project };
    },
    data() {
        return {
            isLoaded: false,
        };
    },
}
</script>
