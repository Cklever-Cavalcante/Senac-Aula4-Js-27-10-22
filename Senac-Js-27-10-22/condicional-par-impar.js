
function parImpar() {
    let numeroDigitado = window.document.getElementById("numeroEntrada");
    let tfNumero = Number(numeroDigitado.value);
    let resultado = window.document.getElementById("resposta");
    let par;
    let impar;

    if (tfNumero % 2 == 0) {
        par = `<br>Voce digitou o numero <b>${tfNumero}</b> e ele è <b>par</b>!`;
        resultado.innerHTML = par;
    }
    else {
        impar = `<br>Voce digitou o numero <b>${tfNumero}</b> e ele è <b>ìmpar</b>!`;
        resultado.innerHTML = impar;
    }
}