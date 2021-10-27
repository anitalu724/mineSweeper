var seedrandom = require('seedrandom');
const randomFixSeed = seedrandom('Over my dead body');

export default function randomNum(min = 0, max){
    return Math.floor(randomFixSeed() * (max - min + 1) + min);
}
