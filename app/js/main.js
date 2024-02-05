const $item = document.querySelectorAll('.item');

$item.forEach(item => {
	item.addEventListener('mouseenter', event => {
		let element = event.currentTarget;
		element.classList.add('hover');
		console.log('currentTarget', event.currentTarget.className);
		let nextElement = element.nextElementSibling;
		let previousElement = element.previousElementSibling;
		for(let i = 1; i < 5; i++){
			if(nextElement){
				nextElement.classList.add(`hover${i}`);
				nextElement = nextElement.nextElementSibling;
			}
			if(previousElement){
				previousElement.classList.add(`${i}hover`);
				previousElement = previousElement.previousElementSibling;
			}
		}

		element.addEventListener('mouseleave', () => {
			element.classList.remove('hover');
			let nextElement = element.nextElementSibling;
			let previousElement = element.previousElementSibling;
			for(let i = 1; i < 5; i++){
				if(nextElement){
					nextElement.classList.remove(`hover${i}`);
					nextElement = nextElement.nextElementSibling;
				}
				if(previousElement){
					previousElement.classList.remove(`${i}hover`);
					previousElement = previousElement.previousElementSibling;
				}
			}
			console.clear();
		});

	});



});
