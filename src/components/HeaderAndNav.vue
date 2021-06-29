
   <template>
   <div class="headerAndNav">
  <header class="primary-header">
   <h1 class="primary-header__main-headline">Dan's Hiking and Travel Page</h1>
        </header>
        <nav class="nav-bar">
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
.primary-header {
  &__main-headline {
    font-weight: 400;
  }
}


</style>
<script>
export default {
  name: 'HeaderAndNav',
  props: {
    msg: String
  }
}
</script>
<style scoped lang="scss">
h1 {
    text-align:center;
    font-weight:500;
}
</style>

