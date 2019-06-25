'use strict';
// var array = [["petras"],
//             ["as"],
//         //  index-V           V
//             ["dalia"],
//             ["bananas"],
//             ["test"]
//         ];
//         array.sort(function(a,b){
//         //   array-V V-index
//             return a[1] < b[1] ? 1 : -1;

//         });
//         console.log(array);

const button = document.querySelector("input[type=submit]");
button.addEventListener("click", fn);

var here = ["bamana", "hello", "goodbye", "you", "fail"];

function fn(){
    here.sort();
    console.log(here);
} 