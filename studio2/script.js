(function(){
    'use strict';
    console.log('reading js'); 

    /* variable declarations */
    let location = 0;      //slideshow location (previous index)
    let index = 1;      //index of current image
    let direction = true;       //direction of carouself movement (true if forwards, false if backwards)

    const slideshow = document.querySelector("ul");      //slideshow element
    let current = document.getElementsByTagName("li")[0].firstChild;      //current element of slideshow

    /* starts slideshow on first image */
    slideshow.style.transform = `translateX(20em)`;

    /* function to start the slideshow */
    function startSlideshow() {
        /* variable declarations */
        const numImages = document.querySelectorAll("img");       //number of images 
        
        /* updates direction if necessary */ 
        if (location === numImages.length - 2) {
            direction = false; 
        } else if (location == -1){
            slideshow.style.transform = `translateX(20em)`;
            direction = true; 
        }

        /* moves carousel */
        slideshow.style.transform = `translateX(-${location * 20}em)`;

        /* transforms current image */
        if (location >= -1){
            current.classList.remove("active");
            current = document.getElementsByTagName("li")[index].firstChild; 
            current.classList.add("active"); 
        }

        /* increments index based on current direction */
        (direction) ? location+=1 : location -=1; 
        (direction) ? index+=1 : index-=1; 
    }

    /* function for pop-up */
    current.addEventListener("click", function(e){
        
    }); 

    /* timer for running the slideshow */
    setInterval(() => {
        startSlideshow();
      }, 2000);
})

();