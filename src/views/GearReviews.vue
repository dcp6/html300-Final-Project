<template>
<div class="Gear-Reviews">
<HeaderAndNav msg="Welcome"/>
<div class="primary-wrapper">
<div class="primary-wrapper__main-header-welcome-container">
</div> <!--End main header welcome container-->
 <aside class="primary-wrapper__aside">
    <h3 class="primary-wrapper__aside__headline">{{listHeader}} </h3>
    <ul class="primary-wrapper__aside__list-holder">
    <li class="primary-wrapper__aside__list-holder__list-items" v-for="gear in gearItemList">{{gear}}</li>
    </ul>
    <template v-if="parseInt(gearSelector) != 8" >
      <p class="primary-wrapper__aside__img-header">{{productData[gearSelector].itemData[0]}}</p>
    <img class="primary-wrapper__aside__primary-image" v-bind:src="productData[gearSelector].itemData[1]" v-bind:id="imgIdentification" v-on:click="plusOne">
    </template>
      <template v-else>
    <p class="primary-wrapper__aside__done-message">{{doneMessage}}</p>
    </template>
    </aside>
    <main class="primary-wrapper__main">
  
     <div class="primary-wrapper__main__review-holder" v-for="gearData in gearReviewData">
            <h3 class="primary-wrapper__main__review-holder__headline">{{gearHeader}}</h3>
        <h4 class="primarywrapper__main__review-holder__gear-review-header">{{gearReviewData[0].header}}</h4>
        <p class="primary-wrapper__main__review-holder__gear-review-text">{{gearReviewData[0].text1}}</p>
        <div class="primary-wrapper__main__review-holder__img-holder">
        <img class="primary-wrapper__main__review-holder__img-holder__img" v-bind:src="gearReviewData[0].image1" v-bind:alt="gearReviewData[0].altText1">
        <img class="primary-wrapper__main__review-holder__img-holder__img" v-bind:src="gearReviewData[0].image2" v-bind:alt="gearReviewData[0].altText2">
            <img class="primary-wrapper__main__review-holder__img-holder__img" v-bind:src="gearReviewData[0].image3" v-bind:alt="gearReviewData[0].altText3">
        </div>
          <p class="primary-wrapper__main__review-holder__gear-review-text">{{gearReviewData[0].text2}}</p>
 
     </div><!--report holder-->
    
    
    
    
    
    </main>


</div><!--primary wrapper-->
<Footer msg="End"/>
</div><!--end trip planner div-->
</template>
<style lang="scss">
@import "@/scss/_variables.scss"; 
.primary-wrapper {
     &__aside {
        display:flex;
        font-weight:300;
        flex-direction:column;
        align-items:center;
        grid-column:2/5;
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
        &__doneMessage {
        font-size:1.2rem;
    }
      &__gear-images {
          display:flex;
          flex-direction:column;
          align-items:center;
      }
    }
#aside-img {
    height:10rem;

} 
&__main {
    grid-column:5/12;
    &__review-holder {
    &__headline {
        font-size: 1.5rem;
        text-align:center;
        
    }
        &__gear-review-text{
            font-weight:300;
        }
        &__img-holder {
        &__img {
            width: 29%;
            padding-right: 6.5%;
            &:last-child {
                padding-right:0%;
            }
        }
        }
    }
}
}
@media (max-width:$max-width-ipad){
   .primary-wrapper {
            &__main {
                grid-column:2/12;
                &__review-holder {

                
                &__img-holder {
                    &__img {
                        height:16rem;
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
                grid-column:1/12; 
                &__review-holder {
                    &__headline {
                        color:black;
                    }
                    &__review-header {
                        color:black;
                        padding-left:0rem;
                        
                    }
                    &__gear-review-text {
                        line-height:130%;
                    }
                    &__img-holder {
                    &__img {
                        height:25rem;
                        width:100%;
                        padding-left:0rem;
                    }
                    }
                    &__review-text {
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
  data() {
    return {
      listHeader:"Gear List",
      gearHeader:"Gear Reviews",
      gearSelector:0,
      doneMessage: "Thats all the gear! Refresh the page to view them again.",
      gearItemList:["Hat: Hood Hats","Rain Jacket: REI Drypoint GTX","Shirt: Costco Active Tee","Underwear: Fruit of the Loom CoolZone","Pants: Outdoor Research Ferrosi","Socks: Darn Tough Hiker Full Cushion","Boots: Salomon X Ultra Mid 3 GTX","Sandals: Bedrock Cairn Adventure Sandals","Click below to cycle through pieces of gear."     ],
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
            ],
        gearReviewData:[
            {
            header:"Bedrock Sandals: The Cairn Adventure model",
            text1:"I love this sandal. Nunc id magna tempus, mollis libero vitae, sollicitudin dui. Morbi vel leo eu ipsum ultricies scelerisque sit amet vel tellus. Sed sed erat non neque bibendum dapibus nec quis lacus. Suspendisse sed ipsum nulla. Maecenas pulvinar dapibus felis, a lacinia risus accumsan a. In vitae convallis sem. Nam venenatis eu libero id egestas. Nullam eleifend fringilla nisl porttitor sagittis. Phasellus interdum massa nec nisl aliquam, ac volutpat nunc porttitor. Nam egestas pharetra ipsum, vehicula bibendum ligula aliquam ac. Nam sagittis neque vitae ante dictum tincidunt. Nullam felis massa, malesuada blandit eros et, placerat vehicula erat. Aliquam lacinia urna lectus, mollis suscipit dolor rutrum non. Duis id tempus ligula. Cras euismod turpis ut nulla vehicula tempus. Duis urna mauris, posuere nec sapien id, faucibus mattis mi.",
            image1:require("@/assets/sandal-profile.jpg"),
            altText1:"Profile of Dan with sandals",
            image2:require("@/assets/sandals-closeup.jpg"),
            altText2:"Closer image of sandals",
            image3:require("@/assets/sandal-closest.jpg"),
            altText3:"Close up of sandals in profile",
            text2:"Aliquam erat volutpat. Etiam quis tempor velit, at euismod dolor. Nunc sed lacus eget lorem interdum imperdiet nec in est. Fusce aliquet feugiat nibh, sed vulputate mi euismod at. Aliquam lacus ante, pharetra eu blandit ut, vestibulum sit amet ipsum. Vivamus rutrum sapien in est ultricies aliquet. Aliquam convallis nunc libero, vel blandit ligula ultrices quis. Cras lorem elit, euismod ut velit vel, tempus laoreet turpis. Ut consequat, tellus ut vulputate ultrices, mi purus pellentesque turpis, sit amet finibus dui dui et est. Pellentesque interdum maximus tristique. Donec at lectus purus."
            }
        ]
        
          
    }     
  },     
            methods: {
              plusOne() {
                    this.gearSelector += 1

              }//random number generator


          }//method end
  }


</script>
