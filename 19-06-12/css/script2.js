'use strict';

// const clear = () => section.innerHTML = "";

    const button = document.querySelector("input[type=submit]");
    button.addEventListener('click', go);

    const section = document.querySelector("section");

function go(){
    var car = {type:"Auto marke", model:"modelis", price:"kaina"}

    car.type = document.querySelector("input[name=type]").value;
    car.model = document.querySelector("input[name=model]").value;
    car.price = document.querySelector("input[name=price]").value;

    next();
}

function next(){
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");

    h1.append(document.createTextNode(car.type));
    h2.append(document.createTextNode(car.model));
    h3.append(document.createTextNode(car.price));

    div.append(h1, h2, h3);
    section.append(div);
}
