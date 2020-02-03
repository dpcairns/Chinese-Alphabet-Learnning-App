export default function findById(array, id) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}

export function findByAudio(array, audio) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.audio === audio) {
            return item;
        }
    }
    return null;
}