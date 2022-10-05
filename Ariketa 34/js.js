var keys = {};

$(document).ready(function () {
  $(document).keydown(function (e) {
    $(".img").attr("src", "img/fire.png");
    switch (e.which) {
      case 37: //left arrow key
        rotate(270);
        $(".img").finish().animate({
          left: "-=5",
        });
        break;
      case 38: //up arrow key
        rotate(0);
        $(".img").finish().animate({
          top: "-=5",
        });
        break;
      case 39: //right arrow key
        rotate(90);
        $(".img").finish().animate({
          left: "+=5",
        });
        break;
      case 40: //bottom arrow key
        rotate(180);
        $(".img").finish().animate({
          top: "+=5",
        });
        break;
    }
  });
  $(document).keyup(function (e) {
    $(".img").attr("src", "img/rocket.png");
  });
});
function rotate(d) {
  $(".img").css({
    "-moz-transform": "rotate(" + d + "deg)",
    "-webkit-transform": "rotate(" + d + "deg)",
    "-o-transform": "rotate(" + d + "deg)",
    "-ms-transform": "rotate(" + d + "deg)",
    transform: "rotate(" + d + "deg)",
  });

  $(document).keydown(function (e) {
    keys[e.which] = true;
  });

  $(document).keyup(function (e) {
    delete keys[e.which];
  });
}
