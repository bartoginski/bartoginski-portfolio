<template>
  <section class="container py-10 md:py-24 relative">
    <div class="flex flex-col justify-center items-center relative z-10">
      <SectionHeader data-aos="fade-down" :lines="false"
        >Do you have an idea for a project?</SectionHeader
      >
      <p class="text-xl md:text-center" data-aos="fade-down">
        I am willing to cooperate on new projects, so check out my portfolio, if
        you would be<br />
        interested in working with me, just email me.
      </p>
      <div class="flex flex-col md:flex-row gap-8 md:gap-20 mt-20">
        <NuxtLink to="/portfolio" data-aos="fade-right" data-aos-delay="500"
          ><BtnOutline>Check portfolio</BtnOutline></NuxtLink
        >
        <NuxtLink to="/contact" data-aos="fade-left" data-aos-delay="500"
          ><BtnPrimary>Contact me!</BtnPrimary></NuxtLink
        >
      </div>
    </div>

    <div
      class="hidden sm:block -bottom-24 absolute -left-1/4 w-screen -z-50 origin-bottom-right"
    >
      <img src="~/assets/images/contact_lines.svg" alt="" />
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
