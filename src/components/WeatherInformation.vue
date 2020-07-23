<template>
    <div class="information-container">
        <div class="icon-wrapper">
            <div class="icon">
                <img class="humid-icon" src="../assets/icons/humidity-icon.png" />
                <p>{{ getHumid }}%</p>
            </div>
            <div class="icon">
                <img src="../assets/icons/rain-icon.png" />
                <p>{{ getRain }}%</p>
            </div>
        </div>
        <p>
            Lo: {{ getLo }} - Hi: {{ getHi }}
        </p>
    </div>
</template>

<script>
export default {
  name: 'WeatherInformation',
  computed: {
    getHumid () {
      return this.$store.state.weatherForecast.forecastday[0].day.avghumidity
    },
    getLo () {
      return this.$store.state.weatherForecast.forecastday[0].day.mintemp_f
    },
    getHi () {
      return this.$store.state.weatherForecast.forecastday[0].day.maxtemp_f
    },
    getRain () {
      return this.$store.state.weatherForecast.forecastday[0].day.daily_chance_of_rain
    }
  }
}
</script>

<style>
.information-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 30px;
    margin: 0;
    box-sizing: border-box;
    padding: 0 10px;
}

.icon-wrapper {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1em;
}

.icon {
    display: flex;
    align-items: center;
}

img {
    width: 40px;
    height: 40px;
    margin-right: 5px;
}

.humid-icon {
    width: 34px;
    height: 34px;
}

p {
    font-size: 0.8em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}
</style>
