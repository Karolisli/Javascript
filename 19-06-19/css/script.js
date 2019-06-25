'use strict';

const button = document.querySelector("input[type=submit]");
button.addEventListener("click", fn);

function fn(){
    let text = document.getElementById("here").value;
    
    var res = text.split("");

    if(res[1] === "6"){
        let p1 = document.createElement("p");
        p1.append(document.createTextNode("leistinas"));
        document.body.append(p1);
    }else if(res[1] === "5"){
        let p1 = document.createElement("p");
        p1.append(document.createTextNode("mobilusis"));
        document.body.append(p1);
    }else{
        let p1 = document.createElement("p");
        p1.append(document.createTextNode("neleistinas"));
        document.body.append(p1);
    }
}
