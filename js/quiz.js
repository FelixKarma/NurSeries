const quizData = [
    {
        question: '1.Dans la série "The Wire", quel est le personnage préféré de Barack Obama ?',
        a: "Omar Little",
        b: "Jimmy Mc Nulty",
        c: "Avon Barksdale",
        d: "Marlo Stanfield",
        correct: "a",
    },
    {
        question: '2.Quel est l\'animal empaillé de JD dans la série "Scrubs" ?',
        a: "Un loup",
        b: "Un renard",
        c: "Un chat",
        d: "un chien",
        correct: "d",
    },
    {
        question: '3.De quelle série est issue la phrase "La Nuit se regroupe et voici que débute ma garde" ?',
        a: "The Witcher",
        b: "Games Of Thrones",
        c: "Vikings",
        d: "Marco Polo",
        correct: "b",
    },
    {
        question: '4.Comment s\'appelle le chef de la police dans la série "Les Simpson" ?',
        a: "Otto Bus",
        b: "Clancy Wiggums",
        c: "Ned Flanders",
        d: "Phillipe Mc Dougall",
        correct: "b",
    },
    {
        question: '5.De combien d\'épisodes est composée la dernière saison de "Breaking Bad"',
        a: "16",
        b: "15",
        c: "14",
        d: "13",
        correct: "a",
    },
    {
        question: '6.Quelle série,lancée en 2013 est connue pour être la première série Netflix ?',
        a: "Narcos",
        b: "The Crown",
        c: "House Of Cards",
        d: "Mad Men",
        correct: "c",
    },
    {
        question: '7.Quel célèbre artiste est représenté sur les masques de la série "Casa de Papel" ?',
        a: "Salvador Dali",
        b: "Pablo Picasso",
        c: "Paco Rabanne",
        d: "Francisco De Goya",
        correct: "a",
    },
    {
        question: '8.Dans quelle série Netflix découvrons nous les possibles dérives des écrans que nous utilisons tout les jours"?',
        a: "The OA",
        b: "Mind Hunter",
        c: "God Bless",
        d: "Black Mirror",
        correct: "d",
    },
    {
        question: '9.Laquelle de ces séries n\'est pas une série originale Netflix ?',
        a: "Les Nouvelles Aventures de Sabrina",
        b: "The Boys",
        c: "Messiah",
        d: "Plan Coeur",
        correct: "b",
    },
 
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions !
            <button class="mar-top" onclick="location.reload()">Reload</button>
            <a class="mar-top" href="../view/reponses.html"><button>Voir les bonnes réponses</button></a>
            <a class="mar-top" href="../view/accueil.html"><button >Retour à la page d'accueil</button></a>
            `
        }
    }
})



