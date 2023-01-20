let labels = document.getElementsByClassName("tab-labels");
let tabs = document.getElementsByClassName("tab-content");

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