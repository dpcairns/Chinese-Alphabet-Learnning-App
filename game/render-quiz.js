import { generateRandomChoices, fourChoiceArray } from './game.js';
fourChoiceArray.forEach(choice =>{
    const choiceForm = document.getElementById('choice-form');
    const choiceContainer = document.createElement('label');
    choiceForm.appendChild(choiceContainer);
    const displayAlphabetSpan = document.createElement('span');
    choiceContainer.appendChild(displayAlphabetSpan);
    displayAlphabetSpan.textContent = choice.name;
    const radioChoice = document.createElement('input');
    choiceContainer.appendChild(radioChoice);
    console.log(choiceForm);

    radioChoice.value = '';
    radioChoice.type = 'radio';
    radioChoice.name = choice.name;
});

// choiceForm.addEventListener('submit', (e) => {
//     e.preventDefault();

// });