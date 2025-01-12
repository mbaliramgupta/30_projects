const question=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephanr",correct:false},
            {text:"Giraffe",correct:false},

        ]
    },
    {
        question:"Which is the smallest country in the world?",
        answers:[
            {text:"Vetican city",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Shri Lanka",correct:false},

        ]
    },
    {
        question:"Which is the largest desert in the world?",
        answers:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antartica",correct:true},

        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},

        ]
    }
];
const questionelement=document.getElementById("question");
const answerbutton=document.getElementById("answer-btn");
const nextbutton=document.getElementById("next-btn");

let currentquestionindex=0;
let score=0;

function startquiz(){
    currentquestionindex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showquestion();
}

function showquestion(){
    let currentquestion=question[currentquestionindex];
    let questionNo=currentquestionindex+1;
    questionelement.innerHTML=questionNo+". "+currentquestion.question;

    currentquestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.classList.add("btn");
        answerbutton.appendChild(button);
    });

}
startquiz();