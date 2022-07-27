const quizQuestions=[
    {
        question:"HTML Full Form !",
        a:"Hayper text mark up language",
        b:"Happps",
        c:"None of the above",
        d:"ALL",
        rigthAns:"ans1"
    },
    {
        question:"Which are higth level programming languages",
        a:"java",
        b:"python",
        c:"All of the above",
        d:"none of the above",
        rigthAns:"ans3"
    },
    {
        question:"Which web Developer is neccessary",
        a:"Nobe",
        b:"Begginer",
        c:"Intermeiader",
        d:"Experienced",
        rigthAns:"ans4"
    }
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#question1");
const option2 = document.querySelector("#question2");
const option3 = document.querySelector("#question3");
const option4 = document.querySelector("#question5");
const answers = document.querySelectorAll(".answer");

const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");
let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    let list = quizQuestions[questionCount];
    question.innerText = list.question;
    option1.innerText = list.a;
    option2.innerText = list.b;
    option3.innerText = list.c;
    option4.innerText = list.d;
}

loadQuestion();

const getCheckedAnswer =()=>{
    let ans;
    answers.forEach((i)=>{
        if(i.checked){
            ans = i.id;
        }
    });
    return ans;
};

const uncheckAnswer = ()=>{
    answers.forEach((i) =>{
        i.checked = false;
    })
}

submit.addEventListener("click" ,()=>{
    const x = getCheckedAnswer();
    if(x === quizQuestions[questionCount].rigthAns){
        score++;
    }
    questionCount++;
    uncheckAnswer();
    if(questionCount<quizQuestions.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML *
       .
        <h3 class = "h3">Your Score is ${score}/${quizQuestions.length} :)</h3>
        <button class="btn" onClick="location.reload()">Play Again</button>
        showScore.classList.remove("score");
        .
    }
});