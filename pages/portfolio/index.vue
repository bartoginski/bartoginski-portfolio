<template>
  <div class="container mt-[100px]">
    <SectionHeader :center="true" :lines="false">Portfolio Projects</SectionHeader>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div
        v-for="(projectObject, id) in projectsList"
        :key="projectObject.title"
      >
        <NuxtLink :to="`/portfolio/${id}`"
          ><img
            :src="require('~/assets/images/' + projectObject.img)"
            :alt="`${projectObject.title} screenshot`"
        /></NuxtLink>
        <div class="mt-4">
          <NuxtLink :to="`/portfolio/${id}`" class="font-title text-4xl">{{
            projectObject.title
          }}</NuxtLink>
          <p>
            Projekt społeczny stworzony na potrzeby olimpiady Zwolnieni Z
            Teorii.
          </p>
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
