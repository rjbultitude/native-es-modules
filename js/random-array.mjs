import times from 'lodash.times';
import randomNumber from './random-number.mjs';

function getArrayOfRandomNums() {
    return times(5, randomNumber());
}

export default getArrayOfRandomNums;
