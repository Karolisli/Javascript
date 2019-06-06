function clickMe(){
    let x = Math.floor(Math.random() * 14);

    let z = document.getElementById("output");

    document.getElementById("test").innerHTML = x;
    if(x < 1){
        z.innerHTML = ("You got 3 tickets");
    }else if(x <= 2){
        z.innerHTML = ("You got 2 tickets");
    }else if(x <= 4){
        z.innerHTML = ("You got 1 ticket");
    }else{
        z.innerHTML = ("You got nothing");
    }
    return;
}
