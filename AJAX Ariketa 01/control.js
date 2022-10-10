$(document).ready(function () {
  $("#ajaxButton").click(function () {
    /* estilo honetako url-a erabiliko zen
        /*var url = 'http://localhost:8888/login';*/
    var url = "edukia.json";
    $.ajax({
      type: "GET",
      url: url,
      success: function (data) {
        $("#izena").html(data.user_name);
        $("#pasahitza").html(data.password);
        $("#ongietorri").css("display", "block");
      },
    });
  });
});
