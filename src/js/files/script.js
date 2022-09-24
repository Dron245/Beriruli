// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const buttonHeader = document.querySelector('.header__event');
const actionsHeader =document.querySelector('.event__text ')
const arrow = document.querySelectorAll('.menu__link-button')
const filter = document.querySelector('.filter__switch')
const meh = filter.querySelectorAll('p');
//const auto = document.querySelector('.filter__auto');
document.addEventListener("click", documentactions);

function documentactions(e) {
	const targetElement = e.target;
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
	
	}
}
