/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

/**
 * Returns an average of two given numbers.
 *
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(/* value1, value2 */) {
  throw new Error('Not implemented');
}

/**
 * Returns a distance between two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
function getDistanceBetweenPoints(/* x1, y1, x2, y2 */) {
  throw new Error('Not implemented');
}

function getLinearEquationRoot(a, b) {
  return -b / a;
}


/**
 * Returns an angle (in radians) between two vectors given by xi and yi,
 * coordinates in Cartesian plane.
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 *   (0,1) (1,2)     => 0
 */
function getAngleBetweenVectors(/* x1, y1, x2, y2 */) {
  throw new Error('Not implemented');
}

function getLastDigit(value) {
  return +(String(value)[String(value).length - 1]);
}

function parseNumberFromString(value) {
  return +value;
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

function roundToPowerOfTen(num, pow) {
  return Math.round(num * 0.1 ** pow) * 10 ** pow;
}

/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(/* n */) {
  throw new Error('Not implemented');
}

function toNumber(value, def) {
  if (typeof +value === 'number' && !Number.isNaN(+value)) return +value;
  return def;
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
