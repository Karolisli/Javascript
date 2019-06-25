'use strict';
// function solution(A, B){
//     A = A.split('');
//     B = B.split('');

//     let answer = 0;

//     for(let i = 0; i < A.lenght; i++){
//         if(A[i] === "A" && B[i] == "A"){
//             answer++;
//         }else if (A[i] === "K" && B[i] !== "A" && B[i] !== "K"){
//             answer++;
//         }else if (A[i] === "Q" && B[i] !== "A" && B[i] !== "K" && B[i] !== "Q"){
//             answer++;
//         }else if (A[i] === "J" && B[i] !== "A" && B[i] !== "K" && B[i] !== "Q" && B[i] !== "J"){
//             answer++;
//         }else if (A[i] === "T" && B[i] !== "A" && B[i] !== "K" && B[i] !== "Q" && B[i] !== "J" && B[i] !== "T"){
//             answer++;
//         }else if (isNaN(A[i]) && A[i] > B[i]){
//             answer++;
//         }
//     }
// }

'use strict';
const app = document.querySelector("#app .wrapper");

const button = document.querySelector("input[type=submit]");
button.addEventListener("click", fn);

const del = document.querySelector("input[type=reset]");
del.addEventListener("click", removeTasks);

const clear = () => app.innerHTML = '';

var arr = [];

function Task(taskName, complete){
    this.taskName = taskName;
    this.complete = complete;
}

function fn(){
let taskName = document.getElementById("task").value;

if(taskName.trim() !== ""){
    let task = new Task(taskName, false);

    arr.push(task);
    displayTask();
    }
}

function displayTask(){

clear();

arr.forEach(function(v, i){

        let div = document.createElement("div");

        let text = document.createTextNode(v.taskName);

        let checkbox = document.createElement("input");

        checkbox.setAttribute("type", "checkbox");

            checkbox.addEventListener('change', event => {

                if (event.target.checked) {
                    v.complete = true;
                } else {
                    v.complete = false;
                }

            });

        div.append(checkbox, text);
        app.append(div);
    });

}

function removeTasks(){
arr = arr.filter(x => x.complete === false);
displayTask();
}