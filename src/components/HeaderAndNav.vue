
   <template>
   <div class="headerAndNav">
  <header class="primary-header">
   <h1 class="primary-header__main-headline">Dan's Hiking and Travel Page</h1>
        </header>
        <nav v-if = "showNavMenu" class="nav-bar" >
    <div class="nav-bar__main-holder">
    <input class="nav-bar__main-holder__check-box" type="checkbox">
      <!--hidden checkbox the size of menu that turns menu on/off-->
    <div class="nav-bar__main-holder__hamburger">
      <!--hamburger menus-->
        <span class="nav-bar__main-holder__hamburger__lines"></span>
        <span class="nav-bar__main-holder__hamburger__lines"></span>
        <span class="nav-bar__main-holder__hamburger__lines"></span>
    </div>
 
<ul class="nav-bar__main-holder__menu-item-holder">
<li class="nav-bar__main-holder__menu-item-holder__nav-options"> <router-link class="nav-bar__main-holder__menu-item-holder__nav-options__link" to="/">Home</router-link></li>


<li class="nav-bar__main-holder__menu-item-holder__nav-options"><router-link class="nav-bar__main-holder__menu-item-holder__nav-options__link" to="/tripreports">Trip Reports</router-link></li>
<li class="nav-bar__main-holder__menu-item-holder__nav-options"><router-link class="nav-bar__main-holder__menu-item-holder__nav-options__link" to="/gearreviews">Gear Reviews</router-link></li>
<li class="nav-bar__main-holder__menu-item-holder__nav-options"><router-link class="nav-bar__main-holder__menu-item-holder__nav-options__link" to="/tripplanner">Trip Planner</router-link></li>
</ul>
</div>
</nav>
</div>
</template>
<style lang="scss">
@import "@/scss/_variables.scss"; 
.primary-header {
  h1 {
    text-align:center;
  }
  &__main-headline {
    font-weight: 400;
  }
}
@media (max-width:$max-width-phone){
  .primary-header {
  h1 {
    padding-top:.63rem;
  }
  }
} 


</style>
<script>
export default {
  name: 'HeaderAndNav',
  props: {
    msg: String
  },
  data() {
    return {
      showNavMenu:  true,
      lastScrollPosition:0
    }
    },
    mounted () {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll() {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition < 0) {
          return
        }
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 300) {
          return
        }
      this.showNavMenu = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
      }
    }
  }
</script>


