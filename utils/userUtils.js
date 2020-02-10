// creates a new user object from the form
export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        yunMu: {
            correct: 0,
            incorrect: 0,
            completed: false
        },
        shengMu: {
            correct: 0,
            incorrect: 0,
            completed: false
        },
        zhengTi: {
            correct: 0,
            incorrect: 0,
            completed: false
        },
    };
    return user;
}


export function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}
// stringify the user input into local storage
export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);

}