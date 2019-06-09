const button = document.querySelector("input[type=submit]");

button.addEventListener("click",go);

function go(){
    let input = document.querySelector("input[type=text]").value;
    let output = document.createTextNode(input);

    let texthere = document.createElement("p");
    box.appendChild(texthere);
    texthere.innerHTML = output;
}