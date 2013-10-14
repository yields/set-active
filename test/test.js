
var activate = require('set-active');
var assert = require('assert');

describe('activate(el)', function(){
  it('should equal document.activeElement', function(){
    var el = document.createElement('p');
    document.body.appendChild(el);
    assert(activate(el) == document.activeElement);
  })

  it('should not add tabindex to natively focusable elements', function(){
    var el = document.createElement('a');
    el.href = 'http://google.com';
    document.body.appendChild(el);
    assert(activate(el) == document.activeElement);
  })
})
