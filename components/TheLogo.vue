<template>
  <div>
    <div class="justify-center items-center text-4xl flex sm:hidden">
      <div
        class="o h-[25px] w-[25px] rounded-lg border-4 border-primary mx-1"
      ></div>

      <span>GI</span>
    </div>
    <div class="justify-center items-center text-4xl hidden sm:flex">
      <span>BART</span>
      <div
        class="o h-[25px] w-[25px] rounded-lg border-4 border-primary mx-1"
      ></div>
      <span>GINSKI</span>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.o {
  animation: rotate-o 4.5s linear infinite backwards;
}

@keyframes rotate-o {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
