var route = "img/"
var imgs = ["1.jpg","2.jpg","3.jpg","4.jpg"]
var imgsMoment = ["","","",""]
var counter = 0
/*
document.getElementById("btn").addEventListener("click", argazkiaErakutsi);

document.getElementById("img1").addEventListener("dblclick", argazkiaEzabatu("1"));
document.getElementById("img2").addEventListener("dblclick", argazkiaEzabatu("2"));
document.getElementById("img3").addEventListener("dblclick", argazkiaEzabatu("3"));
document.getElementById("img4").addEventListener("dblclick", argazkiaEzabatu("4"));
*/


function argazkiaErakutsi(){
    imgsMoment[counter] = route + imgs[counter];
    counter ++;
    update();
}

function argazkiaEzabatu(img){
    for(let i = img; i<=2; i++){
        imgsMoment[i]=imgsMomenti+1
    }
    imgsMoment[3]=""
    counter --;
    update();
}

function update(){
    document.getElementById("img1").src = route + imgsMoment[0];
    document.getElementById("img2").src = route + imgsMoment[1];
    document.getElementById("img3").src = route + imgsMoment[2];
    document.getElementById("img4").src = route + imgsMoment[3];
}