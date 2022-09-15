function notak() {
  let n1 = parseInt(prompt("Idatzi nota"));
  let n2 = parseInt(prompt("Idatzi nota"));
  let n3 = parseInt(prompt("Idatzi nota"));
  let bb = (n1 + n2 + n3) / 3;
  if (bb >= 0 && bb < 5) {
    return "Ez gaindituta!";
  } else if (bb <= 10 && bb >= 5) {
    return "Gaindituta!";
  } else {
    return "Ezin dezakezu nota hori eduki!";
  }
}
