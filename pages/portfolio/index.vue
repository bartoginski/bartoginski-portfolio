<template>
  <div class="container mt-[100px]">
    <SectionHeader :center="true" :lines="false"
      >Portfolio Projects</SectionHeader
    >
    <div class="flex flex-col gap-10 sm:gap-12 md:gap-20 lg:gap-32">
      <!-- Post cards-->
      <div
        v-for="(projectObject, id) in projectsList"
        :key="projectObject.title"
        data-aos="flip-up"
        class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 text-xl border-b border-primary md:border-0"
      >
        <NuxtLink :to="`/portfolio/${id}`"
          ><img
            :src="require('~/assets/images/' + projectObject.img)"
            :alt="`${projectObject.title} screenshot`"
            class="rounded-xl"
        /></NuxtLink>
        <div :class="`mt-4 ${id % 2 !== 0 ? 'md:order-first' : ''}`">
          <h3 class="font-title text-4xl">{{ projectObject.title }}</h3>
          <p>
            {{ projectObject.shortDescription }}
          </p>

          <NuxtLink
            :to="`/portfolio/${id}`"
            class="block mt-6 mb-4 md:mb-0 text-primary font-title text-2xl text-right md:text-left hover:animate-pulse"
            >Read More</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from '~/models/portfolioProjects.json'

export default {
  computed: {
    projectsList() {
      return data
    },
  },
}
</script>

<style lang="scss" scoped></style>
