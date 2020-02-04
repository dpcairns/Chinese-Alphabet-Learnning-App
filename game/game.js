// import { getUser } from '../utils/getuser.js';
import { alphabetArray } from '../data/alphabetData.js';

function renderLink(alphabetArray){
    const nav = document.getElementById('nav');
    const link = document.createElement('a');
    console.log(link);
    link.classList.add('alphabetArray');
    nav.appendChild(link);
    link.textContent = alphabetArray.title;
    link.href = '../alphabetArray/?id=' + alphabetArray.id;
    console.log(alphabetArray.id);

    return link;
}
for (let i = 0; i < alphabetArray.length; i++){
    const objectFromAlphabetArray = alphabetArray[i];
    renderLink(objectFromAlphabetArray);
}