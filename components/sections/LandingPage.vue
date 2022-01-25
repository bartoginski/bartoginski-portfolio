<template>
  <div
    class="overflow-hidden max-h-screen h-screen relative flex items-center justify-center flex-col"
  >
    <div class="blob" data-aos="zoom-in" data-aos-delay="900">
      <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 310 350"
      >
        <path
          d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"
        />
      </svg>
    </div>
    <div
      class="container flex justify-center items-center flex-col"
      data-aos="flip-up"
    >
      <h1 class="text-white text-8xl font-title">
        Bartosz Ogiński <br />Frontend Developer
      </h1>
      <h2 class="font-text text-2xl">The programmer with passion</h2>
    </div>
    <div class="absolute bottom-20">
      <ScrollIcon />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.blob {
  position: absolute;
  top: 20%;
  left: 40%;
  fill: #4fbdba;
  width: 30vmax;
  z-index: -1;
  animation: move 30s linear infinite;
  transform-origin: 50% 50%;
}

// @keyframes move {
//   0%   { transform: scale(1)   translate(10px, -30px); }
//   38%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
//   40%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
//   78%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
//   80%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
//   100% { transform: scale(1)   translate(10px, -30px); }
// }
@keyframes move {
  0% {
    transform: scale(1);
  }
  38% {
    transform: scale(0.8, 1) rotate(160deg);
  }
  40% {
    transform: scale(0.8, 1) rotate(160deg);
  }
  78% {
    transform: scale(1.1) rotate(-20deg);
  }
  80% {
    transform: scale(1.1) rotate(-20deg);
  }
  100% {
    transform: scale(1);
  }
}
</style>
