import { alphabetArray, shengMuArray, yunMuArray, zhengTiArray } from '../data/alphabetData.js';

shengMuArray.forEach(shengMu => {

    const shengMuSection = document.getElementById('shengMu-section');
    const shengMuSpan = document.createElement('span');
    const button = document.createElement('button');
    shengMuSection.appendChild(button);
    button.appendChild(shengMuSpan);
    shengMuSpan.textContent = shengMu.name;

    button.addEventListener('click', () => {
        const audio = document.getElementById('audio');
        audio.src = '../assets/shengmu/' + shengMu.audio;
        audio.type = 'audio/mp3';
        audio.play();
        button.appendChild(audio);

    });

});

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
        audio.type = 'audio/mp3';
        audio.play();
        button.appendChild(audio);

    });

});


zhengTiArray.forEach(zhengTi => {

    const zhengTiSection = document.getElementById('zhengTi-section');
    const zhengTiSpan = document.createElement('span');
    const button = document.createElement('button');
    zhengTiSection.appendChild(button);
    button.appendChild(zhengTiSpan);
    zhengTiSpan.textContent = zhengTi.name;

    button.addEventListener('click', () => {
        const audio = document.getElementById('audio');
        audio.src = '../assets/zhengti/' + zhengTi.audio;
        audio.type = 'audio/mp3';
        audio.play();
        button.appendChild(audio);

    });

});

