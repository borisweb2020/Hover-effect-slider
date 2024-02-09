"use strict";

var $item = document.querySelectorAll('.item');
var $outField = document.querySelector('.wrapper');
$item.forEach(function (item) {
  item.addEventListener('mouseenter', function (event) {
    var element = event.currentTarget;
    toggleHoverClass(element, 'add');
    element.addEventListener('mouseleave', function () {
      toggleHoverClass(element, 'remove');
    });
  });
  item.addEventListener('click', function () {
    removeActiveClass();
    item.classList.toggle('active');
  });
});
$outField.addEventListener('click', function (event) {
  var isInner = event.target.closest('.inner');
  if (!isInner) {
    removeActiveClass();
  }
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
function removeActiveClass() {
  $item.forEach(function (item) {
    item.classList.remove('active');
  });
}