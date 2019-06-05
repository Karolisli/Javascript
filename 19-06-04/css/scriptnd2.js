'use strict';
function myFunction(){

    let years = document.querySelector("input[type=number]").value;

    let pound = 50;

    let output = document.getElementById("input");

    if(years < 10){
        output.innerHTML = pound;
    }else if(years >= 10 && years <= 20){
        output.innerHTML = pound + 50;
    }else{
        output.innerHTML = pound + 100;
    }

}