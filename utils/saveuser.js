// stringify the user input into local storage
export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);

}