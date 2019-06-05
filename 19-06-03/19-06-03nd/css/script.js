function myFunction(){

    var amzius = document.querySelector("input[type=number]").value;

    let output = document.getElementById("output");

    var price = 6;

    if (amzius <= 16){
        output.innerHTML = price * 0.5; 
    }else if (amzius >= 60){
        output.innerHTML = price * (1/3) ;
    }else {
        output.innerHTML = price;
    }
}
