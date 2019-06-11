// konstruktoriaus funkcija
// function id(name,surname,age){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }
// let person = new id("Karolis","Liesys",48);

// console.log(person);

// var jonas = new id("Jonas","Lord",98)

// console.log(jonas.surname)
const button = document.querySelector("input[type=submit]");
button.addEventListener('click', fn);

var table = document.querySelector("table")
    table.appendChild(document.createElement("tr")
        .appendChild(document.createElement("td")
            .appendChild(document.createTextNode("Name"))));

function fn(){
    let name = document.getElementById("name").value;
    let surname = document.getElementById("lname").value;

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.append(document.createTextNode(name));
    let td2 = document.createElement("tr");
    td2.append(document.createTextNode(surname));

    tr.append(td1, td2);
    table.append(tr);
    
}
