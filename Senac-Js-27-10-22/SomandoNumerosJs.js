
function somar() {
    let tn1 = window.document.getElementById("numeSoma1");
    let tn2 = window.document.querySelector("input#numeSoma2");
    let res = window.document.getElementById("resSoma");
    let n1 = Number.parseInt(tn1.value);
    let n2 = Number(tn2.value);
    let s = n1 + n2;
    res.innerHTML = `A soma entre ${n1} e ${n2} foi <strong>${s}.</strong>`;
}

function subtrair() {
    let tn1 = window.document.getElementById("numeSubtrai1");
    let tn2 = window.document.querySelector("input#numeSubtrai2");
    let res = window.document.getElementById("resSubtrai");
    let n1 = Number.parseInt(tn1.value);
    let n2 = Number(tn2.value);
    let s = n1 - n2;
    res.innerHTML = `A subtracao entre ${n1} e ${n2} foi <strong>${s}.</strong>`;
}

function multplicar() {
    let tn1 = window.document.getElementById("numeMult1");
    let tn2 = window.document.querySelector("input#numeMult2");
    let res = window.document.getElementById("resMult");
    let n1 = Number.parseInt(tn1.value);
    let n2 = Number(tn2.value);
    let s = n1 * n2;
    res.innerHTML = `A multplicacao entre ${n1} e ${n2} foi <strong>${s}.</strong>`;
}

function dividir() {
    let tn1 = window.document.getElementById("numeDivi1");
    let tn2 = window.document.querySelector("input#numeDivi2");
    let res = window.document.getElementById("resDivi");
    let n1 = Number.parseInt(tn1.value);
    let n2 = Number(tn2.value);
    let s = n1 / n2;
    res.innerHTML = `A divisao entre ${n1} e ${n2} foi <strong>${s}.</strong>`;
}