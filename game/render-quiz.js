import { generateRandomChoices, filteredArray } from './game.js';

const choiceForm = document.getElementById('choice-form');
const answerButton = document.getElementById('answer-button');
const radioChoice = document.createElement('input');
const choiceText = document.getElementById('choices');

radioChoice.textContent = 'something';
radioChoice.type = 'radio';
choiceText.appendChild(radioChoice);


// filteredArray.forEach(index => {

//     radioChoice.appendChild(index.);
// })

choiceForm.addEventListener('submit', (e) => {
    e.preventDefault();

});