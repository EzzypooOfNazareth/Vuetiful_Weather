<template>
    <header class="header-banner">
        <img alt="Veutiful Logo" src="../assets/Veutiful-Logo.png" />

        <input @keyup.enter="submitWeather" v-model="city" id="weather_input" placeholder="Enter city name..." type="text" maxlength="25" />
    </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      city: ''
    }
  },
  methods: {
    submitWeather () {
      this.$store.commit('changeCity', this.city)
      // console.log(this.$store.state)
      this.$store.dispatch('getForecastPromise').then(result => {
        // console.log(result)
      })

      this.city = ''
    }
  }
}
</script>

<style scoped>
.header-banner {
    position: relative;
    z-index: 999;
    box-sizing: border-box;
    width: 100%;
    height: 67.5px;
    padding: 15px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.header-banner img {
    width: 150px;
    height: auto;
}

.header-banner input {
    border: 1px solid gray;
    outline: none;
    border-radius: 10px;
    width: 200px;
    padding: 5px 10px;
    font-family: 'Rubik', sans-serif;
    font-style: italic;
}
</style>
