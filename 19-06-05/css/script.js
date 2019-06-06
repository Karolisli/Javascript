// "use strict",
// trikampis
function myFunction(){
    var N = 8;
    for(let z = 0; z < N; z++){
        for(let y = 0; y <= z; y++){
            document.write("*");
        } 
        document.write("<br>");
    }
}
// pirmaide
function moFunction(){
    var N = 8;
    for(let z = 0; z <= N; z++){
        document.write("<br>");
        for(let y = 0; y <= (N - z); y++){
            document.write("&nbsp;");
        }
        for(let q = 0; q <= z; q++){
            document.write("*");
        }
    }
}
// kita piramide
function fn(){
    var N = 8;
    for(let z = 0; z >= N; z--){
        document.write("<br>");
       for(let x = 0; x <= z; x++){
           document.write("+");
       }
       for(let c = 0; c <= z; c++){
           document.write("*");
       }
    }
}
