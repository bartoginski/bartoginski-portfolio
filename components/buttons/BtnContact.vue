<template>
  <a :href="link">
    <button
      :class="`relative flex items-center justify-center gap-2 py-4 w-[170px] xl:w-[210px] font-title border-primary border-4 text-2xl xl:text-3xl hover:bg-primary transition-colors duration-500`"
    >
      <slot name="icon" class="h-4"></slot>
      <span>
        <slot name="text"></slot>
      </span>
    </button>
  </a>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      default: '#',
    },
  },
}
</script>
