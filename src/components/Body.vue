<template>
  <div class="body-container" :style="{ backgroundImage:  `url(${getImage})` }">
      <div class="overlay">
          <ForecastComponent></ForecastComponent>
      </div>
  </div>
</template>

<script>
import ForecastComponent from './ForecastComponent.vue'

// Background image imports
import Sunny from '../assets/Sunny-photo.jpg'
import Cloudy from '../assets/Cloudy-photo.jpg'
import Rainy from '../assets/Rainy-photo.jpg'
import Stormy from '../assets/Stormy-photo.jpg'
import Snowy from '../assets/Snowy-photo.jpg'

export default {
  name: 'Body',
  components: {
    ForecastComponent
  },
  created () {
    this.$store.dispatch('getForecastPromise')
  },
  computed: {
    getImage () {
      return this.determineImage(this.$store.state.weatherForecast.forecastday[0].day.condition.text.toLowerCase())
    }
  },
  methods: {
    determineImage (i) {
      if (i.includes('sunny')) {
        return Sunny
      } else if (i.includes('cloudy')) {
        return Cloudy
      } else if (i.includes('rain')) {
        return Rainy
      } else if (i.includes('thunder') || i.includes('storm')) {
        return Stormy
      } else {
        return Snowy
      }
    }
  }
}
</script>

<style scoped>
.body-container {
    width: 100%;
    height: calc(100vh - 67.5px);
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    animation: fadeIn 3s ease;
}

.overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    25% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
