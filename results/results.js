import { getUser } from '../utils/getuser.js';
import { saveUser } from '../utils/saveuser.js';

export function resetTestSection() {
    const section = localStorage.getItem('section');
    const user = getUser();

    user[section] = {
        correct: 0,
        incorrect: 0,
        completed: false
    };

    saveUser(user);
}

