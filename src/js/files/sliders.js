/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}

// Инициализация слайдеров
// function initSliders() {
	bildSliders();
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	// if (document.querySelector('.catalogbu__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		// const bu = new Swiper('.catalogbu__slider', { // Указываем скласс нужного слайдера
		// 	// Подключаем модули слайдера
		// 	// для конкретного случая
		// 	modules: [Pagination],
		// 	observer: true,
		// 	observeParents: true,
		// 	slidesPerView: 1,
		// 	spaceBetween: 0,
		// 	autoHeight: true,
		// 	speed: 800,

		// 	//touchRatio: 0,
		// 	//simulateTouch: false,
		// 	//loop: true,
		// 	//preloadImages: false,
		// 	//lazy: true,

		// 	/*
		// 	// Эффекты
		// 	effect: 'fade',
		// 	autoplay: {
		// 		delay: 3000,
		// 		disableOnInteraction: false,
		// 	},
		// 	*/

		// 	// Пагинация
			
		// 	pagination: {
		// 		el: '.catalogbu__dotts',
		// 		clickable: true,
		// 		type:'bullets'
		// 	},
			

		// 	// Скроллбар
		// 	/*
		// 	scrollbar: {
		// 		el: '.swiper-scrollbar',
		// 		draggable: true,
		// 	},
		// 	*/

		// 	// Кнопки "влево/вправо"
		// 	/*navigation: {
		// 		prevEl: '.swiper-button-prev',
		// 		nextEl: '.swiper-button-next',
		// 	},*/

		// 	// Брейкпоинты
			
		// 	breakpoints: {
		// 		375: {
		// 			slidesPerView: 1,
		// 			spaceBetween: 0,
		// 			autoHeight: true,
		// 		},
			
		// 		992: {
		// 			slidesPerView: 2,
		// 			spaceBetween: 20,
		// 		},
		// 		1268: {
		// 			slidesPerView: 4,
		// 			spaceBetween: 30,
		// 		},
		// 	},
		// 	// События
		// 	on: {

		// 	}
		// });
		
	// Запуск инициализации слайдеров
	// window.addEventListener('resize', function () {
	// 	if (window.innerWidth>991.98) {
	// 				console.log(1)
	// 				bu.destroy();
	// 				console.log(2)
	// 			} else {
	// 				console.log(4);
	// 				bu.init();
	// 				console.log(5);
	// 			}
	// })
	let init = false;
	let swiper = null;

	function initSwiper() {
		 swiper = new Swiper('.catalogbu__slider', {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			
			pagination: {
				el: '.catalogbu__dotts',
				clickable: true,
				type:'bullets'
			},
		 });
	}

	function destroySwiper() {
		 if (swiper) {
			  swiper.destroy(); // Pass true for both deleteInstance and cleanStyles
			  swiper = null;
		 }
	}

	function swiperCard() {
		console.log('1');
		
		 if (window.innerWidth <= 991.98) {
			  if (!init) {
					init = true;
					initSwiper();
			  }
		 } else if (init) {
			  destroySwiper();
			  init = false;
		 }
	}

	swiperCard();
	window.addEventListener('resize', swiperCard);
	// window.onresize = function(){
		
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
	// };
	// }
// }

// function initSlidersTwo() {
// 		bildSliders();
// 		// Перечень слайдеров
// 		// Проверяем, есть ли слайдер на стронице
// 		if (document.querySelector('.main-product__thumbs')) {
// 			const thumbsSwiper = new Swiper('.main-product__thumbs', { // Указываем скласс нужного слайдера
// 				// Подключаем модули слайдера
// 				// для конкретного случая
// 				modules: [Thumbs, Navigation],
// 				observer: true,
// 				//observeParents: true,
// 				slidesPerView: 0,
// 				spaceBetween: 0,
// 				autoHeight: false,
// 				speed: 400,
// 				watchOverflow: true,
// 				//touchRatio: 0,
// 				//simulateTouch: false,
// 				//loop: true,
// 				//loopAdditionalSlides: 1,
// 				//preloadImages: false,
// 				//lazy: true,
	
// 				/*
// 				// Эффекты
// 				effect: 'fade',
// 				autoplay: {
// 					delay: 3000,
// 					disableOnInteraction: false,
// 				},
// 				*/
	
// 				// Пагинация
				
