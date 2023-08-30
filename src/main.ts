import './assets/main.css'
import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import { createHead } from '@vueuse/head'

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(hljsVuePlugin)

app.use(createHead())

app.mount('#app')

export default app