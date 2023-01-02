function willYouMarryMe(isPositiveAnswer) {
  return new Promise((resolve, reject) => {
    let text = '';
    if (typeof isPositiveAnswer === 'boolean') {
      if (isPositiveAnswer === true) {
        text = 'Hooray!!! She said "Yes"!';
      } else if (isPositiveAnswer === false) {
        text = 'Oh no, she said "No".';
      }
      resolve(text);
    } else {
      reject(new Error('Wrong parameter is passed! Ask her again.'));
    }
  }).then((result) => result);
}

function processAllPromises(array) {
  return Promise.all(array);
}

function getFastestPromise(array) {
  return Promise.race(array);
}

/**
 * Return Promise object that should be resolved with value that is
 * a result of action with values of all the promises that exists in array.
 * If some of promise is rejected you should catch it and process the next one.
 *
 * @param {Promise[]} array
 * @param {Function} action
 * @return {Promise}
 *
 * @example
 *    const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
 *    const p = chainPromises(promises, (a, b) => a + b);
 *    p.then((res) => {
 *      console.log(res) // => 6
 *    });
 *
 */
function chainPromises(/* array, action */) {
  throw new Error('Not implemented');
}

module.exports = {
  willYouMarryMe,
  processAllPromises,
  getFastestPromise,
  chainPromises,
};
