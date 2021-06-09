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
<p>Seattle,WA temperature(C): {{temp1}}</p>
<p>{{weather1}}</p>
<p>{{temp1*(9/5)+32}}</p>
</div>
<div class="primary-wrapper__main__card-data-holder">
<p>{{temp2}}</p>
<p>{{weather2}}</p>
<p>{{temp2*(9/5)+32}}</p>

</div>
<div class="primary-wrapper__main__card-data-holder">
<p>{{temp3}}</p>
<p>{{weather3}}</p>
<p>{{temp3*(9/5)+32}}</p>

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
          temp1: undefined,
          weather1: undefined,
          temp2: undefined,
          weather2: undefined,
          temp3: undefined,
          weather3: undefined


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
.primary-wrapper {
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