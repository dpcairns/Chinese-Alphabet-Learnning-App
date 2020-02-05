import { alphabetData } from '../data/alphabetData.js';
import { getUser } from '../utils/getuser.js';

const user = getUser();
//changed to localstorage instead of URLsearchParams.
function renderLink(singleSection) {
    const nav = document.getElementById('test-nav');
    //now a button instead of a link
    const link = document.createElement('button');
    link.classList.add('singleSection');
    nav.appendChild(link);
    link.textContent = singleSection.title;
    //test to see if we're using
    link.setAttribute('id', singleSection.id);
    //when user completes a section of the alphabet, disable that section.
    if (user[singleSection.id].completed) {
        link.setAttribute('disabled', '');
    }

    return link;

}
for (let i = 0; i < alphabetData.length; i++) {
    //singlesection is being assigned to the full object of shengmu, yunmu,zhengti.
    const singleSection = alphabetData[i];
    console.log(singleSection);
    renderLink(singleSection);
}

//does this need to be all
document.querySelectorAll('.singleSection').forEach(item => {
    item.addEventListener('click', event => {
        localStorage.setItem('section', item.id);
        window.location.href = '../game';
    });
});