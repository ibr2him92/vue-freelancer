// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store/index'
import vueVimeoPlayer from 'vue-vimeo-player'

Vue.use(vueVimeoPlayer)



Vue.use(Vuetify,{
  rtl:true,
  theme: {
    primary: "#26A69A",
    secondary: "#00695C",
    accent: "#4527A0",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  },
  
  })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
