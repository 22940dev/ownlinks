import { createApp } from 'vue'
import App from './App.vue'
import '/src/assets/css/tailwind.css'

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare,faInstagram,faDev,faLinkedin,faGithub,faYoutube,faMedium } from '@fortawesome/free-brands-svg-icons'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {StoryblokVue} from 'storyblok-vue'


library.add(faAngleRight, faFacebookSquare, faInstagram, faDev, faLinkedin, faGithub, faYoutube, faMedium)



const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.use(StoryblokVue)
app.mount('#app')
