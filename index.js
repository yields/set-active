
/**
 * Set the given `el` as active.
 *
 * @param {Element} el
 * @return {Element}
 * @api public
 */

module.exports = function(el){
  var has = el.hasAttribute('tabindex');
  if (!has) el.setAttribute('tabindex', -1);
  el.focus();
  return el;
};
