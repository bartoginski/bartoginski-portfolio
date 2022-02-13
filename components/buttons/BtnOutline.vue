<template>
  <button
    class="relative transition-all duration-300 p-4 font-title text-2xl border-4 border-primary uppercase cursor-pointer w-full md:w-[170px] xl:w-[210px]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BtnOutline',
}
</script>

<style scoped>
button:after {
  content: "";
  position: absolute;
	width: 100%;
	height: 0;
	top: 0;
	left: 0;
	z-index: -1;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
	@apply bg-primary;
}

button:hover,
button:active {
	@apply text-dark-navy;
}

button:hover:after,
button:active:after {
	height: 100%;
}
</style>
