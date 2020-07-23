<template>
    <div class="info-wrapper">
        <h1 class="city-name">{{ getCityName }}</h1>
        <p class="condition">{{ getCondition }}</p>
    </div>
</template>

<script>
export default {
  name: 'CityInformation',
  computed: {
    getCityName () {
      return this.$store.state.city
    },
    getCondition () {
      return this.$store.state.weatherForecast.forecastday[0].day.condition.text
    }
  }
}
</script>

<style>
.info-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    text-align: center;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6);
}

.city-name {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 5em;
}

.condition {
    font-size: 2.5em;
    margin: 0;
}
</style>
