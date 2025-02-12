const questions = [
    {
        question: "Cosa significa IP?",
        options: ["Internet Protocol", "Internet Privacy", "Internal Process", "Integrated Platform"],
        answer: "Internet Protocol"
    },
    {
        question: "Qual è la differenza principale tra IPv4 e IPv6?",
        options: ["Dimensione dell'indirizzo", "Velocità di connessione", "Compatibilità con i router", "Costo"],
        answer: "Dimensione dell'indirizzo"
    },
    {
        question: "Quale classe di indirizzo è riservata per multicast?",
        options: ["Classe A", "Classe B", "Classe D", "Classe E"],
        answer: "Classe D"
    },
    {
        question: "Quale protocollo viene usato per assegnare dinamicamente gli indirizzi IP?",
        options: ["DNS", "DHCP", "HTTP", "FTP"],
        answer: "DHCP"
    },
    {
        question: "Cosa rappresenta una subnet mask?",
        options: ["Un indirizzo IPv6", "Un indicatore della rete", "Un protocollo di sicurezza", "Un server DNS"],
        answer: "Un indicatore della rete"
    },
    {
        question: "Quanti bit ha un indirizzo IPv6?",
        options: ["32 bit", "64 bit", "128 bit", "256 bit"],
        answer: "128 bit"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        document.getElementById("question").innerText = questionData.question;

        const optionsContainer = document.getElementById("options");
        optionsContainer.innerHTML = "";

        questionData.options.forEach(option => {
            const button = document.createElement("button");
            button.classList.add("option-button");
            button.innerText = option;
            button.onclick = () => checkAnswer(option);
            optionsContainer.appendChild(button);
        });
    } else {
        document.getElementById("question").innerText = "Quiz completato!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("result").innerText = `Hai risposto correttamente a ${score} domande su ${questions.length}.`;
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        document.getElementById("result").innerText = "Risposta corretta!";
        document.getElementById("result").classList.add("correct");
        score++;
    } else {
        document.getElementById("result").innerText = `Risposta errata! La risposta giusta era: ${correctAnswer}`;
        document.getElementById("result").classList.add("incorrect");
    }

    document.getElementById("score").innerText = score;
    currentQuestionIndex++;
    setTimeout(() => {
        document.getElementById("result").innerText = "";
        loadQuestion();
    }, 1500);
}

window.onload = loadQuestion;
