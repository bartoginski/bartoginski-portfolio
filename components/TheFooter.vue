<template>
  <footer
    class="flex-col-reverse sm:flex-row border-4 border-light-gray bg-dark-navy flex text-light-gray relative mt-10"
  >
    <div
      class="flex justify-center items-center py-8 sm:px-12 sm:py-0 border-t-4 sm:border-t-0 sm:border-r-4 sm:border-b-0 border-light-gray"
    >
      <span>Made by Bartosz Ogiński - 2022 </span>
    </div>
    <div class="flex px-5 py-10 justify-between w-full md:w-3/4">
      <ul class="flex flex-col gap-6 justify-center h-full">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <!--
        <li>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </li>
        -->
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

<style lang="scss" scoped>
a {
  position: relative;
  display: inline-block;
  padding: 10px;
  text-shadow: none;
  -webkit-transition: color 0.3s;
  -moz-transition: color 0.3s;
  transition: color 0.3s;

  &:before,
  &:after {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    content: '';
    opacity: 0;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    -moz-transition: opacity 0.3s, -moz-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  &:before {
    top: 0;
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  &:after {
    bottom: 0;
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    transform: translateY(10px);
  }

  &:hover,
  &:after {
    color: #fff;
  }
  &:hover::before,
  &:focus::before,
  &:hover::after,
  &:focus::after {
    opacity: 1;
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    transform: translateY(0px);
  }
}
</style>
