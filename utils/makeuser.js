// creates a new user object from the form
export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        yunMu: {
            correct: 0,
            incorrect: 0,
        },
        shengMu: {
            correct: 0,
            incorrect: 0,
        },
        zhengTi: {
            correct: 0,
            incorrect: 0,
        },
    };
    return user;
}