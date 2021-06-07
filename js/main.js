// All imports
import { Footer } from './components/Footer.js';
import { Diary } from './components/Diary.js';
import { EditForm } from './components/EditForm.js';
import { Bmi } from './components/Bmi.js';;
import { AddFormValidations } from './validations/AddFormValidation.js';
import { Question } from './components/Question.js';



const addNewButton = document.querySelector('.add-new');
const lightbox = document.querySelector('.lightbox');

const newName = document.getElementById('new-name');
const newCarb = document.getElementById('new-carb');
const newProtein = document.getElementById('new-protein');
const newFat = document.getElementById('new-fat');
const newkcal = document.getElementById('new-kcal');
const buttonCancelAdd = document.getElementById('button-cancel-add');
const buttonAdd = document.getElementById('button-add');








// Init objects
const diary = new Diary({
    selector: 'main'
});
diary.init();
//   Init edit form
const editForm = new EditForm({
    selector: 'form.update',
    diaryObject: diary
});
editForm.init();

diary.editForm = editForm;

// Init footer
const footer = new Footer;
footer.yearChanger();
footer.visitorsCounter();
// Init bmi
const bmi = new Bmi;
bmi.bmiCounter();

// Init validations

const addFormValidations = new AddFormValidations;





// add events
addNewButton.addEventListener('click', () => {
    lightbox.classList.add('show'); //pridejom show css stiliu ir pasirode add forma
    lightbox.dataset.form = 'add'; // sita eilute dar labiau nurodo kuri forma nuretu buti parodyta.

})

buttonCancelAdd.addEventListener('click', e => {
    e.preventDefault();
    lightbox.classList.remove('show');
    addFormValidations.clearValidations();
})

buttonAdd.addEventListener('click', e => {



    if (addFormValidations.addFormValidation() == true) {
        e.preventDefault()
    } else {

        diary.addMeal(newName.value, newCarb.value, newProtein.value, newFat.value, newkcal.value, );
        diary.clearAddForm();
        lightbox.classList.remove('show');

        addFormValidations.clearValidations();
    }

})

addEventListener('keyup', ({ key }) => { //spaudzian escape visada uzdarys forma

    if (key === 'Escape') {
        lightbox.classList.remove('show');
        addFormValidations.clearValidations();

    }

});

//hamburger events 

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
// });
//Hamburger
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        navbarLinks.classList.toggle('active')
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        navbarLinks.classList.toggle('active')
    }
});

// ********************* QUIZ ***********************************

// Init QUESTION
const question = new Question;
const quiz = question.quiz;

// ********************* QUIZ APP ***********************************

// console.log(quiz);

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

// push the questions into availableQuestions Array
function setAvailableQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        // console.log(i);
        availableQuestions.push(quiz[i])
    }
}

// set question number and question and options
function getNewQuestion() {
    // set question number
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

    // set question text
    // get random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    // get position of 'questionIndex' from the availableQuestion Array;
    const index1 = availableQuestions.indexOf(questionIndex);
    // remove the 'questionIndex' from the availableQuestion Array, so that the question does not repeat
    availableQuestions.splice(index1, 1);

    // set options
    // get lenght of options
    const optionLen = currentQuestion.options.length
        // push options into availableOptions Array
    for (let i = 0; i < optionLen; i++) {
        availableOptions.push(i)
    }

    optionContainer.innerHTML = ''; //sitas istaise, kad paspaudus next neliktu seno klausimo options pasirinkimai

    let animationDelay = 0.15;
    // create options in html
    for (let i = 0; i < optionLen; i++) {
        // random option
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        // get the position of 'optionIndex' from availableOptions
        const index2 = availableOptions.indexOf(optionIndex);
        // remove the 'optionIndex' from availableOptions, that the options do not repeat.
        availableOptions.splice(index2, 1);
        // console.log(optionIndex);
        // console.log(availableOptions);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option)

        window.getResult = getResult //https://stackoverflow.com/questions/17378199/uncaught-referenceerror-function-is-not-defined-with-onclick

        option.setAttribute("onclick", "getResult(this)");
    }
    questionCounter++

}


// get result of current attempt question
function getResult(element) {
    // console.log(element.innerHTML);
    const id = parseInt(element.id);
    // console.log(typeof id);

    //get the answer by comparing the id of clicked option
    if (id === currentQuestion.answer) {
        // console.log("answer is correct");
        //set green color for correct option
        element.classList.add("correct");
        // add indicator to correct
        updateAnswerIndicator("correct");
        correctAnswers++
        // console.log("correct:" + correctAnswers);
    } else {
        // console.log("answer is wrong");
        //set green color for correct option
        element.classList.add("wrong");
        // add indicator to wrong
        updateAnswerIndicator("wrong");

        //if answer is incorect to show correct option by adding green color
        const optionLen = optionContainer.children.length;

        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++

    unclickableOptions();
}



function unclickableOptions() { //si funkcija neleis pakeisti pasirinkimo, kai jis jau pasirinktas
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}

function answersIndicator() {
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
}

function updateAnswerIndicator(markType) {
    // console.log(markType);
    answersIndicatorContainer.children[questionCounter - 1].classList.add(markType);
}




document.querySelector('.next').onclick = function() {
    if (questionCounter === quiz.length) {
        console.log("quiz over");
        quizOver();
    } else {
        getNewQuestion();
    }
    // function next() {
    //     if (questionCounter === quiz.length) {
    //         console.log("quiz over");
    //     } else {
    //         getNewQuestion();
    //     }
    // }
}

function quizOver() {
    // hide quizBox
    quizBox.classList.add("hide");
    // show result box
    resultBox.classList.remove("hide");
    quizResult();
}

// get quiz result
function quizResult() {
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers / quiz.length) * 100;
    resultBox.querySelector(".precentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + quiz.length;
}

function tryAgainQuiz() {

}


window.onload = function() {
    // first we will set all questions in availableQuestions Array
    setAvailableQuestions();
    // second we will call getNewQuestion(); function
    getNewQuestion();
}

//create answer inndicators
answersIndicator();