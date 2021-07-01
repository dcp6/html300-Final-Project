<template>
<h3 class="primary-wrapper__main__card-data-holder__location-line">{{locationLinks[weatherDataIndex].name}}</h3>

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
        text:"blank",
        weatherDataValue: 1,
        locationLinksCounter: 0,
        locationLinksDataHolderTest: [],
        locationLinksObjectTest: 
        {
        tempRecieved:"",
        weatherData:"",
        weatherIcon:"",
        weatherIconLoadValue: false  
        },
        tempTest: undefined,
        locationLinks: [
            {
            name: "Seattle",
            link: "https://api.weatherbit.io/v2.0/current?&city=Seattle,WA&key=d7b112b090fa4c8baac9453adf0ac2d2",
            },
            {
            name: "Issaquah",
            link: "https://api.weatherbit.io/v2.0/current?&city=Issaquah,WA&key=d7b112b090fa4c8baac9453adf0ac2d2"
            },
            {
            name: "Bellingham",
            link: "https://api.weatherbit.io/v2.0/current?&lat=48.769&lon=-122.485&key=d7b112b090fa4c8baac9453adf0ac2d2"
            },
            {
            name: "Paradise",
            link: "https://api.weatherbit.io/v2.0/current?&lat=46.78&lon=-121.73&key=d7b112b090fa4c8baac9453adf0ac2d2"
            },
            {
            name: "Wilmington, DE",
            link: "https://api.weatherbit.io/v2.0/current?&lat=39.74&lon=-75.54&key=d7b112b090fa4c8baac9453adf0ac2d2"
            },
            {
            name: "Philadelphia, PA",
            link: "https://api.weatherbit.io/v2.0/current?&city=Philadelphia,PA&key=d7b112b090fa4c8baac9453adf0ac2d2"  
            },
            {
            name: "Pocanos, PA",
            link: "https://api.weatherbit.io/v2.0/current?&lat=41.07&lon=-75.44&key=d7b112b090fa4c8baac9453adf0ac2d2"
            },
            {
            name: "Pequa, PA",
            link: "https://api.weatherbit.io/v2.0/current?&lat=39.89&lon=-76.37&key=d7b112b090fa4c8baac9453adf0ac2d2"
              
            }
        ],
        weatherDataHolder: [
        {
        tempRecieved:"",
        weatherData:"",
        weatherIcon:"",
        weatherIconLoadValue: false
        },
        {
        tempRecieved:"",
        weatherData:"",
        weatherIcon:"",
        weatherIconLoadValue: false    
        },
        {
        tempRecieved:"",
        weatherData:"",
        weatherIcon:"",
        weatherIconLoadValue: false
        },
        {
        tempRecieved:"",
        weatherData:"",
        weatherIcon:"",
        weatherIconLoadValue: false
        },
        {
        tempRecieved:"",
        weatherData:"",
        weatherIcon:"",
        weatherIconLoadValue: false
        },
         {
        tempRecieved:"",
        weatherData:"",
        weatherIcon:"",
        weatherIconLoadValue: false
        },
        {
        tempRecieved:"",
        weatherData:"",
        weatherIcon:"",
        weatherIconLoadValue: false
        },
        {
        tempRecieved:"",
        weatherData:"",
        weatherIcon:"",
        weatherIconLoadValue: false
        },
        ]
      }
  },
  methods: {
      getData(){
      fetch(this.locationLinks[this.weatherDataIndex].link)
      .then(response => {
        return response.json()
      })
      .then((json) => {
     //weather data holder object array: po
     //uses the prop to refer to the index value of the array
        this.weatherDataHolder[this.weatherDataIndex].tempRecieved = json.data[0].temp
        this.weatherDataHolder[this.weatherDataIndex].weatherData = json.data[0].weather.description
        this.weatherDataHolder[this.weatherDataIndex].weatherIcon = require("@/assets/icons/" + json.data[0].weather.icon + ".png")
        this.weatherIconLoadValue = true
      })
      .catch((reason) => {
        throw ('The data failed to load.')
    })
    },
      arrayGenerator() {
      for (let i = 0; i < this.locationLinks.length; i ++){
      this.locationLinksDataHolderTest.push(this.locationLinksObjectTest)
      }
      console.log(this.locationLinksDataHolderTest)
    }
 
   
    },
    beforeMount: function () {
        this.arrayGenerator()
    },
    mounted: function (){
        this.getData()
    
    }
    
}
</script>
