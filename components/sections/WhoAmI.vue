<template>
  <SectionColumnsWrapper :is-reversed="true">
    <template #left>
      <img src="~/assets/images/who_am_i.svg" alt="programmer" />
    </template>
    <template #right>
      <SectionText>
        <template #title> Who AM I? </template>
        <template #text>
          Currently, I am a high school student in the field of IT technician. I
          spend a considerable amount of my free time on expanding my knowledge
          in the field of IT. I worked in
          <a class="text-primary" href="https://nolimitplan.pl/"
            >Fitgenerator</a
          >
          and <a class="text-primary" href="https://imado.co/">IMADO</a>, and
          now I'm working in
          <a class="text-primary" href="https://www.softgorillas.com/"
            >SoftGorillas</a
          >
          as frontend developer.
          <img
            class="absolute -bottom-8 right-2"
            src="~/assets/images/dots.svg"
            alt=""
          />
        </template>
      </SectionText>
    </template>
  </SectionColumnsWrapper>
</template>

<style lang="scss" scoped></style>
