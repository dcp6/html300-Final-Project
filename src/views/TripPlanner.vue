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
<h3>{{location1}} </h3>
<p>The temperature is {{((temp1*(9/5)+32)).toFixed(1)}} &#8457;. </p>
<p>{{weather1}}</p>
<template v-if="weatherIcon1ValueLoadValue">
<img v-bind:src = "weatherIcon1" alt="test image">
<!-- <img v-bind:src="" alt="icon">-->
</template>
</div>
<div class="primary-wrapper__main__card-data-holder">
<h3>{{location2}} </h3>
<p>The temperature is {{((temp2*(9/5)+32)).toFixed(1)}} &#8457;. </p>
<p>{{weather2}}</p>
<template v-if="weatherIcon2ValueLoadValue">
<img v-bind:src = "weatherIcon2" alt="test image">
<!-- <img v-bind:src="" alt="icon">-->
</template>
</div>
<div class="primary-wrapper__main__card-data-holder">
<h3>{{location3}} </h3>

<p>The temperature is {{((temp3*(9/5)+32)).toFixed(1)}} &#8457;. </p>
<p>{{weather3}}</p>
<template v-if="weatherIcon3ValueLoadValue">
<img v-bind:src = "weatherIcon3" alt="test image">
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
          location2: "Issaquah,WA",
          temp2: undefined,
          weather2: undefined,
          weatherIcon2: undefined,
          weatherIcon2ValueLoadValue: false,
          location3: "Bellingham,WA",
          temp3: undefined,
          weather3: undefined,
          weatherIcon3: undefined,
          weatherIcon3ValueLoadValue: false,
         
          

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
      }
    },
      
    mounted: function() {
      this.getData()
      this.getData2()
      this.getData3()




    }
    }
    
  


</script>
<style scoped lang="scss">
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
  }

  }
  
}



</style>