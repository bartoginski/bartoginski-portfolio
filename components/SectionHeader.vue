<template>
  <h2 class="font-title text-6xl mb-10 uppercase relative">
    <span :class="`z-10 relative flex items-center ${center ? 'justify-center' : ''} gap-4`"><slot></slot> <slot name="icon"></slot></span>
    <div
      :class="
        'absolute -top-3 -left-8 h-5/6 w-24 z-0 ' +
        (lines ? 'lines--light' : '')
      "
    ></div>
  </h2>
</template>

<script>

export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    lines: {
      type: Boolean,
      default: true,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped lang="scss">
.lines {
  &--dark {
  }

  &--light {
    opacity: 0.4;
    background: repeating-linear-gradient(
      -45deg,
      #4fbdba,
      #4fbdba 3px,
      rgba(0, 0, 0, 0) 3px,
      rgba(0, 0, 0, 0) 15px
    );
  }
}
</style>
