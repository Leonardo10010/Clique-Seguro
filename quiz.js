document.addEventListener('DOMContentLoaded', () => {

    const contrastBtn = document.getElementById('contrast-btn');
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    if (contrastBtn) {
        contrastBtn.addEventListener('click', (e) => {
            e.preventDefault();
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }

    const fontIncreaseBtn = document.getElementById('font-increase');
    const fontDecreaseBtn = document.getElementById('font-decrease');
    let currentFontSize = parseFloat(localStorage.getItem('fontSize')) || 100;
    
    function applyFontSize(size) {
        document.documentElement.style.fontSize = size + '%';
        localStorage.setItem('fontSize', size);
    }
    
    applyFontSize(currentFontSize);

    if (fontIncreaseBtn) {
        fontIncreaseBtn.addEventListener('click', () => {
            if (currentFontSize < 130) {
                currentFontSize += 10;
                applyFontSize(currentFontSize);
            }
        });
    }

    if (fontDecreaseBtn) {
        fontDecreaseBtn.addEventListener('click', () => {
            if (currentFontSize > 90) {
                currentFontSize -= 10;
                applyFontSize(currentFontSize);
            }
        });
    }

    const quiz = {
        1: {
            question: "Qual destas senhas é mais segura?",
            options: [
                "123456",
                "maria1950",
                "Gato-Azul-Chuva_27",
                "senha"
            ]
        },
        2: {
            question: "Como identificar uma mensagem falsa?",
            options: [
                "Acreditar em tudo que recebe.",
                "Confiar porque um amigo enviou.",
                "Achar que é verdade porque tem muitas mensagens compartilhadas.",
                "Verificar se a informação vem de uma fonte confiável."
            ]
        },
        3: {
            question: "Por que não devemos clicar em links suspeitos?",
            options: [
                "Porque eles são mais rápidos",
                "Porque podem conter malware",
                "Porque não têm design atraente",
                "Porque são difíceis de encontrar"
            ]
        }
    };

    const userAnswers = [];
    const botoesOpcoes = document.querySelectorAll('.option-text');
    const perguntaElement = document.getElementById('question');
    const botaoEnviar = document.getElementById('btn-quiz');
    let perguntaAtual = 1;

    function popularOpcoes(pergunta) {
        if (!quiz[pergunta]) {
            alert("Parabéns! Você concluiu o quiz com sucesso.");
            window.location.href = "page1.html"; 
            return;
        }
        
        perguntaElement.textContent = quiz[pergunta].question;
        for (let i = 0; i < botoesOpcoes.length; i++) {
            if (quiz[pergunta].options[i]) {
                botoesOpcoes[i].textContent = quiz[pergunta].options[i];
            }
        }
    }

    function proximaPergunta() {
        const inputMarcado = document.querySelector('input[type="radio"]:checked');
        
        if (!inputMarcado) {
            alert("Por favor, selecione uma alternativa.");
            return;
        }

        userAnswers.push(inputMarcado.value);
        inputMarcado.checked = false;

        perguntaAtual++;
        popularOpcoes(perguntaAtual);
    }

    if (botaoEnviar) {
        botaoEnviar.addEventListener('click', proximaPergunta);
    }

    if (perguntaElement) {
        popularOpcoes(perguntaAtual);
    }

    const botaoouvir = document.getElementById('btn-listen');
    
    if (botaoouvir) {
        botaoouvir.addEventListener('click', (e) => {
            e.preventDefault();
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                
                const textoParaFalar = perguntaElement.textContent;
                const mensagem = new SpeechSynthesisUtterance(textoParaFalar);
                mensagem.lang = "pt-BR";
                mensagem.rate = 0.9; 
                
                window.speechSynthesis.speak(mensagem);
            } else {
                alert("Seu navegador não suporta a leitura em áudio.");
            }
        });
    }
});