
   <template>
   <div class="headerAndNav">
  <header class="primary-header">
   <h1 class="primary-header__main-headline">Dan Powell</h1>
        </header>
        <nav v-if = "showNavMenu" class="nav-bar" >
    <div class="nav-bar-mobile__main-holder">
    <input class="nav-bar-mobile__main-holder__check-box" type="checkbox">
      <!--hidden checkbox the size of menu that turns menu on/off-->
    <div class="nav-bar-mobile__main-holder__hamburger">
      <!--hamburger menus-->
        <span class="nav-bar-mobile__main-holder__hamburger__lines"></span>
        <span class="nav-bar-mobile__main-holder__hamburger__lines"></span>
        <span class="nav-bar-mobile__main-holder__hamburger__lines"></span>
    </div>
 
<ul class="nav-bar-mobile__main-holder__menu-item-holder"><!--Menu items for hamburger-->
<li class="nav-bar-mobile__main-holder__menu-item-holder__nav-options"> <router-link class="nav-bar-mobile__main-holder__menu-item-holder__nav-options__link" to="/">Home</router-link></li>


<li class="nav-bar-mobile__main-holder__menu-item-holder__nav-options"><router-link class="nav-bar-mobile__main-holder__menu-item-holder__nav-options__link" to="/tripreports">Trip Reports</router-link></li>
<li class="nav-bar-mobile__main-holder__menu-item-holder__nav-options"><router-link class="nav-bar-mobile__main-holder__menu-item-holder__nav-options__link" to="/gearreviews">Gear Reviews</router-link></li>
<li class="nav-bar-mobile__main-holder__menu-item-holder__nav-options"><router-link class="nav-bar-mobile__main-holder__menu-item-holder__nav-options__link" to="/tripplanner">Trip Planner</router-link></li>
</ul>
</div>
</nav>
  <nav class="nav-bar-desktop">
  <div class="nav-bar-desktop__main-holder">
<ul class="nav-bar-desktop__main-holder__menu-item-holder">
<li class="nav-bar-desktop__main-holder__menu-item-holder__nav-options"> <router-link class="nav-bar-desktop__main-holder__menu-item-holder__nav-options__link" to="/">Home</router-link></li>
<li class="nav-bar-desktop__main-holder__menu-item-holder__nav-options"><router-link class="nav-bar-desktop__main-holder__menu-item-holder__nav-options__link" to="/tripreports">Trip Reports</router-link></li>
<li class="nav-bar-desktop__main-holder__menu-item-holder__nav-options"><router-link class="nav-bar-desktop__main-holder__menu-item-holder__nav-options__link" to="/gearreviews">Gear Reviews</router-link></li>
<li class="nav-bar-desktop__main-holder__menu-item-holder__nav-options"><router-link class="nav-bar__main-holder__menu-item-holder__nav-options__link" to="/tripplanner">Trip Planner</router-link></li>
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
    margin-left:-44rem;
  }
}
.nav-bar-mobile {
  &__main-holder {
     display:none;
    &__check-box {
     display:none; 
    }
  }
}
.nav-bar-desktop {
  position:absolute;
  right:10rem;
  top:1rem;
  display:block;
  &__main-holder {
    &__menu-item-holder {
      display:flex;
      flex-flow:row;
      list-style-type:none;
      &__nav-options {
        flex: 3;
      }
    }
  }
}

@media (max-width:$max-width-ipad) {
.nav-bar-mobile {
    z-index:3;
    &__main-holder {
       display:contents;
    //A checkbox is used to detect when the menu is selected. This places the check box, defines its dimensions, and sets its z-index on top so it can be clicked and its opacity at 0.
        &__check-box {
        top:$toggle-top-location;
        position:absolute;
        left:1rem;
        z-index:3;
        height:4rem;
        width:4.2rem;
        cursor:pointer; 
        opacity:0;
        //sets the transformation to 0 on the menu when the box is checked
        &:checked ~ ul {
            transform:none;
        }//ul end
        //moves the hamburger lines
        &:checked ~ div span {
            opacity:1;
            transform:rotate(45deg) translate(-.82rem, -.82rem);
            background:$hamburger-menu-color-change; 
            transition:.5s;

        &:nth-last-child(3)   {
            opacity:0;
            transform:rotate(0deg);
        }//middle cross end
        &:nth-last-child(2) {
            transform:rotate(-45deg)
        }
        }//div span end
        }
        //defines the hamburger
        &__hamburger {
        position:absolute;
        top: ($toggle-top-location+0.5rem);
        left:1rem;
        z-index:2;
            &__lines {
            display:block;
            height:1rem;
            width:4rem;
            margin-bottom:0.25rem;
            background:$hamburger-menu-color;
            border-radius:5%;
            }
            
        }
    //positions the menu and sets its transform value that it changes from
    &__menu-item-holder {
        position:absolute;
        transition: 0.5s;
       margin:0 0 0 -.5rem;
       padding:1rem 0rem 1rem 0rem;
        transform: translate(-15rem, 0rem);
        background:$menu-background-color;
        transform: 1s cubic-bezier(0.77,0.2,0.05,1.0);
        color:$menu-item-color;
        text-decoration:none;
    &__nav-options {
        padding:.31rem;
        list-style: none;
        display:block;
    &__link {
      text-decoration:none;
      color:white;
    }
    &__link:hover {
        color: $hamburger-menu-link-color;
    }
    }

    }//menu-item-holder end
}
}//nav-bar end
}
@media (max-width:$max-width-phone){
  .primary-header {
  h1 {
    padding-top:.63rem;
  }
  }
  .nav-bar-mobile {
  &__main-holder {
      &__check-box {
             left:0.57rem;
              height:2.4rem;
              width:2.3rem;
        &:checked ~ div span {
            transform: rotate(45deg) translate(-.52rem, -.52rem);
                   }
      }
      &__hamburger {
          left:0.75rem;
          &__lines {
            height:.5rem;
            width:2rem;
          }
      }

    &__menu-item-holder {
      margin:($toggle-top-location) 0 0 -.5rem;
    }
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


