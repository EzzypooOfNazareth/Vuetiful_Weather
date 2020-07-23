import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App.vue'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    apiKey: 'd970789ba5214b03acb164341202207',
    city: 'Sioux Falls',
    weatherForecast: {}
  },
  mutations: {
    changeCity (state, newCity) {
      state.city = newCity
    }
  },
  actions: {
    getForecastPromise ({ state }) {
      var route = `http://api.weatherapi.com/v1/forecast.json?key=${state.apiKey}&q=${state.city}&days=3`

      return new Promise((resolve, reject) => {
        axios.get(route).then(result => {
          // console.log(result.data.forecast.forecastday)
          resolve(result.data.forecast)
        }, error => {
          reject(error)
        })
      })
    }
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
