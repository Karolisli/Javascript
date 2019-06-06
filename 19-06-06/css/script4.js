let div = document.createElement("div");
document.body.appendChild(div);

let h1 = document.createElement("h1");
div.appendChild(h1);

let h2 = document.createElement("h2");
div.appendChild(h2);

let p = document.createElement("p");
div.appendChild(p);

document.querySelector("h1").innerHTML = "Karolis";

document.querySelector("h2").innerHTML = "Liesys";

document.querySelector("p").innerHTML = "There is nothing intresthing about me, exept having the worst memory at remembering names of friends.";