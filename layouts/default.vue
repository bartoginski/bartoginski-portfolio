<template>
  <div class="font-text text-white overflow-hidden">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
<script>
import aosMixin from '~/mixins/aos'
import rellaxMixin from '~/mixins/rellax'
export default {
  mixins: [aosMixin, rellaxMixin],
}
</script>

<style>
body {
  @apply bg-dark-navy;
}
</style>
