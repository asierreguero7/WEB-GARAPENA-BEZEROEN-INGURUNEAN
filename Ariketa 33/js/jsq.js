$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
        $("#saskia").append("<li>" + $("#produktua").val() + "</li>");
        $("#produktua").val("");
    });
    $(".erosi").click(function(e){
        e.preventDefault();
        alert("Erosketa egin da")
        $("#saskia").css("color", "white")
        $("#saskia").css("background-color", "green")
    });
});