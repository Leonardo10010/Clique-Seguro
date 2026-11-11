const quiz = {
    1: {
        question: "Qual destas senhas é mais segura?",
        options: [
            "123456",
            "maria1950",
            "Gato-Azul-Chuva_27",
            "senha"
        ],
        answer: [
            { option: "Gato-Azul-Chuva_27", isCorrect: true },
            { option: "123456", isCorrect: false },
            { option: "maria1950", isCorrect: false },
            { option: "senha", isCorrect: false }
        ]
    },
    2: {
        question: "Qual cor é o céu?",
        options: [
            "Azul",
            "Amarelo",
            "Vermelho",
            "Rosa"
        ],
        answer: [
            { option: "Azul", isCorrect: true },
            { option: "Amarelo", isCorrect: false },
            { option: "Vermelho", isCorrect: false },
            { option: "Rosa", isCorrect: false }
        ]
    },
    3: {
        question: "Pergunta2?",
        options: [
            "1",
            "2",
            "a",
            "B"
        ],
        answer: [
            { option: "1", isCorrect: true },
            { option: "2", isCorrect: false },
            { option: "a", isCorrect: false },
            { option: "B", isCorrect: false }
        ]
    },
}
const userAnswers = [];
const botoesOpcoes = document.querySelectorAll('.option-text');
const perguntaElement = document.getElementById('question');
const botaoEnviar = document.getElementById('btn-quiz');
var perguntaAtual = 1;

botaoEnviar.addEventListener('click', proximaPergunta);

popularOpcoes(perguntaAtual);

function popularOpcoes(pergunta) {
    perguntaElement.textContent = quiz[pergunta].question;
    for (let i = 0; i < botoesOpcoes.length; i++) {
        botoesOpcoes[i].textContent = quiz[pergunta].options[i];
    }
}

function proximaPergunta() {
    userAnswers.push(document.querySelector('input[name="pergunta1"]:checked').value);

    perguntaAtual++;
    popularOpcoes(perguntaAtual);
}