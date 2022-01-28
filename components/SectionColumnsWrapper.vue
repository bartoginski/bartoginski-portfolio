<template>
  <section
    class="relative z-10 container grid grid-cols-1 md:grid-cols-2 gap-16 py-10 md:py-24"
  >
    <div data-aos="fade-right">
      <slot name="left"></slot>
    </div>
    <div data-aos="fade-left">
      <slot name="right"></slot>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