// 				/*pagination: {
// 					el: '.catalogbu__dotts',
// 					clickable: true,
// 					type:'bullets'
// 				},*/
				
	
// 				// Скроллбар
// 				/*
// 				scrollbar: {
// 					el: '.swiper-scrollbar',
// 					draggable: true,
// 				},
// 				*/
	
// 				// Кнопки "влево/вправо"
// 				navigation: {
// 					prevEl: '.thumbs__prev',
// 					nextEl: '.thumbs__next',
// 				},
	
// 				// Брейкпоинты
				
// 				breakpoints: {
// 					375: {
// 						slidesPerView: 4,
// 						spaceBetween: 9.47,
// 						autoHeight: true,
// 					},
				
// 					992: {
// 						slidesPerView: 5,
// 						spaceBetween: 20,
// 					},
// 					1268: {
// 						slidesPerView: 5,
// 						spaceBetween: 20,
// 					},
// 				},
// 				// События
// 				on: {
// 					init: console.log(2)
// 				}
// 			});
// 			new Swiper('.main-product__slider', { // Указываем скласс нужного слайдера
// 				// Подключаем модули слайдера
// 				// для конкретного случая
// 				modules: [Thumbs, Navigation],
// 				observer: true,
// 				observeParents: true,
// 				slidesPerView: 1,
// 				spaceBetween: 0,
// 				autoHeight: false,
// 				speed: 400,
// 				watchOverflow:true,
// 				//touchRatio: 0,
// 				//simulateTouch: false,
// 				//loop: true,
// 				//preloadImages: false,
// 				//lazy: true,
	
// 				/*
// 				// Эффекты
// 				effect: 'fade',
// 				autoplay: {
// 					delay: 3000,
// 					disableOnInteraction: false,
// 				},
// 				*/
	
// 				// Пагинация
				
// 				/*pagination: {
// 					el: '.catalogbu__dotts',
// 					clickable: true,
// 					type:'bullets'
// 				},*/
				
	
// 				// Скроллбар
// 				/*
// 				scrollbar: {
// 					el: '.swiper-scrollbar',
// 					draggable: true,
// 				},
// 				*/
	
// 				// Кнопки "влево/вправо"
// 				/*navigation: {
// 					prevEl: '.thumbs__prev',
// 					nextEl: '.thumbs__next',
// 				},*/
// 				thumbs: {
// 					swiper: thumbsSwiper
// 				},
// 				// Брейкпоинты
				
// 				breakpoints: {
// 					/*375: {
// 						slidesPerView: 1,
// 						spaceBetween: 0,
// 						autoHeight: true,
// 					},
				
// 					992: {
// 						slidesPerView: 2,
// 						spaceBetween: 20,
// 					},*/
// 					/*1268: {
// 						slidesPerView: 1,
// 						spaceBetween: 0,
// 					},*/
// 				},
// 				// События
// 				on: {
// 					init: console.log(5)
// 				}
// 			});
// 		}
// 	}

// window.onload = function(e){
// 	window.onresize = function (){
// 		console.log('123');
// 		if (window.innerWidth<991.98) {
// 			document.querySelector('.catalogbu__slider').classList.add('ddd');
// 		} else document.querySelector('.catalogbu__slider').classList.remove('ddd');
		
// 	}
// 	//if(window.innerWidth<991.98 && document.querySelector('.catalogbu__slider')){
// 		//document.querySelector('.catalogbu__slider').classList.add('ddd');
// 		//initSliders();
// 		//console.log(e);
		
// 	// } else initSlidersTwo();
// 	if(window.innerWidth>991.98 && document.querySelector('.catalogbu__slider')){
// 		document.querySelector('.catalogbu__slider').classList.remove('ddd')
// 	}

	
	
// 	// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
// 	function initSlidersScroll() {
// 		let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
// 		if (sliderScrollItems.length > 0) {
// 			for (let index = 0; index < sliderScrollItems.length; index++) {
// 				const sliderScrollItem = sliderScrollItems[index];
// 				const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
// 				const sliderScroll = new Swiper(sliderScrollItem, {
// 					observer: true,
// 					observeParents: true,
// 					direction: 'vertical',
// 					slidesPerView: 'auto',
// 					freeMode: {
// 						enabled: true,
// 					},
// 					scrollbar: {
// 						el: sliderScrollBar,
// 						draggable: true,
// 						snapOnRelease: false
// 					},
// 					mousewheel: {
// 						releaseOnEdges: true,
// 					},
// 				});
// 				sliderScroll.scrollbar.updateSize();
// 			}
// 		}
// 	}
// }



