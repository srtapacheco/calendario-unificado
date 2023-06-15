import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './global.css'
import "@fontsource/quicksand/700.css";
import "@fontsource/quicksand/400.css";

const app = createApp(App)

app.use(router)

app.mount('#app')
