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
    weatherForecast: {
      forecastday: [
        {
          day: {
            condition: {
              text: 'sunny'
            },
            avgtemp_f: '21',
            avghumidity: 0,
            mintemp_f: 0,
            maxtemp_f: 99,
            daily_chance_of_rain: '0'
          }
        }
      ]
    }
  },
  mutations: {
    changeCity (state, newCity) {
      state.city = newCity
    },
    saveForecast (state, d) {
      state.weatherForecast = d
    }
  },
  actions: {
    getForecastPromise ({ state, commit }) {
      var route = `http://api.weatherapi.com/v1/forecast.json?key=${state.apiKey}&q=${state.city}&days=3`

      return new Promise((resolve, reject) => {
        axios.get(route).then(result => {
          console.log(result.data.forecast)
          commit('saveForecast', result.data.forecast)
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
