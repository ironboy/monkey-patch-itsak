// grabEl = grabElement
export function grabEl(cssSelector) {
  return document.querySelector(cssSelector);
}

// grabEls = grabElements
export function grabEls(cssSelector) {
  return document.querySelectorAll(cssSelector);
}

// listen = add an event handler that triggers
// when we match a certain css selector
export function listen(eventType, cssSelector, func) {
  // delegated event handling
  // listen to the events on the whole body
  // but filter if we should do something
  // based on the css selector
  grabEl('body').addEventListener(eventType, function (event) {
    // event.target - the actual/innermost HTML element that 
    // triggers this event
    //
    // closest is used to see if a HTML element or any of its parents
    // matches a certain css selector
    let element = event.target.closest(cssSelector);
    // if no match do nothing more
    if (!element) { return; }
    // otherwise run the function
    func(event);
  });
}