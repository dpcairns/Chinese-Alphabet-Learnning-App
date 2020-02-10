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
