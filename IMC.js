
function IMC () {
    var peso = parseFloat (document.getElementById('peso').value);
    var altura = parseFloat (document.getElementById('altura').value);
    var imc = peso / (altura * altura);
    var visor = document.querySelector('#visor');
    visor.innerText = imc.toFixed(2);
    if (imc <= 18.5) {
        visor.innerText += (' abaixo do peso'); 
    }else if (imc > 18.5 & imc <= 24.9) {
        visor.innerText += (' peso normal');
    }else if (imc > 24.9 & imc <= 29.9) {
        visor.innerText += (' sobrepeso');
    }else {
        visor.innerText += (' obesidade');
    } 
}