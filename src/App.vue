<template>
  <div id="app">
  </div>
  <router-view/>
 
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
@import "./scss/_variables.scss";
html {
    height:100%;
    max-width:100%;
    overflow-x:hidden;
    font-family:$font-stack;
}
body {
    max-width:100%;
    overflow-x:hidden;
    background-color:$primary-background-color;
}
.app {
}
.primary-wrapper {
    padding-right:0;
    min-height:100%;
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap:1rem;
    grid-template-rows: repeat(auto, 4rem);
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



.main-footer {

    border-top: 3px solid gray;
    margin-top:5rem;
    width:100%;
    display:flex;
    color:$footer-font-color;
    background:$footer-background-color;
    font-family:$font-stack;
    font-style:italic;
    align-items:center;
    justify-content:flex-start;
    font-size:1rem;
    height:5rem;
    &__primary-list {
        list-style-type:none;
        display:flex;
        justify-content:flex-start;
        width:100%;
        &__list-item {
            padding-right:1rem;
        &__home-link {
            color:white;
        }
        }
    }

}
@media (max-width: $max-width-ipad-pro) {

        .primary-wrapper {
            &__main-header-img-holder {
                &__img {
                    &:first-child{
                        display:none;
                        //Hides picture that doesnt fit onto screen. normally size would be a design side thing, in the future I will standardize my image sizes or find a more scalable implementation
                    }
                }
            }
        }
}
@media (max-width: $max-width-ipad)
{

        .primary-wrapper {
            &__main-header-img-holder {
                &__img {
                    &:not(:nth-child(3)) {
                        display:none;
                    }
                    //hides the images I don't want to display
                }
        }
}
}
@media (max-width:$max-width-phone) {
    .primary-header__main-headline {
      font-size:1rem;
    }

     .primary-wrapper {
            &__main-header-welcome-container {
                grid-column:1/13;
                //changes spacing to fit full screen on mobile
            }
            &__main-header-container {
                grid-column:1/13;
                grid-row:7;
                &__welcome-line {
                    font-size:1.5rem;
                }
                //same as above
            }
            &__main-intro-text-holder {
                grid-column:1/13;
                grid-row:9;
            
            }
            &__blog-entry-holder {
                grid-column:1/13;
            
            &__blog-entry {
                grid-row:12;
            }
        }
        }//end primary wrapper

     .primary-wrapper {
            &__main-header-welcome-container {
                grid-column:1/13;
                //changes spacing to fit full screen on mobile
            }
            &__main-header-container {
                grid-column:1/13;
                grid-row:7;
                &__welcome-line {
                    font-size:1.5rem;
                }
                //same as above
            }
            &__main-intro-text-holder {
                grid-column:1/13;
                grid-row:9;
            
            }
            &__blog-entry-holder {
                grid-column:1/13;
            
            &__blog-entry {
                grid-row:12;
            }
        }
        }//end primary wrapper
    .main-footer {
        display:flex;
        justify-content: flex-end;
        font-size:.4rem;
        height:3rem;
  
    }
}

//To do: Change location on gear reviews page. Lengthen menu. Fix pictures of main page on mobile.
</style>