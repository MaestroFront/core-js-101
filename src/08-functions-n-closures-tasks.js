function getComposition(f, g) {
  return (...args) => f(g(...args));
}

function getPowerFunction(exponent) {
  return (k) => k ** exponent;
}

function getPolynom(...args) {
  return (x) => {
    if (args.length === 3) return args[0] * x ** 2 + args[1] * x + args[2];
    if (args.length === 2) return args[0] * x + args[1];
    if (args.length === 1) return args[0];
    return null;
  };
}

function memoize(func) {
  const cache = {};
  return () => {
    const n = 'number';
    if (n in cache) {
      return cache[n];
    }
    const result = func();
    cache[n] = result;
    return result;
  };
}


/**
 * Returns the function trying to call the passed function and if it throws,
 * retrying it specified number of attempts.
 *
 * @param {Function} func
 * @param {number} attempts
 * @return {Function}
 *
 * @example
 * const attempt = 0, retryer = retry(() => {
 *      if (++attempt % 2) throw new Error('test');
 *      else return attempt;
 * }, 2);
 * retryer() => 2
 */
function retry(/* func, attempts */) {
  throw new Error('Not implemented');
}


/**
 * Returns the logging wrapper for the specified method,
 * Logger has to log the start and end of calling the specified function.
 * Logger has to log the arguments of invoked function.
 * The format of output log is:
 * <function name>(<arg1>, <arg2>,...,<argN>) starts
 * <function name>(<arg1>, <arg2>,...,<argN>) ends
 *
 *
 * @param {Function} func
 * @param {Function} logFunc - function to output log with single string argument
 * @return {Function}
 *
 * @example
 *
 * const cosLogger = logger(Math.cos, console.log);
 * const result = cosLogger(Math.PI));     // -1
 *
 * log from console.log:
 * cos(3.141592653589793) starts
 * cos(3.141592653589793) ends
 *
 */
function logger(/* func, logFunc */) {
  throw new Error('Not implemented');
}

function partialUsingArguments(fn, ...args1) {
  return (...args) => (args1 + args).split(',').join('');
}

function getIdGeneratorFunction(startFrom) {
  let curr = startFrom - 1;
  return () => {
    curr += 1;
    return curr;
  };
}


module.exports = {
  getComposition,
  getPowerFunction,
  getPolynom,
  memoize,
  retry,
  logger,
  partialUsingArguments,
  getIdGeneratorFunction,
};
