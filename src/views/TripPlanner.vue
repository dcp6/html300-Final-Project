<template>
<div class="Trip-Planner">
<HeaderAndNav msg="Welcome"/>
<div class="primary-wrapper">
<div class="primary-wrapper__main-header-welcome-container">
<h2 class="primary-wrapper__main-header-welcome-container__welcome-line">
{{primaryHeader}}
</h2>

</div> <!--End main header welcome container-->

<select v-model="selected" class="primary-wrapper__location-selector" name="weather-location" id="weatherLocationSelector">
<option disabled value="">Select your state</option>
<option>Washington</option>
<option>DE/PA</option>
</select>

<main class="primary-wrapper__main">


<template v-if="selected ==='Washington'">
<div class="primary-wrapper__main__card-data-holder">

<WeatherTile :weatherDataIndex="0"/>
</div>
<div class="primary-wrapper__main__card-data-holder">
<WeatherTile :weatherDataIndex="1"/>

</div>
<div class="primary-wrapper__main__card-data-holder">
<WeatherTile :weatherDataIndex="2"/>

</div>
<div class="primary-wrapper__main__card-data-holder">
<WeatherTile :weatherDataIndex="3"/>

</div>
</template>
<template v-if="selected === 'DE/PA'">
<div class="primary-wrapper__main__card-data-holder">
<WeatherTile :weatherDataIndex="4"/>
</div>
<div class="primary-wrapper__main__card-data-holder">
<WeatherTile :weatherDataIndex="5"/>
</div>
<div class="primary-wrapper__main__card-data-holder">
<WeatherTile :weatherDataIndex="6"/>
</div>
<div class="primary-wrapper__main__card-data-holder">
<WeatherTile :weatherDataIndex="7"/>
</div>
</template>
</main>
 
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
    data (){
      return {
        selected:"",
        primaryHeader: "See below to plan your trip!"
      }
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
      grid-row:4/10;
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
  &__location-selector {
      grid-column:6;
      grid-row:3;
      height:4rem;
      width:11rem;
      font-size:1.2rem;
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