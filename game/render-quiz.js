import { shengMu, yunMu, zhengTi } from '../data/alphabetData.js';
import { getUser } from '../utils/getuser.js';
import { saveUser } from '../utils/saveuser.js';
import { filterDuplicates, filterChoices } from './generateRandomChoices.js';


const user = getUser();
// console.log(user);

//set when generateQuestion is called
let currentQuestion;
//set to the whichever button the user clicks
let selectedSection;
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
const testName = document.getElementById('testname');

generateQuestion(quizQuestions, selectedSection.data);

soundButton.addEventListener('click', () => {
    /*change the name on html to something like randomSoundFromData instead of randomShengmu or make into a function that takes the users quiz choice and generates a sound from that assets file that corresponds.*/
    audio.src = sound;
    audio.type = 'audio/mp3';
    audio.load();
    audio.play();
});

testName.textContent = selectedSection.title;

//populateQuestion(currentQuestion);

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
        const answerOption = document.createElement('input');
        label.textContent = item;
        answerOption.value = item;
        answerOption.type = 'radio';
        answerOption.name = 'answers';
        choiceText.appendChild(label);
        label.appendChild(answerOption);
    });
}

function checkAnswer() {
    const formData = new FormData(choiceForm);
    const userChoice = formData.get('answers');
    //let countArray = yunMuArray.slice();
    if (userChoice === currentQuestion.id) {
        displayResult.textContent = 'Good Job!';
    // change to make any of the three available arrays
        user[selectedSection.id].correct++;
    } else {
        displayResult.textContent = 'Oops! Wrong answer. The correct answer is ' + currentQuestion.id + '.';
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
    // console.log(selectedAnswer.id, 'selectedAnswer.id');
    // console.log(fullArray, 'fullArray');
    
    sound = selectedAnswer.audio;
    populateQuestion(selectedAnswer);
    currentQuestion = selectedAnswer;
}


// generates random choices for the test question
export function generateRandomChoices(arr, numOfChoices, isNot) {
    //passing in the full now so answer will be there.
    const output = [];
    const insertIndex = Math.floor(Math.random() * 4 + 1) - 1;
    //filtering out the correct answer
    let filteredChoices = filterChoices(arr, isNot);

    // console.log(filteredChoices);

    // loop through the array and grab a random choice for each number of choices that don't match.
    for (let i = 0; i < numOfChoices; i++) {
        let choiceIndex = Math.floor(Math.random() * filteredChoices.length);

        // populate the empty array with .push for each choice needed
        output.push(filteredChoices[choiceIndex].id);

        // checking that the current array isn't duplicated        
        filteredChoices = filterDuplicates(filteredChoices, choiceIndex);
    }
    return [
        ...output.slice(0, insertIndex),
        isNot,
        ...output.slice(insertIndex)
    ];
}

