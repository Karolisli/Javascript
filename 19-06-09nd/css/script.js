var array = ["Tevas","Mama","Sesuo","Brolis"];

array.forEach(myFunction)

function myFunction(value, array, index){

    var h_one = document.createElement("h1");

    var text = document.createTextNode(value);

    h_one.appendChild(text);

    document.body.appendChild(h_one);
}
