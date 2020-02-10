import { shengMu, yunMu, zhengTi } from '../data/alphabetData.js';
import { getUser, saveUser } from '../utils/userUtils.js';
import { generateRandomChoices } from './generateRandomChoices.js';


const user = getUser();
// console.log(user);

//set when generateQuestion is called
let currentQuestion;
//set to the whichever button the user clicks
export let selectedSection;
const sectionId = localStorage.getItem('section');

// console.log(sectionId);

if (sectionId === 'shengMu') {
    selectedSection = shengMu;
} else if (sectionId === 'yunMu') {
    selectedSection = yunMu;
} else if (sectionId === 'zhengTi') {
    selectedSection = zhengTi;
}

const quizQuestions = selectedSection.data.slice();
document.getElementById('next-button').style.visibility = 'hidden';

//assigning at generateQuestion function
let sound;

const soundButton = document.getElementById('sound-button');
const choiceText = document.getElementById('choices');
const choiceForm = document.getElementById('choice-form');
const audio = document.getElementById('randomSoundFromData');
const nextButton = document.getElementById('next-button');
const displayResult = document.getElementById('display-test');
const answerButton = document.getElementById('answer-button');
const testName = document.getElementById('testname');

generateQuestion(quizQuestions, selectedSection.data);

soundButton.addEventListener('click', () => {
    audio.src = sound;
    audio.type = 'audio/mp3';
    audio.load();
    audio.play();
});

testName.textContent = selectedSection.title;


const rightOrWrongAlert = document.getElementById('right-wrong-box');

choiceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkAnswer();
    answerButton.disabled = true;


    const formData = new FormData(choiceForm);
    const userChoice = formData.get('answers');
    if (userChoice === currentQuestion.id) {
        rightOrWrongAlert.className = 'right-answer';
    } else {
        rightOrWrongAlert.className = 'wrong-answer';
    }

});

nextButton.addEventListener('click', () => {
    nextQuestion();
    displayResult.textContent = '';
    answerButton.disabled = false;

    rightOrWrongAlert.className = '';
});

//populateQuestion is called in generateQuestion.
function populateQuestion(item) {
    const answer = item;
    let choices = answer.choices;

    choices.forEach(item => {
        const label = document.createElement('label');
        const span = document.createElement('span');
        const answerOption = document.createElement('input');
        span.textContent = item;
        label.className = 'cool-label';
        answerOption.value = item;
        answerOption.type = 'radio';
        answerOption.name = 'answers';
        choiceText.appendChild(label);
        label.appendChild(answerOption);
        label.appendChild(span);
    });
}

function checkAnswer() {
    const formData = new FormData(choiceForm);
    const userChoice = formData.get('answers');
    const answerSound = document.getElementById('wrong-or-right');
    if (userChoice === currentQuestion.id) {
        displayResult.textContent = 'Good Job!';
        answerSound.src = '../assets/correct.mp3';
        answerSound.play();
        // change to make any of the three available arrays
        user[selectedSection.id].correct++;
    } else {
        displayResult.textContent = 'Oops! Wrong answer. The correct answer is ' + currentQuestion.id + '.';
        answerSound.src = '../assets/incorrect.mp3';
        answerSound.play();
        user[selectedSection.id].incorrect++;
    }
    saveUser(user);
    if (quizQuestions.length === 1) {
        user[selectedSection.id].completed = true;
        saveUser(user);
        window.location = '../results';
    }
    document.getElementById('next-button').style.visibility = 'visible';
}

function nextQuestion() {

    const questionIndex = quizQuestions.indexOf(currentQuestion);

    answerButton.visibility = 'visible';

    quizQuestions.splice(questionIndex, 1);
    document.getElementById('next-button').style.visibility = 'hidden';

    while (choiceText.firstChild) {
        choiceText.removeChild(choiceText.firstChild);
    }
    generateQuestion(quizQuestions, selectedSection.data);

}

// generating a random number by the length of the array
function generateQuestion(arr, fullArray) {

    let index = Math.floor(Math.random() * arr.length);
    // assigning a random item from the array as correct answer. getting a random object from passed in array.
    const selectedAnswer = arr[index];
    // removing the correct answer from available answers

    // changed property to choices which now holds all choice including correct answer
    selectedAnswer.choices = generateRandomChoices(fullArray, 3, selectedAnswer.id);

    sound = selectedAnswer.audio;
    populateQuestion(selectedAnswer);
    currentQuestion = selectedAnswer;
}