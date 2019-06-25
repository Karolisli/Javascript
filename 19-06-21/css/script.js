'use strict';

const button = document.getElementById("submit");
button.addEventListener("click", go);

function go(){
    var table = document.querySelector("tbody");

    var time = document.getElementById("time").value;
    var spend = document.getElementById("spend").value;
    var price = document.getElementById("price").value;
    var train = document.getElementById("train").value;

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    var tr = document.createElement("tr");

    var output_time = document.createTextNode(time);
    var output_spend = document.createTextNode(spend);
    var output_price = document.createTextNode(price);
    var output_train = document.createTextNode(train);

    td1.appendChild(output_time);
    td2.appendChild(output_spend);
    td3.appendChild(output_train);
    td4.appendChild(output_price);

    tr.append(td1, td2, td3, td4);

    table.append(tr);
}