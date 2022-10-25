// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import { cardsData } from "./data.js"
const buttonHeader = document.querySelector('.header__event');
const actionsHeader = document.querySelector('.event__text ')
const arrow = document.querySelectorAll('.menu__link-button')
const filter = document.querySelector('.filter__switch')
const meh = filter.querySelectorAll('p');

const selectOne = document.querySelector('[data-id="1"]');
const selectTwo = document.querySelector('[data-id="2"]');
const selectThree = document.querySelector('[data-id="3"]');
const selectFour = document.querySelector('[data-id="4"]');

const selectOneLabel = document.querySelector('[data-id="1"] option').innerHTML;
const selectTwoLabel = document.querySelector('[data-id="2"] option').innerHTML;
const selectThreeLabel = document.querySelector('[data-id="3"] option').innerHTML;
const selectFourLabel = document.querySelector('[data-id="4"] option').innerHTML;

document.addEventListener("click", documentactions);

function documentactions(e) {
	const targetElement = e.target;
	//макет карточки
	const table = `
				<div class="filter__table">
					<div class="filter__content">
						<div class="filter__options">${targetElement.innerHTML}</div>
						<div class="filter__close">X</div>
					</div>
				</div>`;

	{if (targetElement.closest('.event__close')) {
		buttonHeader.style.height = 0;
		actionsHeader.style = "display:none";
	}
	if (isMobile.any()) {
		if (targetElement.classList.contains('menu__link-button')) {
			targetElement.closest('.menu__item').classList.toggle('_hover')
		}
	}

	if (targetElement.closest('._close')) {
		arrow.forEach(element => {
			element.classList.add('hidden')
			element.classList.remove('openarrow')
		});
	};

	if (targetElement.closest('._open')) {
		arrow.forEach(element => {
			element.classList.add('openarrow')
			element.classList.remove('hidden')
		});
	};

	if (targetElement.closest('.checkbox')) {
		meh.forEach(element => {
			element.classList.toggle('active')
		});
	};}

	
	if (document.body.offsetWidth > 768) {
		//Создаём карточку под селектом
		if (targetElement.closest('.select__options')) {
			//console.log(filterOne);
			if (targetElement.closest('[data-id="1"]') && !selectOne.querySelector('.filter__tablet')) {
				selectOne.insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
			}
		}
		if (targetElement.closest('.select__options')) {
			if (targetElement.closest('[data-id="2"]') && !selectTwo.querySelector('.filter__tablet')) {
				selectTwo.insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
			}
		}
		if (targetElement.closest('.select__options')) {
			if (targetElement.closest('[data-id="3"]') && !selectThree.querySelector('.filter__tablet')) {
				selectThree.insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
			}
		}
		if (targetElement.closest('.select__options')) {
			if (targetElement.closest('[data-id="4"]') && !selectFour.querySelector('.filter__tablet')) {
				selectFour.insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`)
			}
		}

		//Заменяем название фильтра в карточке и в плэйсхолдере селекта
		if (targetElement.closest('[data-id="1"]')) {
			if (targetElement.closest('.select__options') && targetElement.innerHTML !== selectOne.querySelector('.filter__options').innerHTML) {
				selectOne.querySelector('.filter__tablet').remove();
				selectOne.insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`);
			}
		}

		if (targetElement.closest('[data-id="2"]')) {
			if (targetElement.closest('.select__options') && targetElement.innerHTML !== selectTwo.querySelector('.filter__options').innerHTML) {
				selectTwo.querySelector('.filter__tablet').remove();
				selectTwo.insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`);
			}
		}

		if (targetElement.closest('[data-id="3"]')) {
			if (targetElement.closest('.select__options') && targetElement.innerHTML !== selectThree.querySelector('.filter__options').innerHTML) {
				selectThree.querySelector('.filter__tablet').remove();
				selectThree.insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`);
			}
		}

		if (targetElement.closest('[data-id="4"]')) {
			if (targetElement.closest('.select__options') && targetElement.innerHTML !== selectFour.querySelector('.filter__options').innerHTML) {
				selectFour.querySelector('.filter__tablet').remove();
				selectFour.insertAdjacentHTML('beforeend', `<div class="filter__tablet">${table}</div>`);
			}
		}
	}

	//Удаляем все фильтры, если нажали "Очистить фильтр"
	if (targetElement.closest('.filter__button')) {
		const clearFull = document.querySelectorAll('.filter__tablet');
		const filterLabel = document.querySelectorAll('.form');
		for (let i = 0; i < clearFull.length; i++) {
			clearFull[i].remove();
		}

		for (let i = 0; i < filterLabel.length; i++) {
			const qwe = document.querySelectorAll('.select__content')
			qwe[i].innerHTML = filterLabel[i].dataset.placeholder;
		}
		results.innerHTML = generateCard(cardsData).join('')
	}

	//Удаляем карточку под селектом, если нажали крестик
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
			results.innerHTML = generateCard(cardsData).join('')
		}
		if (targetElement.closest('[data-id="4"]')) {
			document.querySelector('[data-id="4"] .select__content').innerHTML = selectFourLabel;
			selectFour.querySelector('.filter__tablet').remove()
			results.innerHTML = generateCard(cardsData).join('')
		}
	}
}

//Поиск и сортировка в каталоге

const results = document.getElementById('results')

