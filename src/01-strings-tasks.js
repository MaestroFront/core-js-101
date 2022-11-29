function concatenateStrings(value1, value2) {
  return value1 + value2;
}

function getStringLength(value) {
  return value.length;
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  return value.replace(/Hello, /gi, '').replace('!', '');
}

function getFirstChar(value) {
  return value[0];
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function repeatString(value, count) {
  return value.repeat(count);
}

function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

function unbracketTag(str) {
  return str.replace('<', '').replace('>', '');
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function extractEmails(str) {
  return str.split(';');
}

function getRectangleString(width, height, top = [], walls = [], down = []) {
  const gap = ' '.repeat(width - 2);
  top.push(String.fromCharCode(9484));
  for (let i = 0; i < width - 2; i += 1) {
    top.push(String.fromCharCode(9472));
  }
  top.push(String.fromCharCode(9488));
  top.push('\n');

  down.push(String.fromCharCode(9492));
  for (let i = 0; i < width - 2; i += 1) {
    down.push(String.fromCharCode(9472));
  }
  down.push(String.fromCharCode(9496));
  down.push('\n');
  if (height > 1) {
    for (let i = 0; i < height - 2; i += 1) {
      walls.push(String.fromCharCode(9474));
      walls.push(gap);
      walls.push(String.fromCharCode(9474));
      walls.push('\n');
    }
    return `${top.join('')}${walls.join('')}${down.join('')}`;
  }
  return `${top.join('')}${down.join('')}`;
}

function encodeToRot13(str) {
  return str.replace(/[A-Z]/gi, (item) => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(item)]);
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const suits = ['♣', '♦', '♥', '♠'];
  if (value.includes('10')) return cards.indexOf('10') + suits.indexOf(value[2]) * 13;
  return cards.indexOf(value[0]) + suits.indexOf(value[1]) * 13;
}

module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
