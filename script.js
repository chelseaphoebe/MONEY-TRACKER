$(document).ready(function(){
    $("#mainPage").hide();

    $("#loginForm").submit(function(e){
        e.preventDefault();
        var username = $("#username").val().trim(); // Trim whitespace
        if(username !== ""){
            $("#loginPage").hide();
            $("#mainPage").show();
            $("#greeting").text("Hello, " + username + "!");
        }
    });
});


