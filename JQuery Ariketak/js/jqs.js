$(document).ready(function () {
    $("img").show();
    fadeloop('#img1',300,300,true);
});

function fadeloop(el,timeout,timein,loop){
    var $el = $(el),intId,fn = function(){
         $el.fadeOut(timeout).fadeIn(timein);
         const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
        $("body").css("background-color", randomColor);
    };
    fn();
    if(loop){
        intId = setInterval(fn,timeout+timein+100);
        return intId;
    }
    return false;
}
