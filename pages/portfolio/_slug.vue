<template>
  <div class="h-screen justify-center container flex flex-col">
    <NuxtLink to="/portfolio" class="flex items-center mb-8"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current text-white h-4"
      >
        <path
          d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
        /></svg
      ><span>Back to Portfolio Page</span></NuxtLink
    >
    <div v-if="project" class="grid grid-cols-1 xl:grid-cols-2 lg:gap-10 md:text-lg">
      <img
        :src="require('~/assets/images/' + project.img)"
        :alt="`${project.title} screenshot`"
        class="rounded-xl hidden xl:block"
      />
      <div>
        <SectionHeader :center="true" :lines="false">
          {{ project.title }}
        </SectionHeader>
        <img
          :src="require('~/assets/images/' + project.img)"
          :alt="`${project.title} screenshot`"
          class="rounded-xl block mb-4 xl:hidden"
        />
        <p>
          {{ project.longDescription }}
        </p>
        <div class="flex justify-between mt-8">
          <div>
            <h3 class="text-2xl">Stack:</h3>
            <ul>
              <li v-for="stack in project.stack" :key="stack">- {{ stack }}</li>
            </ul>
          </div>
          <div class="pr-10 lg:pr-16">
            <h3 class="text-2xl">Links:</h3>
            <ul class="font-title text-2xl">
              <li >
                - <a :href="project.links.github" class="hover:opacity-90 transition-opacity"> Github</a>
              </li>
              <li >
                - <a :href="project.links.projectLink" class="hover:opacity-90 transition-opacity"> WWW</a>
              </li>
            </ul>
          </div>
        </div>
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
