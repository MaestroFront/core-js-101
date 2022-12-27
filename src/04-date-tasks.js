function parseDataFromRfc2822(value) {
  const date = new Date(value);
  return date.valueOf();
}

function parseDataFromIso8601(value) {
  const date = new Date(value);
  return date.valueOf();
}

function isLeapYear(date) {
  const newDate = date;
  const year = newDate.getFullYear();
  const day = new Date(year, 2, 0).getDate();
  return day === 29;
}


function timeSpanToString(startDate, endDate) {
  const difference = endDate - startDate;

  let hours = Math.floor(difference / 1000 / 60 / 60);
  let minutes = Math.floor(difference / 1000 / 60 - hours * 60);
  let sec = Math.floor(difference / 1000 - hours * 60 * 60 - minutes * 60);
  let mls = Math.floor(
    difference - hours * 60 * 60 * 1000 - minutes * 60 * 1000 - sec * 1000,
  );

  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (sec < 10) sec = `0${sec}`;
  if (mls === 0) mls = '000';

  return `${hours}:${minutes}:${sec}.${mls}`;
}

/**
 * Returns the angle (in radians) between the hands of an analog clock
 * for the specified Greenwich time.
 * If you have problem with solution please read: https://en.wikipedia.org/wiki/Clock_angle_problem
 *
 * SMALL TIP: convert to radians just once, before return in order to not lost precision
 *
 * @param {date} date
 * @return {number}
 *
 * @example:
 *    Date.UTC(2016,2,5, 0, 0) => 0
 *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
 *    Date.UTC(2016,3,5,18, 0) => Math.PI
 *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
 */
function angleBetweenClockHands(/* date */) {
  throw new Error('Not implemented');
}

module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
};
