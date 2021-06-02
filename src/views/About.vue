<template>
  <div class="tripreports">
    <HeaderAndNav msg="Welcome!"/>
    <Footer msg="End"/>
  </div>
</template>

<script>
// @ is an alias to /src

import HeaderAndNav from '@/components/HeaderAndNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'TripReports',
  components: {
    HeaderAndNav,
    Footer
  }
  }


</script>
