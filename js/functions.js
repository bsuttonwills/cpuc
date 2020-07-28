/*global $*/
/*global _*/
var username = $("#username").val();
var password = $("#password").val();

$("#loginForm").on("submit", function(event){
    $("#userError").html("");
    $("#passError").html("");
    // alert("Submitting form...");
    if (!isFormValid()){
        event.preventDefault();
    }

    // $("#welcome").html(`Welcome ${username}!`);

});//login

function isFormValid(){
    let isValid = true;

    if ($("#username").val().length == 0){
        isValid = false;
        $("#userError").html("Username is required");
        $("#userError").css("color", "red");
    }

    if ($("#username").val() !== "cpuc77dev"){
        $("#userError").html("Incorrect username.");
        $("#userError").css("color", "red");
        isValid =  false;
    }

    if ($("#password").val() !== "csumb1994"){
        $("#passError").html("Incorrect password.");
        $("#passError").css("color", "red");
        isValid =  false;
    }

    return isValid;
}//username and password check

$("#getCsvFile").on("submit", function(event){
    $("#dataError").html("");
    if (!getData()){
        event.preventDefault();
        // alert("Wrong username or password")
    }

});//get csv from user

function getData(){
  newCSV = $("#csvFile").val()
  let isValid = true;

  if ($("#csvFile").val().length === 0){
      isValid = false;
      $("#dataError").html("No file entered.");
  }

  if ($("#csvFile").val().split('.').pop() !== "csv"){
      $("#dataError").html("Incorrect file type");
      $("#dataError").css("color", "red");
      isValid =  false;
  }
  // alert(isValid)
  console.log(newCSV);
  return isValid;
}//check csv

function Upload() {
    var fileUpload = document.getElementById("fileUpload");
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
    // if (regex.test(fileUpload.value.toLowerCase())) {
    //     if (typeof (FileReader) != "undefined") {
    //         var reader = new FileReader();
    //         reader.onload = function (e) {
    //             var table = document.createElement("table");
    //             var rows = e.target.result.split("\n");
    //             for (var i = 0; i < rows.length; i++) {
    //                 var cells = rows[i].split(",");
    //                 if (cells.length > 1) {
    //                     var row = table.insertRow(-1);
    //                     for (var j = 0; j < cells.length; j++) {
    //                         var cell = row.insertCell(-1);
    //                         cell.innerHTML = cells[j];
    //                     }
    //                 }
    //             }
    //             var dvCSV = document.getElementById("dvCSV");
    //             dvCSV.innerHTML = "";
    //             dvCSV.appendChild(table);
    //         }
    //         reader.readAsText(fileUpload.files[0]);
    //     } else {
    //         alert("This browser does not support HTML5.");
    //     }
    // } else {
    //     alert("Please upload a valid CSV file.");
    // }
}


$("#tmobileDrop").on("submit", function(event){
  //Download Graph
  



});

$("#verizonDrop").on("submit", function(event){
    $("#dataError").html("");
    if (!getData()){
        event.preventDefault();
        // alert("Wrong username or password")
    }

});

$("#sprintDrop").on("submit", function(event){
    $("#dataError").html("");
    if (!getData()){
        event.preventDefault();
        // alert("Wrong username or password")
    }

});

$("#atntDrop").on("submit", function(event){
    $("#dataError").html("");
    if (!getData()){
        event.preventDefault();
        // alert("Wrong username or password")
    }

});

$("#otherDrop").on("submit", function(event){
    $("#dataError").html("");
    if (!getData()){
        event.preventDefault();
        // alert("Wrong username or password")
    }

});

$("#allDrop").on("submit", function(event){
    $("#dataError").html("");
    if (!getData()){
        event.preventDefault();
        // alert("Wrong username or password")
    }

});
