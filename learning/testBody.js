import { alphabetData } from '../data/alphabetData.js';
import { getUser } from '../utils/getuser.js';
import { resetTestSection } from '../results/results.js';

const section = localStorage.getItem('section');

const user = getUser();

function renderLink(singleSection) {
    const nav = document.getElementById('test-nav');

    // create button for the test
    const link = document.createElement('button');
    link.classList.add('singleSection');
    nav.appendChild(link);
    link.textContent = singleSection.title;
    link.setAttribute('id', singleSection.id);

    //when user completes a section of the alphabet, disable that section.
    if (user[singleSection.id].completed) {

        //retry test function cannot clear out previously taken tests if they are not rest at completion. only looks at the most recent test.  
        link.textContent = 'take the test again';
        link.style.backgroundColor = '#F2133C';
    }

    return link;

}
for (let i = 0; i < alphabetData.length; i++) {
    //singlesection is being assigned to the full object of shengmu, yunmu,zhengti.
    const singleSection = alphabetData[i];
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



