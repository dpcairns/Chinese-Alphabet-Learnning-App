import { shengMuArray } from '../data/alphabetData.js';
//import findById from '../utils/findById.js';
import { findByAudio } from '../utils/findById.js';

// generating a random number by the length of the array
let index = Math.floor(Math.random() * shengMuArray.length);
const soundButton = document.getElementById('sound-button');
// assigning a random sound from the array as correct answer
const randomShengMuSound = shengMuArray[index].audio;
const correctAnswer = findByAudio(shengMuArray, randomShengMuSound);


// console.log(randomShengMuSound);

// assigning the random sound to play back from the button when pushed
soundButton.addEventListener('click', () => {
    const audio = document.getElementById('randomShengMu');
    audio.src = '../assets/shengmu/' + randomShengMuSound;
    audio.type = 'audio/mp3';
    audio.play();
    soundButton.appendChild(audio);

});

// generates random choices for the test question
export function generateRandomChoices(arr, numOfChoices) {
    // creates an empty array 
    const output = [];
    let currentArray = arr;

    // loop through the array and grab a random choice for each number of choices
    for (let i = 0; i < numOfChoices; i++) {
        let choiceIndex = Math.floor(Math.random() * currentArray.length);

        // populate the empty array with .push for each choice needed
        output.push(currentArray[choiceIndex]);

        // checking that the current array isn't duplicated        
        currentArray = currentArray.filter(item => {
            return item !== currentArray[choiceIndex];
        });
    }
    // add the correct answer to the array
    output.push(correctAnswer);
    return output;
}

// removing the correct answer from available answers
export const filteredArray = shengMuArray.filter(item => item.id !== correctAnswer.id);


export const fourChoiceArray = (generateRandomChoices(filteredArray, 3));
console.log(fourChoiceArray);
