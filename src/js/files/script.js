// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import {cardsData} from "./data.js"
const buttonHeader = document.querySelector('.header__event');
const actionsHeader =document.querySelector('.event__text ')
const arrow = document.querySelectorAll('.menu__link-button')
const filter = document.querySelector('.filter__switch')
const meh = filter.querySelectorAll('p');

document.addEventListener("click", documentactions);

function documentactions(e) {
	const targetElement = e.target;
	//console.log(targetElement);
	const table = `
				<div class="filter__table">
					<div class="filter__content">
						<div class="filter__options">${targetElement.innerHTML}</div>
						<div class="filter__close">X</div>
					</div>
				</div>`;
	
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
	};

	if(targetElement.closest('._open')){
		arrow.forEach(element => {
			element.classList.add('openarrow')
			element.classList.remove('hidden')
		});
	};

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

	const selectOneLabel = document.querySelector('[data-id="1"] option').innerHTML;
	const selectTwoLabel = document.querySelector('[data-id="2"] option').innerHTML;
	const selectThreeLabel = document.querySelector('[data-id="3"] option').innerHTML;
	const selectFourLabel = document.querySelector('[data-id="4"] option').innerHTML;

	const clearFilter = document.querySelector('.filter__button');

	if (document.body.offsetWidth>768) {
		if (targetElement.closest('.select__options') && !filterOne) {
			if (targetElement.closest('[data-id="1"]')) {
				document.querySelector('[data-id="1"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
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
			selectOne.querySelector('.filter__tablet').remove();
			document.querySelector('[data-id="1"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`);
			}
		}
	
		if (targetElement.closest('[data-id="2"]')) {
			if (targetElement.closest('.select__options') && targetElement.innerHTML !== selectTwo.querySelector('.filter__options').innerHTML) {
				selectTwo.querySelector('.filter__tablet').remove();
				document.querySelector('[data-id="2"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`);
				}
		}
	
		if (targetElement.closest('[data-id="3"]')) {
			if (targetElement.closest('.select__options') && targetElement.innerHTML !== selectThree.querySelector('.filter__options').innerHTML) {
			selectThree.querySelector('.filter__tablet').remove();
			document.querySelector('[data-id="3"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`);
			}
		}
	
		if (targetElement.closest('[data-id="4"]')) {
			if (targetElement.closest('.select__options') && targetElement.innerHTML !== selectFour.querySelector('.filter__options').innerHTML) {
				selectFour.querySelector('.filter__tablet').remove();
				document.querySelector('[data-id="4"]').insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`);
				}
		}
	}

	if(targetElement.closest('.filter__button')){
		const clearFull = document.querySelectorAll('.filter__tablet');
		const filterLabel = document.querySelectorAll('.form');
		for (let i = 0; i < clearFull.length; i++) {
			clearFull[i].remove();
		}
		
		for (let i = 0; i < filterLabel.length; i++) {
			const qwe = document.querySelectorAll('.select__content')
				//console.log(filterLabel[i].dataset.placeholder);
				
				qwe[i].innerHTML = filterLabel[i].dataset.placeholder;

			}
	}

	if (targetElement.closest('.filter__close')) {
		if (targetElement.closest('[data-id="1"]')) {
			document.querySelector('[data-id="1"] .select__content').innerHTML = selectOneLabel;
			selectOne.querySelector('.filter__tablet').remove()
			results.innerHTML = generateCard(cardsData).join('')
			}
		if (targetElement.closest('[data-id="2"]')) {
			document.querySelector('[data-id="2"] .select__content').innerHTML = selectTwoLabel;
			selectTwo.querySelector('.filter__tablet').remove()
			results.innerHTML = generateCard(cardsData).join('')
		}
		if (targetElement.closest('[data-id="3"]')) {
			document.querySelector('[data-id="3"] .select__content').innerHTML = selectThreeLabel;
			selectThree.querySelector('.filter__tablet').remove()
		}
		if (targetElement.closest('[data-id="4"]')) {
			document.querySelector('[data-id="4"] .select__content').innerHTML = selectFourLabel;
			selectFour.querySelector('.filter__tablet').remove()
		}
	}
}

//Поиск и сортировка в каталоге

const results = document.getElementById('results')

//Генерация карточек
function generateCard(data){
	const cards= []
	for (let i = 0; i < data.length; i++) {
		cards.push(`
			<article class="catalogbu__item item-catalogbu">
				<div class="item-catalogbu__labels">
					<div class="item-catalogbu__label label">VIN-номера проверены</div>
					<div class="item-catalogbu__label label">VIN-номера проверены</div>
				</div>
				<a href="#" class="item-catalogbu__image -ibg">
					<img  src="img/main/catalogbu/00${data[i].id}.jpg" alt="">
				</a>
				<div class="item-catalogbu__body">
					<div class="item-catalogbu__subtitle">${data[i].condition}</div>
					<div class="item-catalogbu__title">${data[i].title}</div>
					<div class="item-catalogbu__year">Год выпуска <span class="item-catalogbu__numberyear">${data[i].year}</span></div>
					<div class="item-catalogbu__detail detail">
						<div class="detail__content">
							<div class="detail__text">Варианты покупки</div>
							<div class="detail__year">${data[i].options}</div>
						</div>
						<div class="detail__content">
							<div class="detail__text">Коробка передач</div>
							<div class="detail__year">${data[i].transmission}</div>
						</div>
						<div class="detail__content">
							<div class="detail__text">Наличные</div>
							<div class="detail__year">1100 руб/сутки</div>
						</div>
					</div>
					<div class="item-catalogbu__button button">Полные характеристики</div>
				</div>
			</article>
		`)
	}
	return cards
}

results.innerHTML = generateCard(cardsData).join('')

//Зелёный цвет для состояния "Новое"

const newGreen = document.querySelectorAll('.item-catalogbu__subtitle')

for (let i = 0; i < newGreen.length; i++) {
	const element = newGreen[i].innerHTML;
	if (element==="Новое") {
		newGreen[i].classList.add('_green');
	}
}

//Функционал поиска

const inputSearch = document.querySelector('.search__input')
const searchButton = document.querySelector('.search__button')

let searchValue =''
inputSearch.oninput =(e)=>{
	searchValue = e.target.value;
	//filtersearch()
	}

searchButton.addEventListener('click', filtersearch)
	
function filtersearch(){
	const rgx = new RegExp(searchValue, 'i');
	let filteredCardsData = cardsData.filter(card=>{
		if(rgx.test(card.title)){
			return true
		} else {
			return false
		}
	})
	results.innerHTML = generateCard(filteredCardsData).join('')
}


//Фильтрация

const options = document.querySelector('[data-id="1"]');
const condition = document.querySelector('[data-id="2"]')
const filterType = [
	'options',
	'condition'
]

console.log(filterType);

document.addEventListener('selectCallback', filterSelect)
function filterSelect(e) {
	const value = e.detail.select.value;
	console.log(value);
	const filteredCards = cardsData.filter(card=>{
		const reg = new RegExp(value);
		if(reg.test(card[filterType])){
			return true
		} else {
			return false
		}
	})
	results.innerHTML = generateCard(filteredCards).join('')
}

filterType.forEach(type=>filterSelect(type))
/*document.addEventListener('selectCallback', zxc)
function zxc(e) {
	const value = e.detail.select.value;
	console.log(value);
	const filteredCards = cardsData.filter(card=>{
		const reg = new RegExp(value);
		if(reg.test(card.condition)){
			return true
		} else {
			return false
		}
	})
	results.innerHTML = generateCard(filteredCards).join('')
}*/

