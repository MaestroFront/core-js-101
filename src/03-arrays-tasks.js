/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */


function findElement(arr, value) {
  return arr.indexOf(value);
}

function generateOdds(len) {
  const arr = Array(len).fill(1);
  return arr.map((item, index) => item * index * 2 + 1);
}

function doubleArray(arr) {
  const dublicateArr = arr.slice(0);
  return arr.concat(dublicateArr);
}

function getArrayOfPositives(arr) {
  return arr.filter((item) => item > 0);
}

function getArrayOfStrings(arr) {
  return arr.filter((item) => typeof item === 'string');
}

function removeFalsyValues(arr) {
  return arr.filter((item) => Boolean(item) === true);
}

function getUpperCaseStrings(arr) {
  return arr.map((item) => item.toUpperCase());
}

function getStringsLength(arr) {
  return arr.map((item) => item.length);
}

function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

function getHead(arr, n) {
  arr.splice(n);
  return arr;
}

function getTail(arr, n) {
  return arr.splice(arr.length - n);
}
function toCsvText(arr) {
  return arr.map((item, index) => {
    if (index === arr.length - 1) {
      return `${item}`;
    }
    return `${item}\n`;
  }).join('');
}

function toArrayOfSquares(arr) {
  return arr.map((item) => item ** 2);
}

/**
 * Transforms the numeric array to the according moving sum array:
 *     f[n] = x[0] + x[1] + x[2] +...+ x[n]
 *  or f[n] = f[n-1] + x[n]
 *
 * @param {array} arr
 * @return {array}
 *
 * Example :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */
function getMovingSum(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Returns every second item from the specified array:
 *
 * @param {array} arr
 * @return {array}
 *
 * Example :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */
function getSecondItems(/* arr */) {
  throw new Error('Not implemented');
}


/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example :
 *  [] => []
 *  [ 1 ] => [ 1 ]
 *  [ 'a', 'b' ] => [ 'a', 'b','b' ]
 *  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
 *  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
 */
function propagateItemsByPositionIndex(arr) {
  return arr.map((item, index) => Array(index + 1).fill(item)).flat();
}

function get3TopItems(arr) {
  arr.sort((a, b) => b - a).splice(3);
  return arr;
}

function getPositivesCount(arr) {
  return arr.filter((item) => typeof item === 'number' && item > 0).length;
}

function sortDigitNamesByNumericOrder(arr) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  return arr.sort((a, b) => obj[a] - obj[b]);
}

function getItemsSum(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b);
}

function getFalsyValuesCount(arr) {
  return arr.filter((item) => Boolean(item) === false).length;
}

function findAllOccurrences(arr, item) {
  return arr.filter((i) => i === item).length;
}

function toStringList(arr) {
  return arr.join(',');
}

function sortCitiesArray(arr) {
  return arr.sort((a, b) => (a.country !== b.country
    ? a.country.localeCompare(b.country)
    : a.city.localeCompare(b.city)));
}

function getIdentityMatrix(n) {
  return Array(n).fill(Array(n).fill(0))
    .map((item, index) => item.map((i, ind) => (index === ind ? 1 : i)));
}

function getIntervalArray(start, end) {
  if (start === end) return [start];
  return Array(end - start + 1).fill(0).map((item, index) => (item + start + index));
}

function distinct(arr) {
  const result = new Set();
  arr.map((item) => (result.add(item)));
  return [...result];
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(/* array, keySelector, valueSelector */) {
  throw new Error('Not implemented');
  // const collection = new Map();
  // array.map((item) => collection.set(keySelector(item), [valueSelector(item)]));
  // return Object.fromEntries(collection);
}

// console.log(group([
//   { country: 'Belarus', city: 'Brest' },
//   { country: 'Russia', city: 'Omsk' },
//   { country: 'Russia', city: 'Samara' },
//   { country: 'Belarus', city: 'Grodno' },
//   { country: 'Belarus', city: 'Minsk' },
//   { country: 'Poland', city: 'Lodz' }
// ], item => item.country, item => item.city));


/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {array} arr
 * @param {Function} childrenSelector, a transform function to apply to each element
 *                                     that returns an array of children
 * @return {array}
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], (x) => x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(/* arr, childrenSelector */) {
  throw new Error('Not implemented');
}


/**
 * Returns an element from the multidimensional array by the specified indexes.
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0])
 *   ['one','two','three'], [2]       => 'three'  (arr[2])
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(/* arr, indexes */) {
  throw new Error('Not implemented');
}


/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position.
 *
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   [ 1, 2 ]  => [ 2, 1 ]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *
 */
function swapHeadAndTail(/* arr */) {
  throw new Error('Not implemented');
}


module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
