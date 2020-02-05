// IMPORT MODULES under test here:
// import example from '../src/example.js';
function renderLink(singleSection){
    const link = document.createElement('a');
    link.classList.add('singleSection');
    link.textContent = singleSection.title;
    link.classList.add ('test');
    link.href = '../game/?id=' + singleSection.id;
   
    return link;
}

const test = QUnit.test;
test('The renderlink function', function(assert) {  
    const input = 'yunMuSection';
    const expected = '<a class="singleSection test" href="../game/?id=undefined"></a>';
    const result = renderLink(input);
    assert.equal(expected, result);
    console.log(result);

    assert.equal(true, false);
});
