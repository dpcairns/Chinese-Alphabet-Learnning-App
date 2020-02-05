import { alphabetArray, shengMuArray, yunMuArray, zhengTiArray } from '../data/alphabetData.js';

shengMuArray.forEach(shengMu => {

    const shengMuSection = document.getElementById('shengMu-section');
    const shengMuSpan = document.createElement('span');
    const button = document.createElement('button');
    shengMuSection.appendChild(button);
    button.appendChild(shengMuSpan);
    button.className = 'shengmu-button';
    shengMuSpan.textContent = shengMu.name;

    button.addEventListener('click', () => {
        const audio = document.getElementById('audio');
        audio.src = shengMu.audio;
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
    button.className = 'yunmu-button';
    yunMuSpan.textContent = yunMu.name;

    button.addEventListener('click', () => {
        const audio = document.getElementById('audio');
        audio.src = yunMu.audio;
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
    button.className = 'zhengti-button';
    zhengTiSpan.textContent = zhengTi.name;

    button.addEventListener('click', () => {
        const audio = document.getElementById('audio');
        audio.src = zhengTi.audio;
        audio.type = 'audio/mp3';
        audio.play();
        button.appendChild(audio);

    });

});

