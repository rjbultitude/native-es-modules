import randomIndex from './random-index.mjs';

const rndmNumberBtn = document.getElementById('gen-rndm-num');
const rndmNumberPara = document.getElementById('rndm-number');

// import('./random-index.mjs').then((module) => {
//     const randomIndex = module.default;
//     console.log('randomIndex', randomIndex(['0', '1', '2', '3']));
// });

const outputEl = document.getElementById('output');
const strArr = ['Could', 'be', 'anything', 'in', 'this', 'array'];

outputEl.textContent = randomIndex(strArr);

// Dynamic Import Example
function initRndmBtn() {
    rndmNumberBtn.addEventListener('click', async () => {
        const { default: rndmNumsArr } = await import('./random-array.mjs');
        rndmNumberPara.innerText = `${rndmNumsArr()}`
    });
}

initRndmBtn();
