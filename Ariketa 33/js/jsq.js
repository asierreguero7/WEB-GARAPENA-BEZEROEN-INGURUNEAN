$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
        $("#saskia").append("<li>" + $("#produktua").val() + "</li>");
        $("#produktua").val("");
    });
});