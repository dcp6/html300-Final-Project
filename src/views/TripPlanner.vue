<template>
<div class="Trip-Planner">
<HeaderAndNav msg="Welcome"/>
<div class="primary-wrapper">
<div class="primary-wrapper__main-header-welcome-container">
<h2 class="primary-wrapper__main-header-welcome-container__welcome-line">
{{primaryHeader}}
</h2>
</div> <!--End main header welcome container-->

<main class="primary-wrapper__main">

<div class="primary-wrapper__main__card-data-holder">
</div>
<div class="primary-wrapper__main__card-data-holder">
<h3 class="primary-wrapper__main__card-data-holder__location-line">{{location2}} </h3>
<p class="primary-wrapper__main__card-data-holder__temperature-line">Temperature: {{((temp2*(9/5)+32)).toFixed(1)}} &#8457;. </p>
<p class="primary-wrapper__main__card-data-holder__weather-line">{{weather2}}</p>
<template v-if="weatherIcon2ValueLoadValue">
<img class="primary-wrapper__main__card-data-holder__weather-img" v-bind:src = "weatherIcon2" v-bind:alt="weather2">
<!-- <img v-bind:src="" alt="icon">-->
</template>
</div>
<div class="primary-wrapper__main__card-data-holder">
<h3 class="primary-wrapper__main__card-data-holder__location-line">{{location3}} </h3>

<p class="primary-wrapper__main__card-data-holder__temperature-line">Temperature: {{((temp3*(9/5)+32)).toFixed(1)}} &#8457;. </p>
<p class="primary-wrapper__main__card-data-holder__weather-line">{{weather3}}</p>
<template v-if="weatherIcon3ValueLoadValue">
<img class="primary-wrapper__main__card-data-holder__weather-img" v-bind:src = "weatherIcon3" v-bind:alt="weather3">
<!-- <img v-bind:src="" alt="icon">-->
</template>

</div>
<div class="primary-wrapper__main__card-data-holder">
<h3 class="primary-wrapper__main__card-data-holder__location-line">{{location4}} </h3>
<p class="primary-wrapper__main__card-data-holder__temperature-line">Temperature: {{((temp4*(9/5)+32)).toFixed(1)}} &#8457;. </p>
<p class="primary-wrapper__main__card-data-holder__weather-line">{{weather4}}</p>
<template v-if="weatherIcon4ValueLoadValue">
<img class="primary-wrapper__main__card-data-holder__weather-img" v-bind:src = "weatherIcon4" v-bind:alt="weather4">
<!-- <img v-bind:src="" alt="icon">-->
</template>
</div>
</main>

<WeatherTile
v-for = 
"(data, x) in weatherDataHolder"
v-bind:key="data[0].weatherData"
/>
<!--<WeatherTile weatherDataIndex="2"/>-->

</div><!--primary wrapper-->

<Footer msg="End"/>




</div><!--end trip planner div-->





</template>




<script>
// @ is an alias to /src 
import HeaderAndNav from '@/components/HeaderAndNav.vue'
import Footer from '@/components/Footer.vue'
import WeatherTile from '@/components/WeatherTile.vue'
export default {
  name: 'Home',
  components: {
    HeaderAndNav,
    Footer,
    WeatherTile
  },
  data () {
      return { 
          primaryHeader: "See the information below to plan your trip!",
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
    },
      getData3(){
      fetch('https://api.weatherbit.io/v2.0/current?&lat=48.769&lon=-122.485&key=d7b112b090fa4c8baac9453adf0ac2d2&include=minutely')
      .then(response => {
        console.log(response)
        return response.json()
      })
      
      .then((json) => {
        console.log(json)
        this.temp3 = json.data[0].temp
        this.weather3 = json.data[0].weather.description
        this.weatherIcon3 = require("@/assets/icons/" + json.data[0].weather.icon + ".png")
        this.weatherIcon3ValueLoadValue = true
      })
      .catch((reason) => {
        alert('Erro loading data for Bellingham,WA! Please check your internet connection and relaod the page')
    })
      },
       getData4(){
      fetch('https://api.weatherbit.io/v2.0/current?&lat=46.78&lon=-121.73&key=d7b112b090fa4c8baac9453adf0ac2d2&include=minutely')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then((json) => {
        console.log(json)
        this.temp4 = json.data[0].temp
        this.weather4 = json.data[0].weather.description
        this.weatherIcon4 = require("@/assets/icons/" + json.data[0].weather.icon + ".png")
        this.weatherIcon4ValueLoadValue = true
      })
      .catch((reason) => {
        alert('Error loading data for Paradise, WA! Please check your internet connection and relaod the page')
    })
      },
    },
      
    mounted: function() {
      this.getDataSeattle()
      this.getData2Issaquah()
      this.getData3()
      this.getData4()
    }
    }
    
  
</script>
<style scoped lang="scss">
$max-width-phone: 29.75rem;
$max-width-ipad: 48rem;
$font-stack: 'Roboto', Arial, sans-serif;
.primary-wrapper {
  font-family:$font-stack;
  &__main {
      grid-column:3/11;
      grid-row:3/10;
      display:flex;
      flex-direction:row;
    &__card-data-holder {
    margin-right: 4rem;
    &__temperature-line {
      text-align:center;
    }
    &__weather-img{
      height:8rem;
    }
  }
  }
  
}
@media (max-width:$max-width-ipad) {
  .primary-wrapper {
   &__main {
     grid-column:1/12;
   }
  }
}
@media (max-width:$max-width-phone){
  .primary-wrapper{
    &__main {
      display:flex;
      flex-direction:column;
      font-size:1.5rem;
      grid-column:2/11;
      &__card-data-holder {
        width:28.5rem;
        &__location-line {
          margin-left:1rem;
        }
        &__temperature-line {
          text-align:left;
          margin-left:1rem;
        }
        &__weather-line {
          margin-left:1rem;
        }
        &__weather-img {
          width:15rem;
          height:auto;
        }
      }
    }
  }
}
</style>