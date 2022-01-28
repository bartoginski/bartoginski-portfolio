<template>
  <footer
    class="
      flex-col-reverse
      sm:flex-row
      border-4 border-light-gray
      bg-dark-navy
      flex
      text-light-gray
      relative
      mt-10
    "
  >
    <div
      class="
        flex
        justify-center
        items-center
        py-8
        sm:px-12 sm:py-0
        border-t-4
        sm:border-t-0 sm:border-r-4 sm:border-b-0
        border-light-gray
      "
    >
      <span>Made by @bartoginski 2022 </span>
    </div>
    <div class="flex px-5 py-10 justify-between w-full md:w-3/4">
      <ul class="flex flex-col gap-6 justify-center h-full">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/portfolio">Portfolio</NuxtLink>
        </li>
      </ul>
      <div class="flex flex-col justify-between">
        <a class="text-white" href="mailto:bartoginski@outlook.com"
          >bartoginski@outlook.com</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
