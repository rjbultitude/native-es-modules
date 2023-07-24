import times from '/node_modules/lodash-es/times.js';
import randomNumber from './random-number.mjs';

function getArrayOfRandomNums() {
    const rndmNum = randomNumber(0, 20);
    let rndmNumArry;
    rndmNumArry = times(5, () => {
        return rndmNum;
    });
    console.log('rndmNumArry', rndmNumArry);
    return rndmNumArry;
}

export default getArrayOfRandomNums;
