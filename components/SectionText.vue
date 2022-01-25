<template>
  <div>
    <SectionHeader>
      <slot name="title"></slot>
    </SectionHeader>
    <p class="text-xl">
      <slot name="text"></slot>
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
