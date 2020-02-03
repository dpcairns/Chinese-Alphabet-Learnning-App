import { shengMuArray } from '../data/alphabetData.js';

let index = Math.floor(Math.random() * shengMuArray.length - 1);
const soundButton = document.getElementById('sound-button');
const randomShengMuSound = shengMuArray[index].audio;




soundButton.addEventListener('click', () => {
    const audio = document.getElementById('randomShengMu');
    audio.src = '../assets/shengmu/' + randomShengMuSound;
    audio.type = 'audio/mp3';
    audio.play();
    soundButton.appendChild(audio);
});

console.log(randomShengMuSound);
