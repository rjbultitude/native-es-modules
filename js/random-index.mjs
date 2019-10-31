import randomNum from './random-number.mjs';

function randomIndex(arr) {
    if (Array.isArray(arr) !== true) {
        console.warn('arr argument was not an array', arr);
        return undefined;
    }
    const randomNumber = randomNum(0, arr.length - 1);
    return arr[randomNumber];
}

export default randomIndex;
