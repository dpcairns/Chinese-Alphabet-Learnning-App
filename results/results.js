import { getUser } from '../utils/getuser.js';
import { saveUser } from '../utils/saveuser.js';


const section = localStorage.getItem('section');


export function resetTestSection(section) {
    const user = getUser();
    user[section].correct = 0;
    user[section].incorrect = 0;
    user[section].completed = false;
    saveUser(user);
}

