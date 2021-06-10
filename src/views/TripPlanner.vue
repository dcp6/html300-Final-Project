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
<h3 class="primary-wrapper__main__card-data-holder__location-line">{{location1}} </h3>
<p class="primary-wrapper__main__card-data-holder__temperature-line">Temperature: {{((temp1*(9/5)+32)).toFixed(1)}} &#8457;. </p>
<p class="primary-wrapper__main__card-data-holder__weather-line">{{weather1}}</p>
<template v-if="weatherIcon1ValueLoadValue">
<img class="primary-wrapper__main__card-data-holder__weather-img" v-bind:src = "weatherIcon1" v-bind:alt="weather1">

</template>
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




</div><!--primary wrapper-->

<Footer msg="End"/>




</div><!--end trip planner div-->





</template>




<script>
// @ is an alias to /src 

import HeaderAndNav from '@/components/HeaderAndNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    HeaderAndNav,
    Footer
  },
  data () {
      return { 
          primaryHeader: "See the information below to plan your trip!",
          location1: "Seattle,WA",
          temp1: undefined,
          weather1: undefined,
          weatherIcon1: undefined,
          weatherIcon1ValueLoadValue: false,
          IconAlt1: this.weather1,
          location2: "Issaquah,WA",
          temp2: undefined,
          weather2: undefined,
          weatherIcon2: undefined,
          weatherIcon2ValueLoadValue: false,
           IconAlt2: this.weather2,
          location3: "Bellingham,WA",
          temp3: undefined,
          weather3: undefined,
          weatherIcon3: undefined,
          weatherIcon3ValueLoadValue: false,
           IconAlt3: this.weather3,
          location4: "Paradise,WA",
          temp4: undefined,
          weather4: undefined,
          weatherIcon4: undefined,
          weatherIcon4ValueLoadValue: false,
          IconAlt4: this.weather4
         
          

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
        this.weather1 = json.data[0].weather.description
        this.weatherIcon1 = require("@/assets/icons/" + json.data[0].weather.icon + ".png")
        this.weatherIcon1ValueLoadValue = true
      })
    
    },
     getData2(){
      fetch('https://api.weatherbit.io/v2.0/current?&city=Issaquah,WA&key=d7b112b090fa4c8baac9453adf0ac2d2&include=minutely')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then((json) => {
        console.log(json)
        this.temp2 = json.data[0].temp
        this.weather2 = json.data[0].weather.description
          this.weatherIcon2 = require("@/assets/icons/" + json.data[0].weather.icon + ".png")
        this.weatherIcon2ValueLoadValue = true
       
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
      },

    },
      
    mounted: function() {
      this.getData()
      this.getData2()
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