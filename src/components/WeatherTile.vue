<template>
<h3 class="primary-wrapper__main__card-data-holder__location-line">{{weatherDataHolder[weatherDataIndex].location}}</h3>
<p class="primary-wrapper__main__card-data-holder__temperature-line">Temperature: {{((weatherDataHolder[weatherDataIndex].tempRecieved*(9/5)+32)).toFixed(1)}} &#8457;. </p>
<p class="primary-wrapper__main__card-data-holder__weather-line">{{weatherDataHolder[weatherDataIndex].weatherData}}</p>
<template v-if= "weatherIconLoadValue">
<img :src="weatherDataHolder[weatherDataIndex].weatherIcon">
</template>






</template>






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
        },
        {
        location: "Bellingham, WA",
        tempRecieved:"",
        weatherData:"",
        weatherIcon:"",
        weatherIconLoadValue: false
        },
        {
        location: "Paradise, WA",
        tempRecieved:"",
        weatherData:"",
        weatherIcon:"",
        weatherIconLoadValue: false
        }
        ]
      }
  },
  methods: {
      getDataSeattle(){
      fetch('https://api.weatherbit.io/v2.0/current?&city=Seattle,WA&key=d7b112b090fa4c8baac9453adf0ac2d2&include=minutely')
      .then(response => {
        console.log(response)
        console.log("test succesful")
        return response.json()
      })
      .then((json) => {
        console.log(json)
     
        this.weatherDataHolder[0].tempRecieved = json.data[0].temp
        this.weatherDataHolder[0].weatherData = json.data[0].weather.description
        this.weatherDataHolder[0].weatherIcon = require("@/assets/icons/" + json.data[0].weather.icon + ".png")
        this.weatherIconLoadValue = true
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
        this.weatherDataHolder[1].tempRecieved = json.data[0].temp
        this.weatherDataHolder[1].weatherData = json.data[0].weather.description
        this.weatherDataHolder[1].weatherIcon = require("@/assets/icons/" + json.data[0].weather.icon + ".png")
        this.weatherIconLoadValue = true
      })
      .catch((reason) => {
        alert('Error loading data for Issaquah,WA2! Please check your internet connection and relaod the page')
    })
    },
       getDataBellingham(){
     fetch('https://api.weatherbit.io/v2.0/current?&lat=48.769&lon=-122.485&key=d7b112b090fa4c8baac9453adf0ac2d2&include=minutely')
      .then(response => {
        console.log(response)
        console.log("test succesful")
        return response.json()
      })
      .then((json) => {
        console.log(json)
        this.weatherDataHolder[2].tempRecieved = json.data[0].temp
        this.weatherDataHolder[2].weatherData = json.data[0].weather.description
        this.weatherDataHolder[2].weatherIcon = require("@/assets/icons/" + json.data[0].weather.icon + ".png")
        this.weatherIconLoadValue = true
      })
      .catch((reason) => {
        alert('Error loading data for Issaquah,WA! Please check your internet connection and relaod the page')
    })
    },
     getDataParadise(){
     fetch('https://api.weatherbit.io/v2.0/current?&lat=46.78&lon=-121.73&key=d7b112b090fa4c8baac9453adf0ac2d2&include=minutely')
      .then(response => {
        console.log(response)
        console.log("test succesful")
        return response.json()
      })
      .then((json) => {
        console.log(json)
        this.weatherDataHolder[3].tempRecieved = json.data[0].temp
        this.weatherDataHolder[3].weatherData = json.data[0].weather.description
        this.weatherDataHolder[3].weatherIcon = require("@/assets/icons/" + json.data[0].weather.icon + ".png")
        this.weatherIconLoadValue = true
      })
      .catch((reason) => {
        alert('Error loading data for Issaquah,WA! Please check your internet connection and relaod the page')
    })
    }
   
    

    },
    mounted: function (){
        this.getDataSeattle()
        this.getDataIssaquah()
        this.getDataBellingham()
        this.getDataParadise()
    }
    
}
</script>
