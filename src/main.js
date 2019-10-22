import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SuiVue from 'semantic-ui-vue'
import { BProgress } from 'bootstrap-vue'
// import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
// import { Icon } from 'leaflet'
// import 'leaflet/dist/leaflet.css'
// import * as VueGoogleMaps from 'vue2-google-maps'

Vue.component('b-progress', BProgress)
Vue.use(SuiVue);
Vue.use(BootstrapVue)
Vue.config.productionTip = false

// Vue.component('l-map', LMap);
// Vue.component('l-tile-layer', LTileLayer);
// Vue.component('l-marker', LMarker);
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyDX3SEHwFUY-k_Jp7YMp0-uTvo7up-paXM',
//     v: '3.26',
//     // libraries: 'places', 
//   },
// })

// delete Icon.Default.prototype._getIconUrl;

// Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

new Vue({
  render: h => h(App),
}).$mount('#app')
