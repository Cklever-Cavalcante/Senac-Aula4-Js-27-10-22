
function resultado() {
    let velo = window.document.getElementById("veloci");
    let result = window.document.querySelector("div#res");
    let multa = Number(velo.value);

    if (multa > 60) {
        result.innerHTML = `<br><strong>Voce esta acima do limite permitido!</strong><br> Sua velocidade atual è ${multa} Km/h.`;
        result.style.backgroundColor = "red";
        result.style.color = "white";
        result.style.width = "150px";
        result.style.padding = "3%";
    }
    else {
        result.innerHTML = `<br><strong>Voce esta dentro do limite permitido!</strong><br> Sua velocidade atual è ${multa} Km/h.`;
        result.style.backgroundColor = "greenyellow";
        result.style.color = "black";
        result.style.width = "150px";
        result.style.padding = "3%";
    }
}