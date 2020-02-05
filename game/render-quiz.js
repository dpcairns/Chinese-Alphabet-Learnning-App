import { shengMu, yunMu, zhengTi } from '../data/alphabetData.js';
import { getUser } from '../utils/getuser.js';
import { saveUser } from '../utils/saveuser.js';
import { generateRandomChoices } from './generateRandomChoices.js';

const user = getUser();


//set when generateQuestion is called
let currentQuestion;
//set to the whichever button the user clicks
let selectedSection;
const sectionId = localStorage.getItem('section');


if (sectionId === 'shengMu') {
    selectedSection = shengMu;
} else if (sectionId === 'yunMu') {
    selectedSection = yunMu;
} else if (sectionId === 'zhengTi') {
    selectedSection = zhengTi;
}

const quizQuestions = selectedSection.data.slice();
// let currentQuestion = generateQuestion(quizQuestions,selectedSection.data);
// console.log(currentQuestion);

//assigning at generateQuestion function
let sound = null;

const soundButton = document.getElementById('sound-button');
const choiceText = document.getElementById('choices');
const choiceForm = document.getElementById('choice-form');
const audio = document.getElementById('randomSoundFromData');
const nextButton = document.getElementById('next-button');
const displayResult = document.getElementById('display-test');
const answerButton = document.getElementById('answer-button');

generateQuestion(quizQuestions, selectedSection.data);

soundButton.addEventListener('click', () => {
    /*change the name on html to something like randomSoundFromData instead of randomShengmu or make into a function that takes the users quiz choice and generates a sound from that assets file that corresponds.*/
    audio.src = sound;
    audio.type = 'audio/mp3';
    audio.load();
    audio.play();
});

//populateQuestion(currentQuestion);



choiceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkAnswer();
    answerButton.disabled = true;


});

nextButton.addEventListener('click', () => {
    nextQuestion();
    displayResult.textContent = '';
    answerButton.disabled = false;

});

//populateQuestion is called in generateQuestion.
function populateQuestion(item) {
    const answer = item;
    let choices = answer.choices;

    choices.forEach(item => {
        const label = document.createElement('label');
        const answerOption = document.createElement('input');
        label.textContent = item;
        answerOption.value = item;
        answerOption.type = 'radio';
        answerOption.name = 'answers';
        choiceText.appendChild(label);
        choiceText.appendChild(answerOption);
    });
}

function checkAnswer() {
    const formData = new FormData(choiceForm);
    const userChoice = formData.get('answers');
    if (userChoice === currentQuestion.id) {
        displayResult.textContent = 'Good Job!';
    // change to make any of the three available arrays
        user[selectedSection.id].correct++;
    } else {
        displayResult.textContent = 'Oops! Wrong answer. The correct answer is ' + currentQuestion.id;
        user[selectedSection.id].incorrect++;
    }
    saveUser(user);   
    if (quizQuestions.length === 1) {
        user[selectedSection.id].completed = true;
        saveUser(user);
        window.location = '../results';
    } 
}

function nextQuestion() {
    console.log(currentQuestion)
    const questionIndex = quizQuestions.indexOf(currentQuestion);
    quizQuestions.splice(questionIndex, 1);

    while (choiceText.firstChild) {
        choiceText.removeChild(choiceText.firstChild);
    }
    generateQuestion(quizQuestions, selectedSection.data);
    // currentQuestion = generateQuestion(quizQuestions, selectedSection.data);
    // sound = currentQuestion.audio;
    // populateQuestion(currentQuestion);
}

// generating a random number by the length of the array
function generateQuestion(arr, fullArray) {
    
    let index = Math.floor(Math.random() * arr.length);
    // assigning a random item from the array as correct answer. getting a random object from passed in array.
    const selectedAnswer = arr[index];
    // removing the correct answer from available answers

    // changed property to choices which now holds all choice including correct answer
    selectedAnswer.choices = generateRandomChoices(fullArray, 3, selectedAnswer.id);
    console.log(selectedAnswer.id, 'selectedAnswer.id');
    console.log(fullArray, 'fullArray');
    
    sound = selectedAnswer.audio;
    populateQuestion(selectedAnswer);
    currentQuestion = selectedAnswer;
}



