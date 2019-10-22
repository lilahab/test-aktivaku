import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SuiVue from 'semantic-ui-vue'
import { BProgress } from 'bootstrap-vue'
import * as VueGoogleMaps from 'vue2-google-maps'

// import { L } from 'vue2-leaflet'
// import 'leaflet/dist/leaflet.css';
Vue.component('b-progress', BProgress)
Vue.use(SuiVue);
Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'ABcdEfGhIjklmNOpqrsTUvWXyzAbcD1EfGhiJKl',
    libraries: 'places', 
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
