'use strict';
function myFunction(){

    let guess = document.querySelector("input[type=number]").value;

    let number = 3;

    let output = document.getElementById("input");

    if(guess == number){
        output.innerHTML = ("Correct- well done!");
    }else{
        output.innerHTML = ("No, guess again:"); 
    }
}