function fact(){
    let num = 0
    while(isNaN(num)){
        num = prompt("Zein zenbakiren faktoriala jakin nahi duzu?")
        if (isNaN(num)){
            alert("Mesedez idatzi zenbaki bat")
        }
    }
    
    let emaitza = 1
    for(let i=1;i<=num;i++){
        emaitza*=i
    }
    alert(num + "-en faktoriala " + emaitza + " da")
}