let saida, i;

function contar(){
    saida = ""
    for (i=0;i<=10;i++){
        saida = saida + i + "<br>";
    }

    document.getElementById("resultado").innerHTML = saida;
}

let saida1, i1;

function contar2(){
    saida1 = "";
    for (i1=10;i1>=0;i1--){
        saida1 = saida1 + i1 + "<br>";
    }

    document.getElementById("resultado2").innerHTML = saida1;
}

let inicio, a, saida3;

function ContarAteCem() {
    inicio = Number(document.getElementById("Inicio").value);
    saida3  = "";
    for (a = inicio;a<=100;a++) {
        saida3 = saida3 + a + "<br>"
    }

    document.getElementById("ateCem").innerHTML = saida3
}

let tabuada1, n, result;

function Tabuada() {
    tabuada1 = Number(document.getElementById("iniciodaTab").value);
    result = "";
    for (n = 0;n<=10;n++) {
        result = result + tabuada1 + "x" + n + "=" + (tabuada1 *  n) + "<br>"
    }
    document.getElementById("tabuada").innerHTML = result;
}

let saida5, q;
function Gerar() {
    saida5 = ""
    for (q = 0; q<=5; q++){
        saida5 = saida5 + '<div class="caixa"></div>'
    }

    document.getElementById("quadrado").innerHTML = saida5;
}