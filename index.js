var wwidth = window.innerWidth; 
var mobile = (wwidth <= 1220) ? true : false; 
let labels = document.getElementsByClassName("tab-labels");
let tabs = document.getElementsByClassName("tab-content");


/* forces a reload on the page if the window is resized */
window.addEventListener('resize', changeLayout);
function changeLayout(){
    wwidth = window.innerWidth; 
    // console.log(wwidth, mobile);
    if (wwidth> 1220 && mobile == true){
        console.log("desktop view!"); 
        mobile = false; 
        location.reload(); 
    }
    
    if (wwidth < 1220 && mobile == false){
        console.log("mobile view!"); 
        mobile = true; 
        location.reload(); 
    }
}


if (wwidth > 1220) {
    /* Resets CSS Classes for Desktop View */
    /* shows navigation */
    document.getElementById("nav").style.display = "flexbox";
    for (var i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
        labels[i].classList.add('tab-inactive'); 
        labels[i].classList.remove('tab-active'); 
    }

    /* hides media tabs */
    var mediaTabs = document.getElementsByClassName("tab-media");
    for (var i = 0; i < mediaTabs.length; i++){
        mediaTabs[i].style.display = "none";
    }
    
    /* sets acrive tab to studios & experiments */
    document.getElementById("tab-se").classList.add('tab-active');
    document.getElementById('container-se').style.display = "block"; 

    /* Navigation Animations*/
    /* switching tabs */
    document.getElementById("tab-se").classList.add('tab-active');
    function switchtab(label, name){
        for (var i = 0; i < tabs.length; i++){
            tabs[i].style.display = "none";
            labels[i].classList.add('tab-inactive'); 
            labels[i].classList.remove('tab-active'); 
        }
        
        document.getElementById(label).classList.add('tab-active');
        document.getElementById(name).style.display = "block"; 
        console.log("switched to", name);
    }
} else {
    /* Resets CSS Classes for Mobile View */
    /* displays all content */
    for (var i = 0; i < tabs.length; i++){
        tabs[i].style.display = "block";
    }

    /* removes tabs from the content of the page */
    var mediaTabs = document.getElementsByClassName("tab-media");
    for (var i = 0; i < mediaTabs.length; i++){
        mediaTabs[i].style.display = "block";
        mediaTabs[i].classList.remove('tab-content'); 
        mediaTabs[i].classList.add('tab-labels'); 
    }

    /* hides navigation */
    document.getElementById("nav").style.display = "none";

    /* deactivates the switch tab function */
    function switchtab(label, name){ console.log("in here!")};
}

/* Header Animations */
/* hover icons */
let icons = document.getElementsByClassName("icons");
let activeIcons = document.getElementsByClassName("icons-active");
function showIcons() {
    for (var i = 0; i < icons.length; i++){
        icons[i].style.display = "none";
    }
    for (var i = 0; i < activeIcons.length; i++){
        console.log(activeIcons[i]);
        activeIcons[i].style.display = "block";
    }
}
function hideIcons() {
    for (var i = 0; i < icons.length; i++){
        icons[i].style.display = "block";
    }
    for (var i = 0; i < activeIcons.length; i++){
        console.log(activeIcons[i]);
        activeIcons[i].style.display = "none";
    }
}

/* header minimize */
function headermin() {
    let temp = document.getElementById("theheader")
    console.log(temp);
    temp.style.display = "none"; 
}

function headermax() {
    let temp = document.getElementById("theheader")
    console.log(temp);
    temp.style.display = "block"; 
}