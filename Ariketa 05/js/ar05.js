function hurrengoa(src) {
  switch (src) {
    case "img/6.jpg":
      document.getElementById("irudia").src = "img/9.jpg";
      document.getElementById("testua").innerText = "Kamiseta 9";
      break;
    case "img/9.jpg":
      document.getElementById("irudia").src = "img/11.jpg";
      document.getElementById("testua").innerText = "Kamiseta 11";
      break;
    case "img/11.jpg":
      alert("Hau azkenengo kamiseta da");
      break;
    default:
      alert(src);
      document.getElementById("irudia").src = "img/6.jpg";
      document.getElementById("testua").innerText = "Kamiseta 6";
  }
}

function aurrekoa(src) {
  switch (src) {
    case "img/6.jpg":
      alert("Hau lehenengo kamiseta da");
      break;
    case "img/9.jpg":
      document.getElementById("irudia").src = "img/6.jpg";
      document.getElementById("testua").innerText = "Kamiseta 6";
      break;
    case "img/11.jpg":
      document.getElementById("irudia").src = "img/9.jpg";
      document.getElementById("testua").innerText = "Kamiseta 9";
      break;
    default:
      alert(src);
      document.getElementById("irudia").src = "img/6.jpg";
      document.getElementById("testua").innerText = "Kamiseta 6";
  }
}
