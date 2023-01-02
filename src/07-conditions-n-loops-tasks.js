function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 !== 0) return 'Fizz';
  if (num % 3 !== 0 && num % 5 === 0) return 'Buzz';
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  return num;
}

function getFactorial(n) {
  return n !== 1 ? n * getFactorial(n - 1) : 1;
}

function getSumBetweenNumbers(n1, n2) {
  let total = n1 - 1;
  return Array(n2 - n1 + 1)
    .fill(1)
    .map((item) => {
      const a = item + total;
      total += 1;
      return a;
    })
    .reduce((acc, cur) => acc + cur);
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function doRectanglesOverlap(rect1, rect2) {
  return (
    rect1.top + rect1.height > rect2.top
    && rect1.left + rect1.width > rect2.left
  );
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const a = (point.x - circle.center.x) ** 2;
  const b = (point.y - circle.center.y) ** 2;
  const c = Math.sqrt(a + b);
  return c < circle.radius;
}

function findFirstSingleChar(str) {
  const unique = str
    .split('')
    .filter((number, index, numbers) => numbers.indexOf(number) !== index);
  const result = str.split('').filter((item) => !unique.includes(item));
  if (result.length > 0) return result[0];
  return null;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let left = '';
  let right = '';
  if (isStartIncluded) {
    left += '[';
  } else {
    left += '(';
  }
  if (isEndIncluded) {
    right += ']';
  } else {
    right += ')';
  }
  if (a < b) return `${left}${a}, ${b}${right}`;
  return `${left}${b}, ${a}${right}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseInteger(num) {
  return +String(num).split('').reverse().join('');
}

function isCreditCardNumber(ccn) {
  const number = String(ccn)
    .split('')
    .map((item) => +item)
    .pop();

  const array = String(ccn)
    .split('')
    .reverse()
    .map((item, index) => {
      if (index % 2 === 0) {
        return item * 1;
      }
      return item * 2;
    })
    .reverse()
    .map((item) => {
      if (String(item).length === 2) {
        return String(item)
          .split('')
          .reduce((acc, curr) => acc + +curr, 0);
      }
      return item;
    });
  array.pop();

  const sum = array.reduce((acc, curr) => acc + curr, 0);

  return (10 - (sum % 10)) % 10 === number;
}

function getDigitalRoot(num) {
  const a = String(num)
    .split('')
    .reduce((acc, cur) => +acc + +cur);
  if (a < 10) return a;
  return getDigitalRoot(a);
}

function isBracketsBalanced(str) {
  const result = str.replaceAll('[]', '').replaceAll('()', '').replaceAll('{}', '').replaceAll('<>', '');
  if (result.includes('[]') || result.includes('()') || result.includes('<>') || result.includes('{}')) {
    return isBracketsBalanced(result);
  }
  return result.length === 0;
}

function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(/* pathes */) {
  throw new Error('Not implemented');
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(/* m1, m2 */) {
  throw new Error('Not implemented');
}

function evaluateTicTacToePosition(position) {
  if ((position[0][0] === '0') && (position[0][1] === '0') && (position[0][2] === '0')) {
    return '0';
  }
  if ((position[0][0] === '0') && (position[1][0] === '0') && (position[2][0] === '0')) {
    return '0';
  }
  if ((position[0][0] === '0') && (position[1][1] === '0') && (position[2][2] === '0')) {
    return '0';
  }
  if ((position[1][0] === '0') && (position[1][1] === '0') && (position[1][2] === '0')) {
    return '0';
  }
  if ((position[2][0] === '0') && (position[2][1] === '0') && (position[2][2] === '0')) {
    return '0';
  }
  if ((position[0][1] === '0') && (position[1][1] === '0') && (position[2][1] === '0')) {
    return '0';
  }
  if ((position[0][2] === '0') && (position[1][2] === '0') && (position[2][2] === '0')) {
    return '0';
  }
  if ((position[0][2] === '0') && (position[1][1] === '0') && (position[2][0] === '0')) {
    return '0';
  }
  if ((position[0][0] === 'X') && (position[0][1] === 'X') && (position[0][2] === 'X')) {
    return 'X';
  }
  if ((position[0][0] === 'X') && (position[1][0] === 'X') && (position[2][0] === 'X')) {
    return 'X';
  }
  if ((position[0][0] === 'X') && (position[1][1] === 'X') && (position[2][2] === 'X')) {
    return 'X';
  }
  if ((position[1][0] === 'X') && (position[1][1] === 'X') && (position[1][2] === 'X')) {
    return 'X';
  }
  if ((position[2][0] === 'X') && (position[2][1] === 'X') && (position[2][2] === 'X')) {
    return 'X';
  }
  if ((position[0][1] === 'X') && (position[1][1] === 'X') && (position[2][1] === 'X')) {
    return 'X';
  }
  if ((position[0][2] === 'X') && (position[1][2] === 'X') && (position[2][2] === 'X')) {
    return 'X';
  }
  if ((position[0][2] === 'X') && (position[1][1] === 'X') && (position[2][0] === 'X')) {
    return 'X';
  }
  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
