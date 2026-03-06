document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();

let email=document.getElementById("email").value.trim();
let msg=document.getElementById("message").value.trim();

if(!email.includes("@") || msg.length<10){
alert("Enter valid email and message.");
return;
}

alert("Message validated. Connect backend later.");
});
