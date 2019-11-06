import randomIndex from './random-index.mjs';
// import randomArray from './random-array.mjs';

import('./random-index.mjs').then((module) => {
    const randomIndex = module.default;
    console.log('randomIndex', randomIndex(['0', '1']));
});

const outputEl = document.getElementById('output');
const strArr = ['Could', 'be', 'anything', 'in', 'this', 'array'];

outputEl.textContent = randomIndex(strArr);
// outputEl.textContent = `${randomArray()}`;
