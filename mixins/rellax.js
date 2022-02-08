import Rellax from 'rellax'

export default {
  mounted() {
     // eslint-disable-next-line no-unused-vars
     const rellax = new Rellax('.rellax', {
      speed: 2,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }
}