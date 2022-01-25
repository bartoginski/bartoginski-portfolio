<template>
  <SectionColumnsWrapper>
    <template #left>
      <SectionText>
        <template #title> what can I do? </template>
        <template #text>
          Mainly, I write pages with vue and nuxt.js, But I can also makes blogs
          on wordpress. You may check my projects on my <a class="text-primary" href="https://www.github.com">Github</a> and in the
          <NuxtLink to="/">portfolio page</NuxtLink>.
        </template>
      </SectionText>
    </template>
    <template #right>
        <img src="~/assets/images/what_can_i.svg" alt="nuxt logo">
    </template>
  </SectionColumnsWrapper>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
