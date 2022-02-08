<template>
  <div
    class="fixed top-0 left-0 w-full flex items-center justify-between pt-8 px-5 z-50"
  >
    <NuxtLink to="/">
      <h2>LOGO</h2>
    </NuxtLink>
    <button @click="displayMenu = true">
      <svg
        class="cursor-pointer"
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="69"
          height="69"
          rx="9.5"
          stroke="#E8F1F5"
        />
        <rect
          x="8.75"
          y="17.5"
          width="50.75"
          height="7"
          rx="3.5"
          fill="#E8F1F5"
        />
        <rect
          x="8.75"
          y="31.5"
          width="50.75"
          height="7"
          rx="3.5"
          fill="#E8F1F5"
        />
        <rect
          x="8.75"
          y="45.5"
          width="50.75"
          height="7"
          rx="3.5"
          fill="#E8F1F5"
        />
      </svg>
    </button>
    <div
      :class="
        'absolute w-full left-full top-0 h-screen bg-dark-navy transition-all duration-500 transform ' +
        (displayMenu ? '-translate-x-full' : 'translate-x-0')
      "
    >
      <div class="container py-10 flex justify-between">
        <div class="flex flex-col flex-gap gap-[60px] pt-24 sm:pt-40">
          <NuxtLink to="/" class="uppercase text-7xl font-title">Home</NuxtLink>
          <NuxtLink to="/blog" class="uppercase text-7xl font-title"
            >Blog</NuxtLink
          >
          <NuxtLink to="/contact" class="uppercase text-7xl font-title"
            >Contact</NuxtLink
          >
          <NuxtLink to="/portfolio" class="uppercase text-7xl font-title"
            >Portfolio</NuxtLink
          >
        </div>
        <div class="flex flex-col">
          <button @click="displayMenu = false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current text-white h-[50px] w-[50px]"
            >
              <path
                d="M20.197 2.837l.867.867-8.21 8.291 8.308 8.202-.866.867-8.292-8.21-8.23 8.311-.84-.84 8.213-8.32-8.312-8.231.84-.84 8.319 8.212 8.203-8.309zm-.009-2.837l-8.212 8.318-8.31-8.204-3.666 3.667 8.321 8.24-8.207 8.313 3.667 3.666 8.237-8.318 8.285 8.204 3.697-3.698-8.315-8.209 8.201-8.282-3.698-3.697z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayMenu: false,
    }
  },
}
</script>

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
    height: 5px;
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
