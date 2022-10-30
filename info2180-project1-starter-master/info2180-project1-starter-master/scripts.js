/* Add your JavaScript to this file */

"use strict";


window.onload= function(){
var formEl = document.getElementsByTagName("FORM")[0];


formEl.addEventListener("submit", function(e) {
    e.preventDefault(); 
    var email = document.getElementById("email").value; 
    if (email==""){ 
      alert("Please enter an email address"); 
    }
    else{
        formEl.innerHTML="You have subscribed successfully using the email address: "+email;
         
    }

});
}
