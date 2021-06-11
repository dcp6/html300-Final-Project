<template>
<h3></h3>
<p class="primary-wrapper__main__card-data-holder__temperature-line">Temperature: {{((weatherDataHolder[0].tempRecieved*(9/5)+32)).toFixed(1)}} &#8457;. </p>
<!--<p>{{weatherDataHolder[0].tempRecieved}}</p>-->
<p>{{weatherDataHolder[weatherDataIndex].weatherData}}</p>
<template v-if= "weatherIconLoadValue">
<img :src="weatherDataHolder[weatherDataIndex].weatherIcon">

<p>{{weatherDataHolder[1].location}}</p>
<p class="primary-wrapper__main__card-data-holder__temperature-line">Temperature: {{((weatherDataHolder[1].tempRecieved*(9/5)+32)).toFixed(1)}} &#8457;. </p>
</template>






</template>

<!--h3 class="primary-wrapper__main__card-data-holder__location-line">{{location2}} </h3>
<p class="primary-wrapper__main__card-data-holder__temperature-line">Temperature: {{((temp2*(9/5)+32)).toFixed(1)}} &#8457;. </p>
<p class="primary-wrapper__main__card-data-holder__weather-line">{{weather2}}</p>
<template v-if="weatherIcon2ValueLoadValue">
<img class="primary-wrapper__main__card-data-holder__weather-img" v-bind:src = "weatherIcon2" v-bind:alt="weather2">-->






<script>
export default {
  name: 'WeatherTile',
  props: {
    msg: String,
    weatherDataIndex: Number
  },
  data() {
      return {
        counter:0,
        text:"blank",
        weatherDataValue: 1,
        tempTest: undefined,
        weatherDataHolder: [
        {
        location: "Seattle, WA",
        tempRecieved:"",
        weatherData:"",
        weatherIcon:"",
        weatherIconLoadValue: false
        },
        {
        location: "Issaquah, WA",
        tempRecieved:"",
        weatherData:"",
        weatherIcon:"",
        weatherIconLoadValue: false    
        }
        ]
      }
  },
  methods: {
      plusOne() {
          this.counter += 1
          console.log(counter)
      },
        getDataSeattle(){
      fetch('https://api.weatherbit.io/v2.0/current?&city=Seattle,WA&key=d7b112b090fa4c8baac9453adf0ac2d2&include=minutely')
      .then(response => {
        console.log(response)
        console.log("test succesful")
        return response.json()
      })
      .then((json) => {
        console.log(json)
        // this.tempTest = json.data[0].temp
        this.weatherDataHolder[0].tempRecieved = json.data[0].temp
        this.weatherDataHolder[0].weatherData = json.data[0].weather.description
        this.weatherDataHolder[0].weatherIcon = require("@/assets/icons/" + json.data[0].weather.icon + ".png")
        this.weatherIconLoadValue = true
        // this.weatherIcon1 = require("@/assets/icons/" + json.data[0].weather.icon + ".png")
        // this.weatherIcon1ValueLoadValue = true
      })
      .catch((reason) => {
        alert('Error loading data for Seattle,WA! Please check your internet connection and relaod the page')
    })
    },
       getDataIssaquah(){
      fetch('https://api.weatherbit.io/v2.0/current?&city=Issaquah,WA&key=d7b112b090fa4c8baac9453adf0ac2d2&include=minutely')
      .then(response => {
        console.log(response)
        console.log("test succesful")
        return response.json()
      })
      .then((json) => {
        console.log(json)
        // this.tempTest = json.data[0].temp
        this.weatherDataHolder[1].tempRecieved = json.data[0].temp
        this.weatherDataHolder[1].weatherData = json.data[0].weather.description
        this.weatherDataHolder[1].weatherIcon = require("@/assets/icons/" + json.data[0].weather.icon + ".png")
        this.weatherIconLoadValue = true
        // this.weatherIcon1 = require("@/assets/icons/" + json.data[0].weather.icon + ".png")
        // this.weatherIcon1ValueLoadValue = true
      })
      .catch((reason) => {
        alert('Error loading data for Issaquah,WA! Please check your internet connection and relaod the page')
    })
    }
    },
    mounted: function (){
        this.getDataSeattle()
        this.getDataIssaquah()
    }
    
}
</script>
