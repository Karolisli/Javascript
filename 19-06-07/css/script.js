const app = document.getElementById("app");
const button = document.querySelector("input[type=submit]");

button.addEventListener("click",fn);

function fn(){
    let name = document.getElementById("name").value;
    let num = document.getElementById("num").value;

    createH1(name, num);
}

function createH1(text, n){
    for(let i = 0; i < n; i++){
    let h1 = document.createElement("h1");
    app.append(h1);
    h1.innerHTML = text;
    }
}
