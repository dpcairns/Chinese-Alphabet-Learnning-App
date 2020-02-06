import { alphabetData } from '../data/alphabetData.js';
import { getUser } from '../utils/getuser.js';
import { resetTestSection } from '../results/results.js';

const section = localStorage.getItem('section');


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
        //FIX THIS SO BUTTON STILL WORKS BUT IS OBVIOUS TEST HAS ALREEADY BEEN TAKEN
        //retry test function cannot clear out previously taken tests if they are not rest at completeion. only looks at the most recent test. comment out diabled to fix this or write a function that resets all tests.
        //link.setAttribute('disabled', '');
        link.textContent = 'test completed';
        link.style.backgroundColor = '#F2133C';
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
    item.addEventListener('click', () => {
        localStorage.setItem('section', item.id);
        resetTestSection(section);
        window.location.href = '../game';
    });
});



