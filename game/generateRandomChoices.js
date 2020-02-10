// generates random choices for the test question
export function generateRandomChoices(arr, numOfChoices, isNot) {
    //passing in the full now so answer will be there.
    const output = [];
    const insertIndex = Math.floor(Math.random() * 4 + 1) - 1;
    //filtering out the correct answer
    let filteredChoices = filterChoices(arr, isNot);
    // loop through the array and grab a random choice for each number of choices that don't match.

    for (let i = 0; i < numOfChoices; i++) {
        let choiceIndex = Math.floor(Math.random() * filteredChoices.length);
        // populate the empty array with .push for each choice needed
        output.push(filteredChoices[choiceIndex].id);
        // checking that the current array isn't duplicated        
        filteredChoices = filterDuplicates(filteredChoices, choiceIndex);
    }



    return [
        ...output.slice(0, insertIndex),
        isNot,
        ...output.slice(insertIndex)
    ];
}
export function filterDuplicates(filteredChoices, choiceIndex) {
    filteredChoices = filteredChoices.filter(item => {
        return item !== filteredChoices[choiceIndex];
    });
    return filteredChoices;
}

export function filterChoices(arr, isNot) {
    return arr.filter(item => {
        return item.id !== isNot;
    });
}

