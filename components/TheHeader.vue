<template>
  <div class="fixed top-0 left-0 w-full z-50">
    <div
      class="absolute w-full h-full top-0 left-0 z-0 bg-dark-navy opacity-25"
    ></div>
    <header
      class="relative container flex items-center justify-between py-4 z-10"
    >
      <NuxtLink to="/">
        <TheLogo />
      </NuxtLink>
      <button @click="showMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current text-white h-[50px] w-[50px]"
        >
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
      </button>
    </header>
    <div
      :class="
        'menu absolute w-full left-full top-0 h-screen bg-dark-navy transition-all duration-500 transform z-50 ' +
        (displayMenu ? '-translate-x-full' : 'translate-x-0')
      "
    >
      <div class="container py-4 flex justify-between">
        <div class="flex flex-col flex-gap gap-[60px] pt-24 sm:pt-40">
          <NuxtLink
            to="/"
            class="uppercase text-7xl font-title"
            @click.native="hideMenu"
            >Home</NuxtLink
          >
          <!--<NuxtLink
            to="/blog"
            class="uppercase text-7xl font-title"
            @click.native="hideMenu"
            >Blog</NuxtLink
          > -->
          <NuxtLink
            to="/contact"
            class="uppercase text-7xl font-title"
            @click.native="hideMenu"
            >Contact</NuxtLink
          >
          <!-- TODO: Edit link's text -->
          <NuxtLink
            to="/portfolio"
            class="uppercase text-7xl font-title"
            @click.native="hideMenu"
            >Portfolio (In development)🚧</NuxtLink
          >
        </div>
        <div class="flex flex-col">
          <button @click="hideMenu">
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
  methods: {
    hideMenu() {
      this.displayMenu = false
    },
    showMenu() {
      this.displayMenu = true
    },
  },
}
</script>

<style lang="scss" scoped>
.menu a {
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
