// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import { cardsData } from "./data.js"
if(document.querySelector('.catalogjs')){
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

		{
			if (targetElement.closest('.event__close')) {
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
			};
		}


		if (document.body.offsetWidth > 768) {
			//Создаём карточку под селектом (что выбрали в селекте)
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
		//console.log(cards);
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





	//селект 1
	//document.querySelector('.filter__body').addEventListener('click', filterSelect)
	//function filterSelect(filterstype) {
	selectOne.addEventListener('click', a)
	function a(e) {
		if (e.target.closest('[data-id="1"]')) {
			//for (const qwee in filters){
			//filters[qwee].onchange = () => {
			//console.log(filters[qwee]);
			document.addEventListener('selectCallback', aaa)
			function aaa(e) {
				const value = e.detail.select.value;
				console.log(value);
				const filteredCards = cardsData.filter(card => {
					const reg = new RegExp(value);
					console.log(reg);
					if (reg.test(card.options)) {
						return true
					} else {
						return false
					}
				})
				console.log(filteredCards);
				results.innerHTML = generateCard(filteredCards).join('')

			}
		}
	}
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
	function dfg(e) {
		if (e.target.closest('[data-id="3"]')) {
			document.addEventListener('selectCallback', iop)
			function iop(e) {
				const value = e.detail.select.value;
				const vbn = cardsData.filter(card => {
					if ((card.year) >= value) {
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
	function fgh(e) {
		if (e.target.closest('[data-id="4"]')) {
			document.addEventListener('selectCallback', op)
			function op(e) {
				const value = e.detail.select.value;
				const bnm = cardsData.filter(card => {
					if ((card.year) <= value) {
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

	/*document.querySelectorAll('.selectq').forEach(select => { //Выбриаем все выпадающие списки на странице

		let selectCurrent = select.querySelector('.selectq__current'),
			selectList = select.querySelector('.selectq__list'),
			selectInput = select.querySelector('.selectq__input'),
			selectItem = select.querySelectorAll('.selectq__item');
		//console.log(selectCurrent);
		//по клику добавляем/удалям класс
		selectCurrent.addEventListener('click', qqq)

		function qqq() {
			selectList.classList.toggle('selectq__list_show')
		}



		//обходим элементы списка
		selectItem.forEach(item => {

			//обрабатываем событие клик по элементу
			item.addEventListener('click', () => {

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
		document.addEventListener('mouseup', (e) => {
			if (!select.contains(e.target)) selectListHide()
		})

	
	})
	//
	const filters = {
		options: document.querySelector('#options'),
		condition: document.querySelector('#condition'),
		//e : document.querySelector('[data-id="3"]'),
		//r : document.querySelector('[data-id="4"]'),
	}
	//console.log(filters);
	const filterstype = [
		'options',
		'condition',
		//'year',
		//'transmission'
	]

	function filterselect(filtertype) {
		filters[filtertype].addEventListener('DOMSubtreeModified', (e) => {
			//console.log(filters[filterstype]);
			const value = e.target.dataset.value
			console.log(value);
			const filteredCards = cardsData.filter(card => {
				const reg = new RegExp(value);
				//console.log(card[filtertype]);
				if (reg.test(card[filtertype])) {
					return true
				} else {
					return false
				}
			})
			const fullFilteredCards = checkOtherFilters(filterstype, filteredCards)
			const filteredCardsHtml = generateCard(fullFilteredCards)
			//console.log(filteredCards);
			results.innerHTML = filteredCardsHtml.join('')
		})
	}
	filterstype.forEach(type => filterselect(type))

	function checkOtherFilters(filterstype, filteredCards) {
		let updatedFilteredCards = filteredCards
		filterstype.forEach(type=>{
			const value = filters[type].querySelector('.selectq__input').value
			console.log(value);
			const reg = new RegExp(value);
			const newFilteredCards = updatedFilteredCards.filter(card => {
				//console.log(reg);
				//console.log(card[type]);
				if (reg.test(card[type])) {
					return true
				} else {
					return false
				}
				
			})
			//console.log(updatedFilteredCards);
			updatedFilteredCards = newFilteredCards
		})
		return updatedFilteredCards
	}*/
}


if (window.jQuery) {
	// jQuery подключен к странице
	$('body').css('background-color', '#e2e2e2');
 }


// external js: isotope.pkgd.js

// store filter for each group
var buttonFilters = {};
var buttonFilter;
// quick search regex
var qsRegex;

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.color-shape',
  filter: function() {
    var $this = $(this);
    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
    return searchResult && buttonResult;
  },
});

$('.filters').on( 'click', '.button', function() {
  var $this = $(this);
  // get group key
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  buttonFilters[ filterGroup ] = $this.attr('data-filter');
  // combine filters
  buttonFilter = concatValues( buttonFilters );
  // Isotope arrange
  $grid.isotope();
});

// use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}) );

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}




