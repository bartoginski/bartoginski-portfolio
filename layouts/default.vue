<template>
  <div class="font-text text-white overflow-hidden">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import aosMixin from '~/mixins/aos'

export default Vue.extend({
  mixins: [aosMixin],
})
</script>

<style>
body {
  @apply bg-dark-navy;
}
</style>
