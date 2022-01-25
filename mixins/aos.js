import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init({ 
        duration: 500,
        once: true,
        delay: 300
    })
  }
}