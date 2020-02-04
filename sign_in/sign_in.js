import { saveUser } from '../utils/saveuser.js';
import { makeUser } from '../utils/makeuser.js';

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
    // console.log(user);
});



