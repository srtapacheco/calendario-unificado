import { createApp } from 'vue'
import App from './App.vue'
import './global.css'
import '@fortawesome/fontawesome-free/css/all.css';
import '@mdi/font/css/materialdesignicons.css';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
// import '@phosphor-icons/vue';

let app=createApp(App)
app.use(VCalendar, {})
app.mount('#app')