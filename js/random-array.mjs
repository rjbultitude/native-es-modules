import times from 'lodash/times';
import randomNumber from './random-number.mjs';

function getArrayOfRandomNums() {
    console.log('random', randomNumber(0, 20));
    return times(5, () => {
        return randomNumber(0, 20);
    });
}

export default getArrayOfRandomNums;
