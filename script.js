let fusoSelecionado = "";

function atualizarRelogio() {
    let agora = new Date();
    
    let horas = String(agora.getHours()).padStart(2, '0');
    let minutos = String(agora.getMinutes()).padStart(2, '0');
    let segundos = String(agora.getSeconds()).padStart(2, '0');

    let horarioLocal = horas + ":" + minutos + ":" + segundos;

    document.getElementById("relogio-local").textContent = horarioLocal;

        if (fusoSelecionado !== "") {
            let horarioEstrangeiro = agora.toLocaleTimeString("pt-BR", { timeZone: fusoSelecionado });
            document.getElementById("relogio-estrangeiro").textContent = horarioEstrangeiro;
        }
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);

 document.getElementById("btn-eua").addEventListener("click", function() {
    document.getElementById("nome-pais").textContent = "Nova Iorque, EUA";
    document.getElementById("diferenca-horas").textContent = "Você está 1 hora à frente";
    
    fusoSelecionado = "America/New_York";
    atualizarRelogio();
});

 document.getElementById("btn-coreia").addEventListener("click", function() {
    document.getElementById("nome-pais").textContent = "Seul, Coreia do Sul";
    document.getElementById("diferenca-horas").textContent = "Você está 12 horas atrás";
       
    fusoSelecionado = "Asia/Seoul";
    atualizarRelogio();
});

let botaoDesign = document.getElementById("btn-fonte");
let botaoFundo = document.getElementById("btn-fundo");
let relogioLocal = document.getElementById("relogio-local");
let relogioEstrangeiro = document.getElementById("relogio-estrangeiro");

botaoDesign.addEventListener("click", function() {
    relogioLocal.classList.toggle("fonte-alternativa");
    relogioEstrangeiro.classList.toggle("fonte-alternativa");
});

let imagensFundo = [
    "url('fundos/Your Name 4k .jpg')",
    "url('fundos/newjeans.jpg')",
    "url('fundos/Your Name Falling GIF.gif')",
];

let fundoAtual = 0;

botaoFundo.addEventListener("click", function() {
    fundoAtual ++;

    if (fundoAtual >= imagensFundo.length) {
        fundoAtual = 0;
    }

    document.body.style.backgroundImage = imagensFundo[fundoAtual];
});