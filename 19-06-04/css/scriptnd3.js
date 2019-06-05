'use strict';
function myFunction(){
    let num = 3;

    let guess;

    do{
        guess = prompt("Guess the number.");
        if(num != guess){
            alert("No, guess again");
        }
    }
    while(num != guess);

    alert("Correct- well done!");
}