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
        question: "Como identificar uma mensagem falsa?",
        options: [
            "Acreditar em tudo que recebe.",
            "Confiar porque um amigo enviou.",
            "Achar que é verdade porque tem muitas mensagens compartilhadas.",
            "Verificar se a informação vem de uma fonte confiável."
        ],
        answer: [
            { option: "Acreditar em tudo que recebe.", isCorrect: false },
            { option: "Confiar porque um amigo enviou.", isCorrect: false },
            { option: "Achar que é verdade porque tem muitas mensagens compartilhadas.", isCorrect: false },
            { option: "Verificar se a informação vem de uma fonte confiável.", isCorrect: true }
        ]
    },
    3: {
        question: "por que não devemos clicar em links suspeitos?",
        options: [
            "Porque eles são mais rápidos",
            "Porque podem conter malware",
            "Porque não têm design atraente",
            "Porque são difíceis de encontrar"
        ],
        answer: [
            { option: "Porque eles são mais rápidos", isCorrect: false },
            { option: "Porque podem conter malware", isCorrect: true },
            { option: "Porque não têm design atraente", isCorrect: false },
            { option: "Porque são difíceis de encontrar", isCorrect: false }
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
  const texto = document.getElementById("ouvir").value;
  const botaoouvir = document.getElementById('btn-listen');
   const mensagem = new SpeechSynthesisUtterance();
       mensagem.lang = "pt-BR";
         window.speechSynthesis.speak();