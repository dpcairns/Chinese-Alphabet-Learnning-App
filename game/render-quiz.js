import { filteredArray } from './game.js';
import { generateQuestion, generateRandomChoices } from '../utils/generate-quiz-questions.js';
import { shengMuArray } from '../data/alphabetData.js';


/*after user makes selection, evaluate answer, remove current question from quizx questions. re-run same logic with remaining questions in array.*/
let quizQuestions = shengMuArray.slice();
let currentQuestion = generateQuestion(quizQuestions);
const soundButton = document.getElementById('sound-button');
const choiceText = document.getElementById('choices');
soundButton.addEventListener('click', () => {
    /*change the name on html to something like randomSoundFromData instead of randomShengmu or make into a function that takes the users quiz choice and generates a sound from that assets file that corresponds.*/
    const audio = document.getElementById('randomShengMu');
    audio.src = '../assets/shengmu/' + currentQuestion.audio;
    audio.type = 'audio/mp3';
    audio.play();
});
//array of choices with answer inserted at a random index.
const choices = generateChoices(currentQuestion.wrongAnswers, generateInsertIndex(), currentQuestion.id);
console.log(choices)
choices.forEach(item => {
    const label = document.createElement('label');
    const answerOption = document.createElement('input');
    label.textContent = item;
    answerOption.value = item;
    answerOption.type = 'radio';
    answerOption.name = 'answers';
    choiceText.appendChild(label);
    choiceText.appendChild(answerOption);
})
//returns a randomized index between 0 and 3.
function generateInsertIndex() {c
    return Math.floor(Math.random() * 4 + 1) - 1
};
//takes in and array, index(from generateInsertIndex), newItem(selected answer) and inserts the selected answer t a random index in the returned array.
function generateChoices(arr, index, newItem) {
    return [
        ...arr.slice(0, index), [1, 5, 2, 3]
        newItem,
        ...arr.slice(index)
    ]
}