const questions = [
    {
    question: "Which is the biggest animal?",
    answers: [
        {text:"Cat", correct: false},
        {text:"Monkey", correct: false},
        {text:"Giraffe", correct: false},
        {text:"Whale", correct: true}

            ]
    },
    {
        question: "Which is the biggest vehicle?",
        answers: [
            {text:"Bike", correct: false},
            {text:"Car", correct: false},
            {text:"Truck", correct: true},
            {text:"Jeep", correct: false}
    
                ]
    },
    {
        question: "Which is the biggest continent?",
        answers: [
            {text:"Asia", correct: true},
            {text:"Australia", correct: false},
            {text:"Europe", correct: false},
            {text:"Antartica", correct: false}
    
                ]
    },
    {
        question: "Which is the smallest country?",
        answers: [
            {text:"America", correct: false},
            {text:"India", correct: false},
            {text:"Bhutan", correct: true},
            {text:"New Zealand", correct: false}
    
                ]
    }
        

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
