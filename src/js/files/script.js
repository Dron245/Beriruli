// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const buttonHeader = document.querySelector('.header__event');
const actionsHeader =document.querySelector('.event__text ')


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
}