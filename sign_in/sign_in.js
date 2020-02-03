
// gabbing some dom
const userSignUp = document.getElementById('user-sign-up');

// the user clicks sign up and a new form is created.
userSignUp.addEventListener('submit', (e) => {
    e.preventDefault();

    // create a new form data from the user sign up
    const formData = new FormData(userSignUp);

    // creating the user object
    const user = makeUser(formData);
    saveUser(user);
    console.log(user);
});

// creates a new user object from the form
function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        result: { correct: 0, incorrect: 0 },

    };
    return user;
}

// stringify the user input into local storage
function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);

}