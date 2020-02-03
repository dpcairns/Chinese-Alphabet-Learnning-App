import { alphabetArray, shengMuArray, yunMuArray, zhengTiArray } from '../data/alphabetData.js';


yunMuArray.forEach(yunMu => {

    const yunMuSection = document.getElementById('yunmu-section');
    const yunMuSpan = document.createElement('span');
    const button = document.createElement('button');
    yunMuSection.appendChild(button);
    button.appendChild(yunMuSpan);
    yunMuSpan.textContent = yunMu.name;

    button.addEventListener('click', () => {
        const audio = document.getElementById('audio');
        audio.src = '../assets/yunmu/' + yunMu.audio;
        audio.type = 'video/mp3';
        audio.play();
        console.log('try me');
        console.log(audio.src);
        button.appendChild(audio);

    });

}); 


