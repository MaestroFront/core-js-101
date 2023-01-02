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

function angleBetweenClockHands(date) {
  const hourAngle = date.getUTCHours() % 12;
  const minute = date.getUTCMinutes();
  const angle = Math.abs(hourAngle * 30 + minute * 0.5 - minute * 6);
  const minAngle = Math.min(360 - angle, angle);

  return (minAngle * Math.PI) / 180;
}

module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
};
