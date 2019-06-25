const main = document.getElementById("menu");

const button = document.getElementById("nav");

button.addEventListener("click", function(){
    main.classList.toggle("active");
})