// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './Store/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
let gameNya = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store,
  methods: {
    userAction: function (action) {
      console.log(action)
    }
  }
})

window.gameNya = gameNya
