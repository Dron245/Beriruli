// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const buttonHeader = document.querySelector('.header__event');
const actionsHeader =document.querySelector('.event__text ')
const arrow = document.querySelectorAll('.menu__link-button')
const filter = document.querySelector('.filter__switch')
const meh = filter.querySelectorAll('p');

document.addEventListener("click", documentactions);

function documentactions(e) {
	const targetElement = e.target;
	//const target = targetElement.innerHTML;
	//console.log(target);
	const table = `
				<div class="filter__table">
					<div class="filter__content">
						<div class="filter__options">${targetElement.innerHTML}</div>
						<div class="filter__close">X</div>
					</div>
				</div>`;
	//const filterTable = document.querySelectorAll('.filter__table')
	
	if (targetElement.closest('.event__close')){
		buttonHeader.style.height = 0;
		actionsHeader.style = "display:none";
	}
	if (isMobile.any()) {
		if (targetElement.classList.contains('menu__link-button')){
			targetElement.closest('.menu__item').classList.toggle('_hover')
		}
	}
	
	if(targetElement.closest('._close')){
		arrow.forEach(element => {
		element.classList.add('hidden')
		element.classList.remove('openarrow')
	});
	}

	if(targetElement.closest('._open')){
		arrow.forEach(element => {
			element.classList.add('openarrow')
			element.classList.remove('hidden')
		});
	}

	if(targetElement.closest('.checkbox')){
		meh.forEach(element => {
			element.classList.toggle('active')
		});
	};
	
	const filterOne = document.querySelector('[data-id="1"] .filter__table');
	const filterTwo = document.querySelector('[data-id="2"] .filter__table');
	const filterThree = document.querySelector('[data-id="3"] .filter__table');
	const filterFour = document.querySelector('[data-id="4"] .filter__table');

	const selectOne = document.querySelector('[data-id="1"]');
	const selectTwo = document.querySelector('[data-id="2"]');
	const selectThree = document.querySelector('[data-id="3"]');
	const selectFour = document.querySelector('[data-id="4"]');

	//console.log(filterOne);
	/*if (!filterOne) {
		if (targetElement.closest('[data-id="1"]')) {
			document.querySelector('[data-id="1"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
		}
	}
	if (!filterTwo) {
		if (targetElement.closest('[data-id="2"]')) {
			document.querySelector('[data-id="2"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
		}
	}
	if (!filterThree) {
		if (targetElement.closest('[data-id="3"]')) {
			document.querySelector('[data-id="3"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
		}
	}
	if (!filterFour) {
		if (targetElement.closest('[data-id="4"]')) {
			document.querySelector('[data-id="4"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
		}
	}*/

	if (targetElement.closest('.select__options') && !filterOne) {
		if (targetElement.closest('[data-id="1"]')) {
		//	console.log(targetElement.innerHTML);
			document.querySelector('[data-id="1"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
		//	console.log(selectOne.querySelector('.filter__options').innerHTML);
		} 
		
	}
	if (targetElement.closest('.select__options') && !filterTwo) {
		if (targetElement.closest('[data-id="2"]')) {
			document.querySelector('[data-id="2"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
		}
	}
	if (targetElement.closest('.select__options') && !filterThree) {
		if (targetElement.closest('[data-id="3"]')) {
			document.querySelector('[data-id="3"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
		}
	}
	if (targetElement.closest('.select__options')&& !filterFour) {
		if (targetElement.closest('[data-id="4"]')) {
			document.querySelector('[data-id="4"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
		}
	}

	if (targetElement.closest('[data-id="1"]')) {
		if (targetElement.closest('.select__options') && targetElement.innerHTML !== selectOne.querySelector('.filter__options').innerHTML) {
		//console.log("ура!");
		selectOne.querySelector('.filter__tablet').remove();
		document.querySelector('[data-id="1"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`);
		}
	}

	if (targetElement.closest('[data-id="2"]')) {
		if (targetElement.closest('.select__options') && targetElement.innerHTML !== selectTwo.querySelector('.filter__options').innerHTML) {
			//console.log("ура!");
			selectTwo.querySelector('.filter__tablet').remove();
			document.querySelector('[data-id="2"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`);
			}
	}

	if (targetElement.closest('[data-id="3"]')) {
		if (targetElement.closest('.select__options') && targetElement.innerHTML !== selectThree.querySelector('.filter__options').innerHTML) {
		//console.log("ура!");
		selectThree.querySelector('.filter__tablet').remove();
		document.querySelector('[data-id="3"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`);
		}
	}

	if (targetElement.closest('[data-id="4"]')) {
		if (targetElement.closest('.select__options') && targetElement.innerHTML !== selectFour.querySelector('.filter__options').innerHTML) {
			//console.log("ура!");
			selectFour.querySelector('.filter__tablet').remove();
			document.querySelector('[data-id="4"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`);
			}
	}


	if (targetElement.closest('.filter__close')) {
		if (targetElement.closest('[data-id="1"]')) {
		//	console.log(selectOne);
			selectOne.querySelector('.filter__tablet').remove()
		}
		if (targetElement.closest('[data-id="2"]')) {
			selectTwo.querySelector('.filter__tablet').remove()
		}
		if (targetElement.closest('[data-id="3"]')) {
			selectThree.querySelector('.filter__tablet').remove()
		}
		if (targetElement.closest('[data-id="4"]')) {
			selectFour.querySelector('.filter__tablet').remove()
		}
	}

	
}	

