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
function isInsideCircle(/* circle, point */) {
  throw new Error('Not implemented');
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

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
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

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(/* str */) {
  throw new Error('Not implemented');
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

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(/* position */) {
  throw new Error('Not implemented');
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
