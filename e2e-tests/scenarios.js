'use strict';

describe('my app', function () {

  it('Color board must be correctly displayed with size 8 by default', function () {
    browser.get('');

    var cells = element.all(by.css('cell'));
    expect(cells.count()).toEqual(64);
  });

  it('The draw button must be disabled if the color is not valid', function () {
    browser.get('');

    var topLeftColorInput = element(by.id('top-left-color-input-id'));
    topLeftColorInput.sendKeys('#12');
    
    var drawButton = element(by.id('draw-id'));
    expect(drawButton.isEnabled()).toBe(false);
  });

  
});