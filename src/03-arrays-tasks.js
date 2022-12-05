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

function getMovingSum(arr) {
  const result = [];
  arr.reduce((prev, cur) => {
    result.push(cur + prev);
    return (prev + cur);
  }, 0);
  return result;
}

function getSecondItems(arr) {
  return arr.filter((item, index) => index % 2 !== 0);
}

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

function group(array, keySelector, valueSelector) {
  return array.reduce((acc, curr) => {
    const key = keySelector(curr);
    const value = valueSelector(curr);

    let arr = [];
    if (acc.get(key)) {
      arr = acc.get(key);
    }
    arr.push(value);
    acc.set(key, arr);
    return acc;
  }, new Map());
}

function selectMany(arr, childrenSelector) {
  return arr.map((item) => childrenSelector(item)).flat();
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

function swapHeadAndTail(arr) {
  if (arr.length % 2 === 0) {
    const head = arr.splice(0, arr.length / 2);
    return arr.concat(head);
  }
  if (arr.length % 2 !== 0) {
    const head = arr.splice(0, arr.length / 2);
    const middle = [arr.shift()];
    return arr.concat(middle, head);
  }
  return null;
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
