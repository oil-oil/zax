import { createApp } from 'vue'
import App from './App.vue'
import Zax from "zax"
import "zax/style.css"

const app = createApp(App).use(Zax)

app.mount('#app')
