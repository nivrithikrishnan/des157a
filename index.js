var wwidth = window.innerWidth; 
var mobile = (wwidth < 1220) ? true : false; 
let labels = document.getElementsByClassName("tab-labels");
let tabs = document.getElementsByClassName("tab-content");


window.addEventListener('resize', changeLayout);

function debounce(func){
    var timer;
    return function(event){
      if(timer) clearTimeout(timer);
      timer = setTimeout(func,100,event);
    };
  }

function changeLayout(){
    wwidth = window.innerWidth; 
    console.log(wwidth, mobile);
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
        labels[i].classList.add('tab-active'); 
        labels[i].classList.remove('tab-inactive'); 
    }

    /* adds necessary css to tabs */


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