// creates a new user object from the form
export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
<<<<<<< HEAD
        correct: 0,
        incorrect: 0,
=======
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
>>>>>>> f812261f3211c67e5b8559f988444cd7a14eb289
    };
    return user;
}