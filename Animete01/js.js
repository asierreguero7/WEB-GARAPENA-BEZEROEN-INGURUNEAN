$(document).ready(function () {
  $("#clickme").click(function () {
    $("#book").animate(
      { transform: 360 },
      {
        step: function (now, fx) {
          $(this).css({
            "-webkit-transform": "rotate(" + now + "deg)",
            "-moz-transform": "rotate(" + now + "deg)",
            transform: "rotate(" + now + "deg)"
          });
        }
      },
      5000,
      function () {
        //rotateImage(360);
      }
    );
    $("#book").animate( {
        height: "+=1000px",
        width: "+=2000px",
        transform: "rotate(180)"
    },
    5000,
    function () {
      //rotateImage(360);
    });
  });
});
