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
	const table = `
				<div class="filter__table">
					<div class="filter__content">
						<div class="filter__options">${targetElement.innerHTML}</div>
						<div class="filter__close">dfgdfg</div>
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
	

	if (targetElement.closest('.select__options')) {
		if (targetElement.closest('[data-id="1"]')) {
			document.querySelector('[data-id="1"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
		}
	}
	if (targetElement.closest('.select__options')) {
		if (targetElement.closest('[data-id="2"]')) {
			document.querySelector('[data-id="2"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
		}
	}
	if (targetElement.closest('.select__options')) {
		if (targetElement.closest('[data-id="3"]')) {
			document.querySelector('[data-id="3"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
		}
	}
	if (targetElement.closest('.select__options')) {
		if (targetElement.closest('[data-id="4"]')) {
			document.querySelector('[data-id="4"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
		}
	}

	const selectOne = document.querySelector('[data-id="1"]');
	const selectTwo = document.querySelector('[data-id="2"]');
	const selectThree = document.querySelector('[data-id="3"]');
	const selectFour = document.querySelector('[data-id="4"]');

	if (targetElement.closest('.filter__close')) {
		if (targetElement.closest('[data-id="1"]')) {
			selectOne.querySelector('.filter__table').remove()
		}
		if (targetElement.closest('[data-id="2"]')) {
			selectTwo.querySelector('.filter__table').remove()
		}
		if (targetElement.closest('[data-id="3"]')) {
			selectThree.querySelector('.filter__table').remove()
		}
		if (targetElement.closest('[data-id="4"]')) {
			selectFour.querySelector('.filter__table').remove()
		}
	}
}

