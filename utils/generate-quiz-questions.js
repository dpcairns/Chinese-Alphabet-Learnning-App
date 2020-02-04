// generating a random number by the length of the array
export function generateQuestion(arr) {
    let getRandomObj = Math.floor(Math.random() * arr.length);
    // assigning a random item from the array as correct answer. getting a random object from passed in array.
    const correctAnswer = arr[getRandomObj];
    /*removing the correct answer from available answers or returning an array of everything that doesn't match the correctAnswer. maybe it would be beneficial to break this out over lines so they can see the callback in a more traditional way*/
    const filteredArray = arr.filter(item => item.id !== correctAnswer.id);
    /*add new property that contains randomly generated wrong answers that do not contain the correct answer.*/
    correctAnswer.wrongAnswers = generateRandomChoices(filteredArray, 3);
    /* return the selected answer object that is both the correct answer and holds the three non-repeating other answer options as a property.*/
    return correctAnswer;
}
// generates random choices for the test question
export function generateRandomChoices(arr, numOfChoices) {
    // creates an empty array 
    const output = [];
    let currentArray = arr;
    // loop through the array and grab a random choice for each number of choices
    for (let i = 0; i < numOfChoices; i++) {
        let choiceIndex = Math.floor(Math.random() * currentArray.length);
        // populate the empty array with .push for each choice needed
        output.push(currentArray[choiceIndex].id);
        // checking that the current array isn't duplicated        
        currentArray = currentArray.filter(item => {
            return item !== currentArray[choiceIndex];
        });
    }
    return output;
}