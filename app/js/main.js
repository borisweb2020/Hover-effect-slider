const $item = document.querySelectorAll('.item');

$item.forEach(item => {
	item.addEventListener('mouseenter', event => {
		let element = event.currentTarget;
		toggleHoverClass(element, 'add');

		element.addEventListener('mouseleave', () => {
			toggleHoverClass(element, 'remove');
		});
	});

	item.addEventListener('click', () => {
		item.classList.toggle('active');
	});
});

function toggleHoverClass(el, mode){
	el.classList[mode]('hover');
	let nextElement = el.nextElementSibling;
	let previousElement = el.previousElementSibling;
	for(let i = 1; i < 5; i++){
		if(nextElement){
			nextElement.classList[mode](`hover-${i}`);
			nextElement = nextElement.nextElementSibling;
		}
		if(previousElement){
			previousElement.classList[mode](`pre-${i}hover`);
			previousElement = previousElement.previousElementSibling;
		}
	}
}