<template>
  <div class="body-container" :style="{ backgroundImage:  `url(${bgImage})` }">
      <div class="overlay">
          <h1 style="font-weight: bold; font-size: 36px; color: white;">Test</h1>
      </div>
  </div>
</template>

<script>
import Sunny from '../assets/Sunny-photo.jpg'
import Cloudy from '../assets/Cloudy-photo.jpg'
import Rainy from '../assets/Rainy-photo.jpg'
import Stormy from '../assets/Stormy-photo.jpg'
import Snowy from '../assets/Snowy-photo.jpg'

export default {
  name: 'Body',
  data () {
    return {
      bgImage: Sunny
    }
  },
  created () {
    this.$store.dispatch('getForecast')
  },
  mounted () {
    var condition = this.$store.state.weatherForecast.forecastday[0].day.condition.text
    this.determineImage(condition.toLowerCase())
  },
  methods: {
    determineImage (i) {
      if (i.includes('sunny')) {
        this.bgImage = Sunny
      } else if (i.includes('cloudy')) {
        this.bgImage = Cloudy
      } else if (i.includes('rain')) {
        this.bgImage = Rainy
      } else if (i.includes('thunder') || i.includes('storm')) {
        this.bgImage = Stormy
      } else {
        this.bgImage = Snowy
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
    background-color: rgba(0, 0, 0, 0.3);
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
