<template>
  <div class="font-text text-white overflow-hidden">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
}
</script>

<style>
body {
  @apply bg-dark-navy;
}
</style>
