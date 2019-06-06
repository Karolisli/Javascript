"use strict";
// var me ={
//     name: "Karolis",
//     surname: "Liesys",
//     age: 125,
//     greeting: function(){alert("My name is"+" "+me.name+" "+"lastname"+" "+ me.surname+" "+"age"+" "+me.age)}
// };

// me.greeting();


// console.log(me);

// var as = {name: "k"}; 

// document.write(me.name);


// teste V
function here(){
    let rand = Math.floor(Math.random() * 4 + 1);
    let text = "Write here";
    
    do{
        
        var answer = prompt(text);
        text = "Wrong"
    }while(answer != rand);

    alert("You guest right");

}