function rb_aldatu(){
    if(document.getElementById('rb1').checked==true){
        document.getElementById('img').src = "img/pedro.jpg"
    }else if(document.getElementById('rb2').checked==true){
        document.getElementById('img').src = "img/vilma.jpg"
    }else{
        document.getElementById('img').src = "img/pedro.jpg"
        document.getElementById('rb1').checked = true
    }
}

function bidali(){
    document.getElementById('izena').value = document.getElementById('tb1').value
    document.getElementById('abizena').value = document.getElementById('tb2').value
    document.getElementById('helbidea').value = document.getElementById('tb3').value
    document.getElementById('hiria').value = document.getElementById('select').value

    let cb1 = document.getElementById('cb1').checked
    let cb2 = document.getElementById('cb2').checked
    if(cb1 && cb2){
        document.getElementById('nahiago').value = "Biak dituzu gustoko"
    }else if(cb1){
        document.getElementById('nahiago').value = "Liburuak dituzu gustoko"
    }else if(cb2){
        document.getElementById('nahiago').value = "Pelikulak dituzu gustoko"
    }else{
        document.getElementById('nahiago').value = "Ez duzu ezer gustoko"
    }
    
    document.getElementById('emaitzak').style.display = "block"
}