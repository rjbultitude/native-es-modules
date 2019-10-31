function randomNum(min, max) {
    min = min || 0;
    max = max || 10;
    return Math.random() * (max - min) + min;
  }

export default randomNum;
