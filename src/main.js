import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCarousel from 'vue-carousel'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueCarousel);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
