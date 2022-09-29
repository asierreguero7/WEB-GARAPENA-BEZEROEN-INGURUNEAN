var route = "img/";
var imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
var imgsMoment = ["", "", "", ""];
var counter = 0;

window.onload = function () {
  document.getElementById("btn").addEventListener("click", argazkiaErakutsi);

  document.getElementById("img1").addEventListener("dblclick", function () {
    argazkiaEzabatu(0);
  });
  document.getElementById("img2").addEventListener("dblclick", function () {
    argazkiaEzabatu(1);
  });
  document.getElementById("img3").addEventListener("dblclick", function () {
    argazkiaEzabatu(2);
  });
  document.getElementById("img4").addEventListener("dblclick", function () {
    argazkiaEzabatu(3);
  });
};

function argazkiaErakutsi() {
  if (imgsMoment[3] == "") {
    for (let i = 0; i < imgs.length; i++) {
      if (!imgsMoment.includes(route + imgs[i])) {
        imgsMoment[counter] = route + imgs[i];
        break;
      }
    }
    counter++;
    update();
  }else{
    alert("Dagoeneko 4 argazkiak daude erakutsita");
  }
}

function argazkiaEzabatu(img) {
  for (let i = img; i <= 2; i++) {
    imgsMoment[i] = imgsMoment[i + 1];
  }
  imgsMoment[3] = "";
  counter--;
  update();
}

function update() {
  document.getElementById("img1").src = imgsMoment[0];
  document.getElementById("img2").src = imgsMoment[1];
  document.getElementById("img3").src = imgsMoment[2];
  document.getElementById("img4").src = imgsMoment[3];
  if (document.getElementById("img1").src == route) {
    document.getElementById("img1").src = "";
  }
  if (document.getElementById("img2").src == route) {
    document.getElementById("img2").src = "";
  }
  if (document.getElementById("img2").src == route) {
    document.getElementById("img2").src = "";
  }
  if (document.getElementById("img2").src == route) {
    document.getElementById("img2").src = "";
  }
}
