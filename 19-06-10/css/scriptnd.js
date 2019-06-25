'use strict';
const button = document.querySelector("input[type=submit]");
button.addEventListener('click', fn);

function fn(){
    var section = document.querySelector("section")
    var div = section.appendChild(document.createElement("div"));
        div.appendChild(document.createElement("h1"));
        div.appendChild(document.createElement("h2"));
        div.appendChild(document.createElement("h3"));

    let name = document.getElementById("name").value;

    let phone = document.getElementById("phone").value;

    let split = name.split(" ", 2);

    let first = split[0];
    let second = split[1];

    let h_one = document.createElement("h1");
    let h_two = document.createElement("h2");
    let h_three = document.createElement("h3");


    h_one.append(document.createTextNode(first));
    h_two.append(document.createTextNode(second));
    h_three.append(document.createTextNode(phone));


    console.log(h_one);
}
