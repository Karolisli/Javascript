function solution(X) {
    var a = " ";
    // top
    for(let x = 0; x < X/4 ; x++){
        for(let y = 0; y < X*2; y++){
            a += "*"
        }
        a += "<br>"
    }
    // middle
    for (let i = 0; i < X; i++) {
        // invisible
        for(let d = 0; d < (X*6)/4; d++){
            a+= "&nbsp";
        }
        // visible
        for(let s = 0; s < X/2; s++) {
            a += "*";
        }
        a += "<br>";
    }
    // bottom
    for(let x = 0; x < X/4 ; x++){
        for(let y = 0; y < X*2; y++){
            a += "*"
        }
        a += "<br>"
    }
    return a;
}

document.write(solution(12));