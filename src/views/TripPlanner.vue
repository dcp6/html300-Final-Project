<template>
<div class="Trip-Planner">
<HeaderAndNav msg="Welcome"/>
<div class="primary-wrapper">
<div class="primary-wrapper__main-header-welcome-container">
<h2 class="primary-wrapper__main-header-welcome-container__welcome-line">
{{primaryHeader}}
</h2>
</div> <!--End main header welcome container-->







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
          primaryHeader: "See the information below to plan your trip!"

  }
  }
}


</script>