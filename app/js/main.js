const $item = document.querySelectorAll('.item');

$item.forEach(item => {
	item.addEventListener('mouseenter', event => {
		event.currentTarget.classList.add('hover');
		console.log('currentTarget', event.currentTarget.className);
	});
	item.addEventListener('mouseleave', event => {
		event.currentTarget.classList.remove('hover');
		console.log('currentTarget', event.currentTarget.className);
	});

});
