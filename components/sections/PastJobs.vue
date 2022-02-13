<template>
  <section class="py-20 w-full relative my-20 sm:my-10">
    <div class="pattern w-full h-full absolute z-0 top-0 left-0"></div>
    <div class="container relative z-10">
      <div data-aos="fade-down">
        <SectionHeader :center="true" :lines="false">My Past Jobs</SectionHeader>
        <p class="text-center text-xl">
          I have been gathering front end experience in several companies
        </p>
      </div>
      <div
        class="mt-10 sm:mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 items-center justify-items-center"
      >
        <a href="https://imado.co/">
          <img
            class="w-56"
            data-aos="fade-right"
            src="~/assets/images/imado_logo.svg"
            alt=""
          />
        </a>
        <a href="https://nolimitplan.pl/">
          <img
            class="w-56"
            data-aos="fade-left"
            src="~/assets/images/nolimit_logo.png"
            alt=""
          />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pattern {
  background-color: #4fbdba;
  opacity: 0.5;
  background-image: linear-gradient(
      30deg,
      #072227 12%,
      transparent 12.5%,
      transparent 87%,
      #072227 87.5%,
      #072227
    ),
    linear-gradient(
      150deg,
      #072227 12%,
      transparent 12.5%,
      transparent 87%,
      #072227 87.5%,
      #072227
    ),
    linear-gradient(
      30deg,
      #072227 12%,
      transparent 12.5%,
      transparent 87%,
      #072227 87.5%,
      #072227
    ),
    linear-gradient(
      150deg,
      #072227 12%,
      transparent 12.5%,
      transparent 87%,
      #072227 87.5%,
      #072227
    ),
    linear-gradient(
      60deg,
      #07222777 25%,
      transparent 25.5%,
      transparent 75%,
      #07222777 75%,
      #07222777
    ),
    linear-gradient(
      60deg,
      #07222777 25%,
      transparent 25.5%,
      transparent 75%,
      #07222777 75%,
      #07222777
    );
  background-size: 70px 123px;
  background-position: 0 0, 0 0, 35px 61px, 35px 61px, 0 0, 35px 61px;
}
</style>
