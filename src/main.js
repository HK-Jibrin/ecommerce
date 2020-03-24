import Vue from 'vue'
import App from './App.vue'
import myRoutes from './router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCarousel from 'vue-carousel'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueCarousel);

new Vue({
  router: myRoutes,
  render: h => h(App)
}).$mount('#app')
