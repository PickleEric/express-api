import Vue from 'vue'
import App from './App.vue'

import HelloAPI from '@/services/HelloAPI' //imports our helloapi.js to be used 
Vue.config.productionTip = false

Vue.prototype.$hello_api = HelloAPI // makes our hello_api visibale to the entire app 
new Vue({
  render: h => h(App),
}).$mount('#app')// mounts our app to be rendered and used 
