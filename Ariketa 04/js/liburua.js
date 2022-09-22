function liburuakSortu(lista) {
  const liburua = {
    izena: "Harry Potter",
    egilea: "JK Rowling",
    irakurrita: false,
  };
  const liburua2 = {
    izena: "The Hunger Games",
    egilea: "Suzanne Collins",
    irakurrita: true,
  };
  const liburua3 = {
    izena: "A Song of Ice And Fire",
    egilea: "George R.R. Martin",
    irakurrita: true,
  };
  lista.push(liburua);
  lista.push(liburua2);
  lista.push(liburua3);
  return lista;
}

function irakurrita(liburua) {
  if (liburua.irakurrita) {
    alert("Liburu hau irakurrita daukazu: " + liburua.izena + " - " + liburua.egilea);
  } else {
    alert("Liburu hau irakurri behar duzu: " + liburua.izena + " - " + liburua.egilea);
  }
}

function run() {
  let lista = new Array();
  liburuakSortu(lista);
  lista.forEach(irakurrita);
  lista = liburuBerria(lista);
  for(let i=0;i<lista.length;i++){
    irakurrita(lista[i])
  }
}

function liburuBerria(lista){
    let izena = prompt("Idatzi liburuaren izena:")
    let egilea = prompt("Idatzi liburuaren egilea:")
    let irakurrita = 0
    while(irakurrita!=true || irakurrita!=false){
        let er = prompt("Liburu hau irakurri al duzu? (BAI/EZ)")
        if(er=="BAI" || er== "bai"){
            irakurrita = true
            return
        }
        if(er=="EZ" || er== "ez"){
            irakurrita = false
            return
        }
    }
    const liburua = {izena : izena, egilea : egilea, irakurrita : irakurrita}
    lista.push(liburua)
    return lista
}