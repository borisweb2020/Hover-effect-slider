"use strict";

var $item = document.querySelectorAll('.item');
$item.forEach(function (item) {
  item.addEventListener('mouseenter', function (event) {
    var element = event.currentTarget;
    toggleHoverClass(element, 'add');
    element.addEventListener('mouseleave', function () {
      toggleHoverClass(element, 'remove');
    });
  });
  item.addEventListener('click', function () {
    item.classList.toggle('active');
  });
});
function toggleHoverClass(el, mode) {
  el.classList[mode]('hover');
  var nextElement = el.nextElementSibling;
  var previousElement = el.previousElementSibling;
  for (var i = 1; i < 5; i++) {
    if (nextElement) {
      nextElement.classList[mode]("hover-".concat(i));
      nextElement = nextElement.nextElementSibling;
    }
    if (previousElement) {
      previousElement.classList[mode]("pre-".concat(i, "hover"));
      previousElement = previousElement.previousElementSibling;
    }
  }
}