const botaoDiminuir = document.getElementById("font-decrease");
const botaoAumentar = document.getElementById("font-increase");

let tamanho = 100;

const tamanhoSalvo = localStorage.getItem("tamanhoFonte");
if (tamanhoSalvo) {
    tamanho = Number(tamanhoSalvo);
}

function aplicarTamanho() {
    document.body.style.zoom = tamanho + "%";
    localStorage.setItem("tamanhoFonte", tamanho);
}

aplicarTamanho();

botaoDiminuir.addEventListener("click", function (event) {
    event.preventDefault();
    if (tamanho > 70) {
        tamanho = tamanho - 10;
        aplicarTamanho();
    }
});

botaoAumentar.addEventListener("click", function (event) {
    event.preventDefault();
    if (tamanho < 150) {
        tamanho = tamanho + 10;
        aplicarTamanho();
    }
});

const body = document.body;
const botaoContraste = document.querySelector('.header-contrast');
const logo = document.getElementById('logo-header');

function trocarTema() {
    if (body.className == 'dark') {
        body.classList.remove('dark');
        body.classList.add('light');
        logo.src = './src/images/logo_header.png';
    } else {
        body.classList.add('dark');
        body.classList.remove('light');
        logo.src = './src/images/logo_cliqueseguro.png';
    }
}

botaoContraste.addEventListener('click', trocarTema);