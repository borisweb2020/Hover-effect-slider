"use strict";

var $item = document.querySelectorAll('.item');
$item.forEach(function (item) {
  item.addEventListener('mouseenter', function (event) {
    var element = event.currentTarget;
    element.classList.add('hover');
    console.log('currentTarget', event.currentTarget.className);
    var nextElement = element.nextElementSibling;
    var previousElement = element.previousElementSibling;
    for (var i = 1; i < 5; i++) {
      if (nextElement) {
        nextElement.classList.add("hover-".concat(i));
        nextElement = nextElement.nextElementSibling;
      }
      if (previousElement) {
        previousElement.classList.add("pre-".concat(i, "hover"));
        previousElement = previousElement.previousElementSibling;
      }
    }
    element.addEventListener('mouseleave', function () {
      element.classList.remove('hover');
      var nextElement = element.nextElementSibling;
      var previousElement = element.previousElementSibling;
      for (var _i = 1; _i < 5; _i++) {
        if (nextElement) {
          nextElement.classList.remove("hover-".concat(_i));
          nextElement = nextElement.nextElementSibling;
        }
        if (previousElement) {
          previousElement.classList.remove("pre-".concat(_i, "hover"));
          previousElement = previousElement.previousElementSibling;
        }
      }
      console.clear();
    });
  });
});