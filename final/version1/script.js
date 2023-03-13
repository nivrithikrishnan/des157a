//moves twice

(function(){
    'use strict';
    console.log('reading js'); 

    /* variable declarations */
    let location = 0;      
    let index = 1;    
    let direction = true;  
    let infoNode;      

    const slideshow = document.querySelector("div ul");    
    const card = document.getElementById('card'); 
    let current = document.getElementsByTagName("li")[0].firstChild;     

    /* starts slideshow on first image */
    slideshow.style.transform = `translateX(20em)`;

    /* function to start the slideshow */
    function startSlideshow() {
        /* variable declarations */
        const numImages = document.querySelectorAll("img");     
        
        /* updates direction if necessary */ 
        if (location === numImages.length - 3) {
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
    document.querySelectorAll("div ul img").forEach(function(element){
        element.addEventListener("click", function(e){
            if (element.classList.contains("active")){
                /* blur slideshow, display card */
                slideshow.style.webkitFilter = "blur(10px)";
                card.style.display = "flex";

                /* pop-up content */
                var preview = element.cloneNode(true); //creates a duplicate element 
                document.getElementById("card-img").appendChild(preview); 

                infoNode = document.createTextNode(element.getAttribute('alt'))
                document.getElementById("card-info").appendChild(infoNode);

                clearInterval(start);
            } 
        });
    })

    /* function for closing pop-up */
    document.getElementById("close").addEventListener("click", function(e){
        slideshow.style.webkitFilter = "blur(0px)";
        card.style.display = "none"; 
        
        /* deletes pop-up content */
        document.getElementById("card-img").removeChild(document.getElementById("card-img").firstChild);
        document.getElementById("card-info").removeChild(infoNode);
        
        /* timer for running the slideshow */
        start = setInterval(startSlideshow, 2000);
    }); 

    /* timer for running the slideshow */
    var start = setInterval(startSlideshow, 2000);
})

();