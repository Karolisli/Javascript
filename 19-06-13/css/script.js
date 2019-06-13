'use strict';
const button = document.getElementById("get");
button.addEventListener('click', cars);

const death_button = document.getElementById("sub_remove");
death_button.addEventListener('click', byebye);

const table = document.querySelector("table");
const clear = () => table.innerHTML = "";

var masterarray = [];

function cars(){
    var array1 = [];

    let brand = document.getElementById("brand").value;
    let model = document.getElementById("model").value;
    let doors = document.getElementById("doors").value;
    let price = document.getElementById("price").value;

    array1.push(brand, model, doors, price);
    masterarray.push(array1);

    gonext();
}

function gonext(){
    clear();

    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let th4 = document.createElement("th");
    let th5 = document.createElement("th");

    th1.append(document.createTextNode("ID"));
    th2.append(document.createTextNode("Brand"));
    th3.append(document.createTextNode("Model"));
    th4.append(document.createTextNode("No.Doors"));
    th5.append(document.createTextNode("Price"));

    tr.append(th1, th2, th3, th4, th5);
    table.append(tr);

    masterarray.forEach(function(v, i){

        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
    
        td1.append(document.createTextNode(i));
        td2.append(document.createTextNode(v[0]));
        td3.append(document.createTextNode(v[1]));
        td4.append(document.createTextNode(v[2]));
        td5.append(document.createTextNode(v[3]));
    
        tr.append(td1, td2, td3, td4, td5);
        table.append(tr); 
        console.log(masterarray)
    });
}
// function byebye(sub_remove){
//     masterarray.splice(0, 5, "");

//     cars();
// }
