import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Button from 'ant-design-vue/lib/button'
import 'ant-design-vue/dist/antd.css'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.component(Button.name, Button)
Vue.prototype.$liff = window.liff
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
