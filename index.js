/* Navigation Animations*/
/* switching tabs */
let labels = document.getElementsByClassName("tab-labels");
let tabs = document.getElementsByClassName("tab-content");

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