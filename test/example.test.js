// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { generateRandomChoices } from '../game/generateRandomChoices.js';
import { filterChoices } from '../game/generateRandomChoices.js';

const test = QUnit.test;

test('generateRandomChoices', function(assert) {
    
    const arr = [{ id: 'b', name: 'b', audio: '../assets/shengmu/b.mp3' },
        { id: 'p', name: 'p', audio: '../assets/shengmu/p.mp3' },
        { id: 'm', name: 'm', audio: '../assets/shengmu/m.mp3' },
        { id: 'f', name: 'f', audio: '../assets/shengmu/f.mp3' }];
    let numOfChoices = 2;
    let isNot = arr[0].id;


    
    const expected = [
        'f', 'm', 'b'
    ];
    
    const result = generateRandomChoices(arr, numOfChoices, isNot);
    assert.equal(expected.length, result.length);
    const includes = result.includes('b') || result.includes('p') || result.includes('m') || result.includes('f');
   
    assert.equal(true, includes);
});

test('filterChoices', function(assert) {
    const arr = [{ id: 'b', name: 'b', audio: '../assets/shengmu/b.mp3' },
        { id: 'p', name: 'p', audio: '../assets/shengmu/p.mp3' },
        { id: 'm', name: 'm', audio: '../assets/shengmu/m.mp3' },
        { id: 'f', name: 'f', audio: '../assets/shengmu/f.mp3' }];
    let isNot = arr[0].id;

    const expected = [{ id: 'p', name: 'p', audio: '../assets/shengmu/p.mp3' },
        { id: 'm', name: 'm', audio: '../assets/shengmu/m.mp3' },
        { id: 'f', name: 'f', audio: '../assets/shengmu/f.mp3' }];
    const result = filterChoices(arr, isNot);

    assert.deepEqual(result, expected);

});