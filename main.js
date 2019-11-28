import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// import requireurl from '/requist/requist.js'

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
