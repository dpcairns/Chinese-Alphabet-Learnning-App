import { generateQuestion } from '../utils/generate-quiz-questions.js';
import { shengMuArray, yunMuArray, zhengTiArray } from '../data/alphabetData.js';
import { getUser } from '../utils/getuser.js';
import { saveUser } from '../utils/saveuser.js';

/*after user makes selection, evaluate answer, remove current question from quiz questions. re-run same logic with remaining questions in array.*/
let quizQuestions = yunMuArray.slice();
let currentQuestion = generateQuestion(quizQuestions);
const soundButton = document.getElementById('sound-button');
const choiceText = document.getElementById('choices');
const choiceForm = document.getElementById('choice-form');

// bring the user from local storage
const user = getUser();

soundButton.addEventListener('click', () => {
    /*change the name on html to something like randomSoundFromData instead of randomShengmu or make into a function that takes the users quiz choice and generates a sound from that assets file that corresponds.*/
    const audio = document.getElementById('randomSoundFromData');
    audio.src = '../assets/yunmu/' + currentQuestion.audio;
    audio.type = 'audio/mp3';
    audio.play();
});
//array of choices with answer inserted at a random index.
const choices = generateChoices(currentQuestion.wrongAnswers, generateInsertIndex(), currentQuestion.id);
console.log(choices);
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



//returns a randomized index between 0 and 3.
function generateInsertIndex() {
    return Math.floor(Math.random() * 4 + 1) - 1;
}
//takes in and array, index(from generateInsertIndex), newItem(selected answer) and inserts the selected answer t a random index in the returned array.
function generateChoices(arr, index, newItem) {
    return [
        ...arr.slice(0, index),
        newItem,
        ...arr.slice(index)
    ];
}


choiceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(choiceForm);
    const userChoice = formData.get('answers');
    if (userChoice === currentQuestion.id) {
        user.correct++;
    } else {
        user.incorrect++;
    }
    saveUser(user);
    console.log(user);
});

