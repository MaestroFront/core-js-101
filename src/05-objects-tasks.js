function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = () => width * height;
}

function getJSON(obj) {
  return JSON.stringify(obj);
}

function fromJSON(proto, json) {
  return Object.setPrototypeOf(JSON.parse(json), proto);
}

/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

class Builder {
  constructor() {
    this.cssElement = '';
    this.cssId = '';
    this.cssClass = '';
    this.cssAttr = '';
    this.cssPseudoClass = '';
    this.cssPseudoElement = '';
  }

  stringify() {
    const element = this.cssElement ? this.cssElement : '';
    const id = this.cssId ? `#${this.cssId}` : '';
    const clas = this.cssClass ? `${this.cssClass}` : '';
    const attr = this.cssAttr ? `[${this.cssAttr}]` : '';
    const psClas = this.cssPseudoClass ? `${this.cssPseudoClass}` : '';
    const psElem = this.cssPseudoElement ? `::${this.cssPseudoElement}` : '';

    return element + id + clas + attr + psClas + psElem;
  }

  element(value) {
    if (this.cssElement) {
      throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
    }
    if (['cssId', 'cssClass', 'cssAttr', 'cssPseudoClass', 'cssPseudoElement'].some((e) => this[e])) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }
    const object = Object.create(this);
    Object.assign(object, this);
    object.cssElement = value;
    return object;
  }

  id(value) {
    if (this.cssId) {
      throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
    }

    if (['cssClass', 'cssAttr', 'cssPseudoClass', 'cssPseudoElement'].some((e) => this[e])) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }

    const object = Object.create(this);
    Object.assign(object, this);
    object.cssId = value;
    return object;
  }

  class(value) {
    if (['cssAttr', 'cssPseudoClass', 'cssPseudoElement'].some((e) => this[e])) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }

    const object = Object.create(this);
    Object.assign(object, this);
    object.cssClass += `.${value}`;
    return object;
  }

  attr(value) {
    if (['cssPseudoClass', 'cssPseudoElement'].some((e) => this[e])) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }

    const object = Object.create(this);
    Object.assign(object, this);
    object.cssAttr = value;
    return object;
  }

  pseudoClass(value) {
    if (this.cssPseudoElement) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }

    const object = Object.create(this);
    Object.assign(object, this);
    object.cssPseudoClass += `:${value}`;
    return object;
  }

  pseudoElement(value) {
    if (this.cssPseudoElement) throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
    const object = Object.create(this);
    Object.assign(object, this);
    object.cssPseudoElement = value;
    return object;
  }

  combine(selector1, combinator, selector2) {
    const object = Object.create(this);
    object.s1 = selector1.stringify();
    object.s2 = selector2.stringify();
    object.c = combinator;
    object.stringify = () => `${object.s1} ${object.c} ${object.s2}`;
    return object;
  }
}

const cssSelectorBuilder = new Builder();

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
