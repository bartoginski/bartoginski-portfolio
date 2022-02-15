<template>
  <div @click="showModal">
    <img src="~/assets/images/portfolio/depressout.png" alt="" />
    <div>
      <a href="https://depressout.pl">Depressout</a>
      <p>
        Projekt społeczny stworzony na potrzeby olimpiady Zwolnieni Z Teorii.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDisplayedModal: false,
      propsForModal: {
        hideModal: this.hideModal,
        imgPath: '~/assets/images/portfolio/depressout.png',
        longDescription:
          'Sit irure commodo dolor aliqua ex ea non. Magna eiusmod voluptate occaecat sint mollit Lorem mollit excepteur. Ea amet consequat cillum esse dolor Lorem ea veniam culpa enim. Laborum culpa eiusmod excepteur in ex irure id non laboris officia irure excepteur ipsum ea proident. Pariatur occaecat deserunt aute elit quis fugiat nostrud. Cupidatat excepteur adipisicing enim aliqua id officia ad nisi. Qui ut in non consequat commodo aute pariatur laborum ex nostrud consectetur deserunt consectetur nostrud. Exercitation aliqua deserunt aliqua quis ex dolore elit. Dolore sint deserunt fugiat Lorem ipsum dolor duis amet in commodo consequat qui enim. Laborum ullamco minim duis consectetur ipsum sint magna excepteur veniam et irure ut exercitation proident.',
        title: 'Depressout',
      },
    }
  },
  methods: {
    showModal() {
      this.isDisplayedModal = true
    },
    hideModal() {
      this.isDisplayedModal = false;
    },
  },
}
</script>
<style lang="scss"></style>
