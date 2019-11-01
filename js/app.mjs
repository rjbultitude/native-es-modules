import randomIndex from './random-index.mjs';
import randomArray from './random-array.mjs';

const strArr = ['Could', 'be', 'anything', 'in', 'this', 'array'];
const outputNode = document.getElementById('output');

outputNode.textContent = randomIndex(strArr);
console.log('random array of numbers is: ', randomArray());
