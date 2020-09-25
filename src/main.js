import Vue from 'vue'
import App from './App.vue'
import JsonViewer from 'vue-json-viewer'

Vue.use(JsonViewer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
