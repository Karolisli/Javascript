'use strict';

const button = document.querySelector("input[type=submit]");
button.addEventListener("click", go);

function go(){
    let data = document.querySelector("input[type=text]").value;
    let dataArray = data.split(" ");
    let car = dataArray[0];
    let market = dataArray[1];
    spausdinam(car, market);
}

function spausdinam(auto, market){
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p1.append(document.createTextNode(auto));
    p2.append(document.createTextNode(market));
    document.body.append(p1);
    document.body.append(p2);
}

