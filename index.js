
var isFocusable = require('is-focusable');

/**
 * Set the given `el` as active.
 *
 * @param {Element} el
 * @return {Element}
 * @api public
 */

module.exports = function(el){
  if (!isFocusable(el)) el.setAttribute('tabindex', -1);
  el.focus();
  return el;
};
