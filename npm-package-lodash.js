const lodash = require('lodash');

const array = [1,[2,[3],[4]]];

const newArray = lodash.flattenDeep(array);

console.log(newArray);