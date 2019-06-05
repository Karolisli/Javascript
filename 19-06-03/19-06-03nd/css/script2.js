function myFunction(){
    var amzius = document.querySelector("input[type=number]").value;

    var ats = document.getElementById("ats");

    var no = document.getElementById("ne").checked;

    if(amzius>=18 && amzius<=30 && no){
        ats.innerHTML = "Varai i kara!";
    }else {
        ats.innerHTML = "Dink!";
    }
}