//Генерация карточек
function generateCard(data) {
	const cards = []
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
	if (element === "Новое") {
		newGreen[i].classList.add('_green');
	}
}

//Функционал поиска

const inputSearch = document.querySelector('.search__input')
const searchButton = document.querySelector('.search__button')

let searchValue = ''
inputSearch.oninput = (e) => {
	searchValue = e.target.value;
	//живой поиск
	//filtersearch()
}

searchButton.addEventListener('click', filtersearch)

function filtersearch() {
	const rgx = new RegExp(searchValue, 'i');
	let filteredCardsData = cardsData.filter(card => {
		if (rgx.test(card.title)) {
			return true
		} else {
			return false
		}
	})
	results.innerHTML = generateCard(filteredCardsData).join('')
}
//Фильтрация

const filtersType = [
	'options',
	'condition',
	'year',
	'transmission'	
]

const filters ={
	q : document.querySelector('[data-id="1"]'),
	w : document.querySelector('[data-id="2"]'),
	e : document.querySelector('[data-id="3"]'),
	r : document.querySelector('[data-id="4"]'),
}

//селект 1
//document.querySelector('.filter__body').addEventListener('click', filterSelect)
//function filterSelect(filterType) {

	//for (const qwee in filters){
		//filters[qwee].onchange = () => {
			//console.log(filters[qwee]);
			document.addEventListener('selectCallback', filterOptions)
			function filterOptions(e) {
				const value = e.detail.select.value;
				const filteredCards = cardsData.filter(card => {
				const reg = new RegExp(value);
					if (reg.test(card.options)) {
						return true
					} else {
						return false
					}
				})
				results.innerHTML = generateCard(filteredCards).join('')
			}
	//}
	//}
//}
//filtersType.forEach(type=>filterSelect(type))


//селект 2
selectTwo.addEventListener('click', asd)
function asd(e) {
	if (e.target.closest('[data-id="2"]')) {

		document.addEventListener('selectCallback', filterCondition)
		function filterCondition(e) {
			const value = e.detail.select.value;
			const filteredCards = cardsData.filter(card => {
				const reg = new RegExp(value);
				if (reg.test(card.condition)) {
					return true
				} else {
					return false
				}
			})
			results.innerHTML = generateCard(filteredCards).join('')
		}
	}
}

//селект 3
selectThree.addEventListener('click', dfg)
function dfg(e){
	if(e.target.closest('[data-id="3"]')){
		document.addEventListener('selectCallback', iop)
		function iop(e){
			const value = e.detail.select.value;
			const vbn = cardsData.filter(card => {
				if ((card.year) >= value ) {
					return true
				} else {
					return false
				}
			})
			results.innerHTML = generateCard(vbn).join('')
		}
	}
}

//селект 4
selectFour.addEventListener('click', fgh)
function fgh(e){
	if(e.target.closest('[data-id="4"]')){
		document.addEventListener('selectCallback', op)
		function op(e){
			const value = e.detail.select.value;
			const bnm = cardsData.filter(card => {
				if ((card.year) <= value ) {
					return true
				} else {
					return false
				}
			})
			results.innerHTML = generateCard(bnm).join('')
		}
	}
}

//Чекбокс-переключатель
let checkActive = ''
const label = document.querySelector('label')

label.addEventListener('click', check)

function check() {
	setTimeout(function () {
		checkActive = document.querySelector('#transmission > .active')
		const rgx = new RegExp(checkActive.innerHTML);
		let checks = cardsData.filter(card => {
			if (rgx.test(card.transmission)) {
				return true
			} else {
				return false
			}
		})
		results.innerHTML = generateCard(checks).join('')
	}, 10
	)
}




/*function checkOtherfilter(filtersType, filteredCards){
	let update = filteredCards

	filtersType.forEach(type =>{
		const value = ''
	})
}*/

document.querySelectorAll('.selectq').forEach(select => { //Выбриаем все выпадающие списки на странице

	let selectCurrent = select.querySelector('.selectq__current'),
			selectList = select.querySelector('.selectq__list'),
			selectInput = select.querySelector('.selectq__input'),
			selectItem = select.querySelectorAll('.selectq__item');
	console.log(selectCurrent);
	//по клику добавляем/удалям класс
	selectCurrent.addEventListener('click', qqq)

	function qqq(){
		selectList.classList.toggle('selectq__list_show')
	}
		
	

	//обходим элементы списка
	selectItem.forEach(item =>{
	
		//обрабатываем событие клик по элементу
		item.addEventListener('click', ()=>{
			
			//получаем значение из data-атрибута
			let itemValue = item.getAttribute('data-value') 
			
			//получаем содержание элемента (текст)
			let itemText = item.textContent
			
			//присваиваем инпуту ранее полученное значение из data-атрибута
			selectInput.value = itemValue 
			
			//присваиваем текущее значение (текст)
			selectCurrent.textContent = itemText 
			
			//скрываем выпадающий список
			selectListHide() 
		})
	})
	
	// функция закрытия выпадающего списка
	let selectListHide = () => {
		selectList.classList.remove('selectq__list_show')
	}
	//Закрываем выпадающий сисок, если клик был вне области
	document.addEventListener('mouseup', (e) =>{
    if (!select.contains(e.target))	selectListHide()
  })
	selectCurrent.addEventListener('DOMSubtreeModified', qwww)
	function qwww(e){
		console.log('selectCurrent');
		console.log(e.target.innerHTML);
	}
})