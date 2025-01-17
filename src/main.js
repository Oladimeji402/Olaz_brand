// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$swal = Swal;

app.use(createPinia())
app.use(router)
app.mount('#app')
