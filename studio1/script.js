(function(){
    'use strict';
    console.log('reading js'); 

    const form = document.querySelector('#theform');

    form.addEventListener('submit', function(e){
        e.preventDefault(); 

        //variables 
        let myText = ``; 
        const name = document.querySelector('#name').value; 
        const cname = document.querySelector('#cname').value; 
        const jtitle = document.querySelector('#jtitle').value; 
        const skill = document.querySelector('#skill').value; 
        const num = document.querySelector('#num').value; 
        const result = document.querySelector('#result').value;

        //error handling
        if (name == ''){
            madlib.innerHTML = `Please provide a name`;
            document.querySelector('#name').focus(); 
        } else if (cname == ''){
            madlib.innerHTML = `Please provide a company name`;
            document.querySelector('#cname').focus(); 
        } else if (jtitle == ''){
            madlib.innerHTML = `Please provide a job title`;
            document.querySelector('#jtitle').focus(); 
        } else if (skill == ''){
            madlib.innerHTML = `Please provide a skill`;
            document.querySelector('#skill').focus(); 
        } else if (num == ''){
            madlib.innerHTML = `Please provide a number`;
            document.querySelector('#num').focus(); 
        } else {
            const formElements = document.querySelectorAll('input[type=text'); 
            for (let i=0; i<formElements.length; i++){
                formElements[i].value = ''; 
            } 

            //displays result
            document.getElementById('theform').style.display = "none"; 
            document.getElementsByTagName('h1')[0].style.color = "#EEEEEE"; 
            document.querySelector('#madlib').style.color = "#EEEEEE"; 
            if (result == "Accept"){
                myText = (`${"<br>"} Hi ${name}, ${"<br>"}
                ${cname} is delighted to offer you the position of ${jtitle}! We would like to thank you for taking the time to talk with our team. We were especially impressed with your ability to ${skill}. 
                You can expect to start at the beginning of next month, with a salary of $${num} per hour. ${"<br>"}
                Congratulations!`); 
                document.body.style.backgroundColor = "#2D572C"; 
            } else {
                myText = (`${"<br>"} Hi ${name}, ${"<br>"}
                We appreciate your interest in ${cname} and the time you’ve invested in applying for the ${jtitle} opening.
                We ended up moving forward with another candidate, but we’d like to thank you for talking to our team and giving us the opportunity to learn about your ability to ${skill}. We hope you’ll keep us in mind and we encourage you to apply again after ${num} months. \n
                We wish you the best of luck with your job search and future endeavors.`); 
                document.body.style.backgroundColor = "#9B111E"; 
            }
            madlib.innerHTML = `${myText}`;
        }
    });
})

();