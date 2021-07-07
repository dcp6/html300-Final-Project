<template>
  <div class="home">
    <HeaderAndNav msg="Welcome!"/>
    <div class="primary-wrapper">

<div class="primary-wrapper__main-header-welcome-container">

  <h2 class="primary-wrapper__main-header-welcome-container__welcome-line">Hello and welcome to my website!</h2>
  <div class="primary-wrapper__main-header-img-holder" >
     <img class="primary-wrapper__main-header-img-holder__img" alt="A mayan temple" src="../assets/xunatunuch.jpg">
     <img class="primary-wrapper__main-header-img-holder__img" alt="A gothic tower" src="../assets/gothic-tower.jpg">
     <img class="primary-wrapper__main-header-img-holder__img" alt="A coastal city in Italy" src="../assets/positano.jpg">


</div>

 
<div class="primary-wrapper__blog-entry-holder">
<div class="primary-wrapper__blog-entry-holder__blog-entry">
  <h3>06.1.2021</h3>
  <h4>A journey through paradise</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet cursus quam. Quisque eu faucibus nisi. Integer sed tortor a sem posuere feugiat commodo a metus. Quisque lobortis enim et arcu laoreet, at lacinia mauris tristique. Aenean consectetur tempus leo quis ultricies. Vestibulum vestibulum enim nec justo feugiat, nec placerat dolor commodo. Nulla sed nisi efficitur, scelerisque nulla vel, lobortis felis. Maecenas vel diam non purus tempor congue sed a ante.</p>
<p>Phasellus egestas felis enim, quis viverra ligula viverra at. Integer sit amet purus dictum, aliquet erat ac, efficitur mauris. Aliquam aliquam, libero nec sollicitudin fermentum, leo velit varius tortor, sit amet tincidunt mauris nibh ut tellus. Donec tristique urna laoreet placerat consequat. In dapibus libero vitae leo commodo ultrices. Etiam imperdiet aliquet fermentum. Nulla vitae turpis a urna consectetur sagittis. In in bibendum mi, eget hendrerit augue. Sed laoreet turpis interdum libero tincidunt, nec feugiat mauris luctus. Pellentesque vitae eleifend dolor. Mauris vehicula libero eu ipsum hendrerit, ullamcorper tempus metus congue. Ut pharetra nisi quis nisi eleifend, et lobortis purus tempor.</p>
</div> 
<div class="primary-wrapper__blog-entry-holder__blog-entry">
  <h3>05.2.2021</h3>
  <h4>Up in the Alps</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet cursus quam. Quisque eu faucibus nisi. Integer sed tortor a sem posuere feugiat commodo a metus. Quisque lobortis enim et arcu laoreet, at lacinia mauris tristique. Aenean consectetur tempus leo quis ultricies. Vestibulum vestibulum enim nec justo feugiat, nec placerat dolor commodo. Nulla sed nisi efficitur, scelerisque nulla vel, lobortis felis. Maecenas vel diam non purus tempor congue sed a ante.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet cursus quam. Quisque eu faucibus nisi. Integer sed tortor a sem posuere feugiat commodo a metus. Quisque lobortis enim et arcu laoreet, at lacinia mauris tristique. Aenean consectetur tempus leo quis ultricies. Vestibulum vestibulum enim nec justo feugiat, nec placerat dolor commodo. Nulla sed nisi efficitur, scelerisque nulla vel, lobortis felis. Maecenas vel diam non purus tempor congue sed a ante.</p>
</div>  
</div>
</div>
</div>
    <Footer msg="End"/>
  </div>
</template>
<style lang="scss">
@import "@/scss/_variables.scss";
.primary-wrapper {
  
&__main-header-img-holder {
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        grid-column:2/12;
        grid-row:1/8;
        //positions the image section
        &__img {
            height:17.5rem;
            padding:2rem; 
         &:last-child() {
             padding-right:0;
         }   
        }
    }
    &__main-header-welcome-container{

        grid-column: 2 / 11;
        grid-row:2;    
        
        &__welcome-line{
            color:$primary-font-color;
            display:flex;
            justify-content:center;
            font-size:2.5rem;
           
            }//welcome line end
            }//main header container end
  
    &__intro-para {
            display:flex;
            justify-content:center;
    }
    &__main-intro-text-holder {
        color:$primary-font-color;
        grid-column:2/12;
        grid-row:9/12;
        font-weight:300;
    &__intro-para {
        color:$primary-font-color;
        font-size:1.25rem;
        font-weight:300;
    }
    }
    &__blog-entry-holder {
        grid-column:2/12;
        grid-row:8;
        font-weight:300;
        
    &__blog-entry {
            color:$primary-font-color;
    }
    }
  
}

</style>


<script>
// @ is an alias to /src

import HeaderAndNav from '@/components/HeaderAndNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    HeaderAndNav,
    Footer
  }
  }


</script>
