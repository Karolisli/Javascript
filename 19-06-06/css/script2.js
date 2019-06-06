function clickMe(){
    let x = Math.floor(Math.random() * 15);

    let z = document.getElementById("output");

    // document.getElementById("test").innerHTML = x;
    switch(x){
        case 1:
            z.innerHTML = ("Winner you got 3 tickets");
            break;
        case 2: 
            z.innerHTML = ("Winner you got 2 tickets");
            break;
        case 3:
        case 4:
            z.innerHTML = ("Winner you got 1 ticket");
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            z.innerHTML = ("GO AWAY")
    }
}