
<template>
<div class="weathertile primary-wrapper__main__card-data-holder">
<h3 class="primary-wrapper__main__card-data-holder__location-line">{{dummyText}}</h3>
<p class="primary-wrapper__main__card-data-holder__temperature-line"> &#8457;. </p>
<p class="primary-wrapper__main__card-data-holder__weather-line"></p>
<template v-if="weatherIcon1ValueLoadValue">
<img class="primary-wrapper__main__card-data-holder__weather-img" v-bind:src = "weatherIcon1" v-bind:alt="weather1">
</template>

</div>

</template>
<script>
export default {
  name: 'WeatherTile',
  props: {
    weatherDataHolder: Array,
    dataCounter: Number
    
  },
  data () {
      return {
          dummyText: "Blank",
          temp1: undefined,
          seattleData: [10, "gray", "0202"]
      }
  },
  methods: {
    getData(){
      fetch('https://api.weatherbit.io/v2.0/current?&city=Seattle,WA&key=d7b112b090fa4c8baac9453adf0ac2d2&include=minutely')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then((json) => {
        console.log(json)
        this.temp1 = json.data[0].temp
        this.$set(this.seattleData, 0 , 20)
        this.weather1 = json.data[0].weather.description
        this.weatherIcon1 = require("@/assets/icons/" + json.data[0].weather.icon + ".png")
        this.weatherIcon1ValueLoadValue = true
      })
      .catch((reason) => {
        alert('Error loading data for Seattle,WA! Please check your internet connection and relaod the page')
    })
    }
    },
    mounted: function() {
      this.getData()

    }
}
</script>
