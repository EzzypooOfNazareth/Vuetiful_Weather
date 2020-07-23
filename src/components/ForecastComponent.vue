<template>
    <div class="forecast-container">
        <WeatherInformation></WeatherInformation>
        <h1>{{ currentTemp  }}</h1>
        <CityInformation></CityInformation>
    </div>
</template>

<script>
import WeatherInformation from './WeatherInformation.vue'
import CityInformation from './CityInformation.vue'

export default {
  name: 'ForecastComponent',
  components: {
    WeatherInformation,
    CityInformation
  },
  computed: {
    currentTemp () {
      return Math.trunc(this.$store.state.weatherForecast.forecastday[0].day.avgtemp_f)
    }
  }
}
</script>

<style>
.forecast-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    font-weight: bold;
    font-size: 25em;
    color: white;
    margin: -75px 0;
    padding: 0;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6);
}
</style>
