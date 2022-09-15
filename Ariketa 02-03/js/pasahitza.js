function pasahitzak() {
  let asmatu = false;

  while (asmatu == false) {
    let pass1 = prompt("Idatzi pasahitza: ");
    let pass2 = prompt("Idatzi pasahitza berriro: ");
    if (pass1 == pass2) {
      return "Ongi etorri!";
      asmatu = true;
    } else {
      alert("Pasahitz okerra")
    }
  }
}
