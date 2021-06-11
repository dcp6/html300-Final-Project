<template>
  <div class="tripreports">
    <HeaderAndNav msg="Welcome!"/>
    <div class="primary-wrapper">
    <aside class="primary-wrapper__aside">
    <h3 class="primary-wrapper__aside__headline">{{listHeader}} </h3>
    <ul class="primary-wrapper__aside__list-holder">
    <li class="primary-wrapper__aside__list-holder__list-items" v-for="gear in gearItemList">{{gear}}</li>
    </ul>
      <p class="primary-wrapper__aside__img-header">{{productData[gearSelector].itemData[0]}}</p>
    <img class="primary-wrapper__aside__primary-image" v-bind:src="productData[gearSelector].itemData[1]" v-bind:id="imgIdentification" v-on:click="plusOne">
    
    </aside>
    <main class="primary-wrapper__main">
     <div class="primary-wrappper__main__report-holder">
      <h2 class="primary-wrapper__main__report-holder__headline">Trip Reports</h2>
        <p class="primary-wrapper__main__report-holder__date-line">05/09/2021: May Valley Loop</p>
        <div class="primary-wrapper__ main__report-holder__img-holder">
        <img class="primary-wrapper__main__report-holder__img-holder__hiking-img" src="@/assets/may-valley.webp">
        </div>
        <p class="primary-wrapper__main__report-holder__report-text">We hiked the May Valley Loop this Sunday. Or, at least, we tried to. The signage was not good and my brother and I were never really sure if we were on the right trail. We turned around before the top, due to an unforseen need for the bathroom. It was a total of about 6 miles, 1600 ft up. The trail was muddy in spots, but I still had fun. I chose to use my sandals for this trip, which was the first time I took them on an actual hike. It was not an issue at all, and I will take them on a harder trail. We actually decided to try this particular trail again because of the bathroom issue and the nice feel of the place. It wasn't very crowded, although the lot required a $10 fee which is atypical. It was a good hike, and I wish we had a chance to complete it. There were two primary destinations - a nice peak, or an old stone fireplace (the Bullit Fireplace). We decided we wanted to see the fireplace. We may have been close, but given our confusion its hard to really know. 
        </p>
     </div><!--report holder-->
    
    
    
    
    
    </main>
    
    
    </div>
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
  },
  data() {
    return {
      listHeader:"Gear List",  
      gearSelector:0,
      gearItemList:["Hat: Hood Hats","Rain Jacket: REI Drypoint GTX","Shirt: Costco Active Tee","Underwear: Fruit of the Loom CoolZone","Pants: Outdoor Research Ferrosi","Socks: Darn Tough Hiker Full Cushion","Boots: Salomon X Ultra Mid 3 GTX","Sandals: Bedrock Cairn Adventure Sandals","Go to the gear page for more information! Click below to cycle through images."     ],
            imgIdentification:"aside-img",
            productData: [
            {
            name: "Hat",
            itemData: ["Hood Hats",require("@/assets/hood-hat.jpg")]
            },
            {
            name:"Jacket",
            itemData: ["DryPoint GTX",require("@/assets/drypoint-gtx.jpg")]
            },
            {
            name:"Shirt",
            itemData: ["Active Tee",require("@/assets/active-tee.jpeg")]
            },
            {
            name:"Underwear",
            itemData: ["Fruit of the Loom CoolZone",require("@/assets/boxer-briefs.jpeg")]
            },
            {
            itemData: ["Outdoor Research Ferrosi",require("@/assets/ferrosi.jpeg")]
            },
            {
            name:"Socks",
            itemData: ["Darn Tough Full Cushion",require("@/assets/darn-tough.jpg")]
            },
            {
            name:"Boots",
            itemData: ["Ultra Mid 3 GTX",require("@/assets/ultra-mid.jpeg")]
            },
            {
            name:"Sandals",
            itemData: ["Cairn Bedrock Sandals",require("@/assets/cairn-sandals.jpeg")]
            }
            ]
          
    }     
  },     
            methods: {
              plusOne() {
                    this.gearSelector += 1;

                    if (this.gearSelector === 8 )
                    console.log('test')
                    this.gearSelector = gearSelector - 8
                    console.log(gearSelector)
              }//random number generator


          }//method end
  }


</script>
<style scoped lang="scss">
$max-width-ipad: 48rem;
$max-width-phone:29.75rem; 
.primary-wrapper {
  &__main {
        grid-column:4/11;
        padding-right:1fr;
        background-color:white;
        display:flex;
        align-items:center;
        &__report-holder {
            &__headline {
                display:flex;
                justify-content:center;
                color:black;
                        }
            &__img-holder {
                display:flex;
               align-items:center;
            &__hiking-img {
                 width:100%;
        }
        }
                         }
        
  }
     &__aside {
        display:flex;
        flex-direction:column;
        align-items:center;
        grid-column:1/4;
        background-color:white;
        color:green;
        border-right: 2px solid black;
        &__list-holder {
            &__list-items {
                list-style-type:none;
                padding-right:1rem;
                padding-bottom:.25rem;
            }
        }
      &__gear-images {
          display:flex;
          flex-direction:column;
          align-items:center;
      }
    }
#aside-img {
    height:13rem;

} 
}
@media (max-width:$max-width-ipad){
   .primary-wrapper {
            &__main {
                grid-column:2/12;
                &__report-holder {
                    &__img-holder {
                        &__hiking-img {
                            width:38rem;
                        }
                    }
                }
            }
            &__aside {
                display:none;
            }
        }
}
@media (max-width:$max-width-phone){
.primary-wrapper {
            &__main { 
                grid-column:2/11; 
                &__report-holder {
                    &__headline {
                        color:black;
                    }
                    &__date-line {
                        color:black;
                        padding-left:0rem;
                        
                    }
                    &__img-holder {
                    &__hiking-img {
                        width:20rem;
                        padding-left:0rem;
                    }
                    }
                    &__report-text {
                        color:black;
                        padding-left:0rem;
                    }
                        
                    }
            }
            &__aside {
                display:none;
            }
        
        }
}
</style>