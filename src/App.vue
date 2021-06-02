<template>
  <div id="app">
  </div>
  <router-view/>
  <router-link to="/tripreports"></router-link>
</template>

<style lang="scss">
$font-stack: 'Roboto', Arial, sans-serif;
$primary-font-color:black;
$primary-background-color:white;
$menu-item-color: white;
$hamburger-menu-color: black;
$hamburger-menu-color-change:black;
$hamburger-menu-link-color:#49cfae;;
$menu-background-color:black;
$toggle-top-location:1rem;
$toggle-left-location:0.5rem;
$max-width-ipad-pro:64rem;
$max-width-ipad:48rem;
$max-width-phone:29.75rem; 


$footer-background-color:black;
$footer-font-color:white;
html {
    height:100%;
    max-width:100%;
    overflow-x:hidden;
}
body {
    max-width:100%;
    overflow-x:hidden;
    font-family:$font-stack;
    background-color:$primary-background-color;
    height:100%;
}
.primary-wrapper {
    padding-right:0;
    min-height:100%;
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap:1rem;
    grid-template-rows: repeat(auto, 2rem);
    &__main-header-img-holder {
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        grid-column:2/12;
        grid-row:1/8;
        //positions the image section
        &__img {
            height:25rem;
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
    &__intro-para {
        color:$primary-font-color;
        font-size:1.25rem;
    }
    }
    &__blog-entry-holder {
        grid-column:2/12;
        grid-row:8;
        
    &__blog-entry {
            color:$primary-font-color;
    }
    }
  
}


.nav-bar {
    
    z-index:3;
    &__main-holder{
    //A checkbox is used to detect when the menu is selected. This places the check box, defines its dimensions, and sets its z-index on top so it can be clicked and its opacity at 0.
        &__check-box {
        top:$toggle-top-location;
        position:absolute;
        left:$toggle-left-location;
        z-index:3;
        height:5.4rem;
        width:4.6rem;
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
        left:($toggle-left-location+0.25rem);
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
       margin:(-1rem+$toggle-top-location) 0 0 -.5rem;
       padding:1rem 0rem 1rem 1rem;
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
    .nav-bar {
        &__main-holder {
            &__check-box {
                height:2.4rem;
                width:2.3rem;
                &:checked ~ div span {
                    transform: rotate(45deg) translate(-.52rem, -.52rem);
                }
            }
        &__hamburger {
            &__lines {
                height:.5rem;
                width:2rem;
            }
        }
        }
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
    .main-footer {
        display:flex;
        justify-content: flex-end;
        font-size:.4rem;
        height:3rem;
  
    }
}
</style>
