import randomIndex from './random-index.mjs';
// import randomArray from './random-array.mjs';

const outputEl = document.getElementById('output');
const strArr = ['Could', 'be', 'anything', 'in', 'this', 'array'];

outputEl.textContent = randomIndex(strArr);
// outputEl.textContent = `${randomArray()}`;
