const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
}

const contadores = document.querySelectorAll(".contador");
const tempos = [
    new Date("2025-10-05T00:00:00"),
    new Date("2025-12-05T00:00:00"),
    new Date("2025-12-30T00:00:00"),
    new Date("2026-02-01T00:00:00")
];

function calculaTempo(tempoObjetivo) {
    const tempoAtual = new Date();
    const tempoFinal = tempoObjetivo - tempoAtual;

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return tempoFinal > 0 ? [dias, horas, minutos, segundos] : [0, 0, 0, 0];
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        const [d, h, m, s] = calculaTempo(tempos[i]);
        document.getElementById("dias" + i).textContent = d;
        document.getElementById("horas" + i).textContent = h;
        document.getElementById("min" + i).textContent = m;
        document.getElementById("seg" + i).textContent = s;
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
