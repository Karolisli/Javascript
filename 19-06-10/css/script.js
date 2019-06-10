function solution(X) {
    var a = " ";
    for (let i = 0; i < X; i++) {
        for(let s = 0; s < X/2; s++) {
            a += "*";
        }
        a += "<br>";
    }
    for(let x = 0; x < X/4 ; x++){
        for(let y = 0; y < X*2; y++){
            a += "*"
        }
        a += "<br>"
    }
    return a;
}

document.write(solution(9));