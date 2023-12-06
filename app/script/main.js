"use strict";

var $item = document.querySelectorAll('.item');
$item.forEach(function (item) {
  item.addEventListener('mouseenter', function (event) {
    event.currentTarget.classList.add('hover');
    console.log('currentTarget', event.currentTarget.className);
  });
  item.addEventListener('mouseleave', function (event) {
    event.currentTarget.classList.remove('hover');
    console.log('currentTarget', event.currentTarget.className);
  });
});