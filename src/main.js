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
    },
    saveForecast (state, forecastData) {
      state.weatherForecast = forecastData
    }
  },
  actions: {
    getForecast ({ state, commit }) {
      console.log('call made')
      var route = `http://api.weatherapi.com/v1/forecast.json?key=${state.apiKey}&q=${state.city}&days=3`

      try {
        axios.get(route).then(result => {
          commit('saveForecast', result.data.forecast)
          console.log('call successful')
        })
      } catch (ex) {
        console.log(ex)
      }
    }
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
