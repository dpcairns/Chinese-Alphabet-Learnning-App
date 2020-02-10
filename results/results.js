import { getUser, saveUser } from '../utils/userUtils.js';


export function resetTestSection() {
    const section = localStorage.getItem('section');
    const user = getUser();
    user[section].correct = 0;
    user[section].incorrect = 0;
    user[section].completed = false;
    saveUser(user);
}

