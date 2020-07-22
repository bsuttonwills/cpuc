/*global $*/
/*global _*/

var user = "cpuc77dev";
var pass = "csumb1994";

var passIn = document.getElementById('passInput');
var userIn = document.getElementById('userInput');

$("#loginForm").on("submit", function(event){

    // alert("Submitting form...");
    if (!isFormValid()){
        event.preventDefault();
        // alert("Wrong username or password")
    } else {
      alert("success")
    }

    // $("#welcome").html(`Welcome ${username}!`);

});//signup

function isFormValid(){
    let isValid = true;

    if ($("userInput").val() != user.val()){
        isValid = false;
        $("#userError").html("Username is wrong");
        $("#userError").css("color", "red");
    }

    if ($("#passInput").val() != pass.val()){
        $("#passError").html("Incorrect password");
        $("#passError").css("color", "red");
        isValid =  false;
    }
    alert(isValid)
    return isValid;
}
