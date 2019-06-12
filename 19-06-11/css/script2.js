'use strict';
const button = document.querySelector("input[type=submit]");
button.addEventListener('click', fn);

var kitas = [];
let stalas = document.querySelector("tbody");

function fn(){
    let fullname = document.getElementById("fullname").value;
    let splitname = fullname.split(" ");
    let name = splitname[0];
    let surname = splitname[1];

    let radio = document.querySelector("input[value=top]").checked;

    if(radio === true){
        kitas.unshift([name,surname]);
    }else{
        kitas.push([name,surname]);
    }
    go(kitas);
}
function go(betkas){
    stalas.innerHTML = "";
    betkas.forEach(function(value, index){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        tr.append(td1, td2, td3);
        stalas.append(tr);
        
        td1.innerHTML = index;
        td2.innerHTML = value[0];
        td3.innerHTML = value[1];
    });


}
