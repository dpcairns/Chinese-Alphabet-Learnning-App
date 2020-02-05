export function resetTestSection() {
    const user = getUser();
    user[selectedSection.id].correct = 0;
    user[selectedSection.id].incorrect = 0;
    saveUser(user);
}