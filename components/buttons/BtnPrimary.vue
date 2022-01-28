<template>
  <button
    class="relative transition-all duration-300 p-4 font-title text-2xl border-4 text-dark-navy border-primary uppercase cursor-pointer"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BtnPrimary',
}
</script>

<style scoped>
button:after {
  content: "";
  position: absolute;
	width: 100%;
	height: 100%;
	bottom: 0;
	left: 0;
	z-index: -1;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
	@apply bg-primary;
}

button:hover {
	@apply text-white;
}

button:hover:after,
button:active:after {
	height: 0%;
}
</style>
