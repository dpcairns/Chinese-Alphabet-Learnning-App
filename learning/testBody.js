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
        //retry test function cannot clear out previously taken tests if they are not rest at completion. only looks at the most recent test.         
        link.textContent = 'test completed';
        link.style.backgroundColor = '#F2133C';
    }

    return link;

}
    alphabetData.forEach((item) => {
        const singleSection = item;
        renderLink(singleSection);
    });


//does this need to be all
document.querySelectorAll('.singleSection').forEach(item => {
    item.addEventListener('click', () => {
        localStorage.setItem('section', item.id);
        resetTestSection(section);
        window.location.href = '../game';
    });
});



