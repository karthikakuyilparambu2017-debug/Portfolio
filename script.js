// const toggleBtn =
// document.getElementById("toggle") ||
// document.getElementById("toggle") || document.getElementById("toggle") || document.getElementById("toggle") ;


// if(localStorage.getItem("theme") === "dark"){

//     document.body.classList.add("dark-mode");
// }


// toggleBtn.onclick = function(){

//     document.body.classList.toggle("dark-mode");


//     if(document.body.classList.contains("dark-mode")){

//         localStorage.setItem("theme","dark");
//     }
//     else{

//         localStorage.setItem("theme","light");
//     }
// }

const toggleBtn = document.getElementById("toggle");

// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// Only add click if button exists
if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}
// function sub(){
// document.getElementById("form").addEventListener("submit",function(e){
//     e.preventDefault();

//     let name=document.getElementById("name").value;
//     let email=document.getElementById("email").value;
//     let message=document.getElementById("message").value;
//     if(name==="" && email==="" && message===""){
//              document.getElementById("s").innerHTML="enter your name,email and message";
//           }
//             else if(name==="" && email===""){
//             document.getElementById("s").innerHTML="enter your name and email "; 
//           }
//           else if(email==="" && message===""){
//             document.getElementById("s").innerHTML="enter your email and a message"; 
//           }
//           else if(message==="" && name===""){
//             document.getElementById("s").innerHTML="enter your name and a message";
//           }
//             else if(name===""){
//             document.getElementById("s").innerHTML="enter your name"; 
//           }
//            else if(email===""){
//             document.getElementById("s").innerHTML="enter your email"; 
//           }
//           else if(message===""){
//             document.getElementById("s").innerHTML="enter a message"; 
//           }
          
          
//           else{
//              document.getElementById("s").innerHTML="Successfully send";
//               document.getElementById("form").reset();
//           }         
// })
// }
// 

document.getElementById("form").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let output = document.getElementById("s");

    if(!name && !email && !message){
        output.innerHTML = "Enter name, email and message";
        output.style.color = "red";
    }
    else if(!name){
        output.innerHTML = "Enter your name";
        output.style.color = "red";
    }
    else if(!email){
        output.innerHTML = "Enter your email";
        output.style.color = "red";
    }
    else if(!message){
        output.innerHTML = "Enter your message";
        output.style.color = "red";
    }
    else{
        output.innerHTML = "Successfully sent ✔";
        output.style.color = "lightgreen";
        this.reset();
    }
});