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