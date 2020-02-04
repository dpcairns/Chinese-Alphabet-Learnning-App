// creates a new user object from the form
export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        correct: 0,
        incorrect: 0,
    };
    return user;
}