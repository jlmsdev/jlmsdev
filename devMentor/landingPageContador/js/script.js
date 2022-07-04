let getDias = document.getElementById('dias');
let getHoras = document.getElementById('horas');
let getMinutos = document.getElementById('minutos');
let getSegundos = document.getElementById('segundos');



function contadorData() {
    let data = new Date();

    
    let diasConvertidos = getDias.innerHTML = data.getDate();
    let horasConvertidas = getHoras.innerHTML = data.getHours()
    let minutosConvertidos = getMinutos.innerHTML = data.getMinutes()
    let segundosConvertidos = getSegundos.innerHTML = data.getSeconds()

    if (segundosConvertidos >= 0 && segundosConvertidos <= 9) {
        getSegundos.innerHTML = '0' + data.getSeconds();
    }
    
}

setInterval(contadorData, 1000);
contadorData();
