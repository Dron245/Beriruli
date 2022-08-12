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
 import "../../scss/libs/swiper.scss";
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
function initSliders() {
	bildSliders();
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.ddd')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.catalogbu__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
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
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/*navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},*/

			// Брейкпоинты
			
			breakpoints: {
				375: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
			
				992: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			// События
			on: {

			}
		});
	}
}
function initSlidersTwo() {
		bildSliders();
		// Перечень слайдеров
		// Проверяем, есть ли слайдер на стронице
		if (document.querySelector('.main-product__thumbs')) {
			const thumbsSwiper = new Swiper('.main-product__thumbs', { // Указываем скласс нужного слайдера
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Thumbs, Navigation],
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
				
				/*pagination: {
					el: '.catalogbu__dotts',
					clickable: true,
					type:'bullets'
				},*/
				
	
				// Скроллбар
				/*
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				*/
	
				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.thumbs__prev',
					nextEl: '.thumbs__next',
				},
	
				// Брейкпоинты
				
				breakpoints: {
					/*375: {
						slidesPerView: 1,
						spaceBetween: 0,
						autoHeight: true,
					},
				
					992: {
						slidesPerView: 2,
						spaceBetween: 20,
					},*/
					268: {
						slidesPerView: 5,
						spaceBetween: 15,
					},
				},
				// События
				on: {
					init: console.log(2)
				}
			});
			new Swiper('.main-product__slider', { // Указываем скласс нужного слайдера
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Thumbs, Navigation],
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
				
				/*pagination: {
					el: '.catalogbu__dotts',
					clickable: true,
					type:'bullets'
				},*/
				
	
				// Скроллбар
				/*
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				*/
	
				// Кнопки "влево/вправо"
				/*navigation: {
					prevEl: '.thumbs__prev',
					nextEl: '.thumbs__next',
				},*/
				thumbs: {
					swiper: thumbsSwiper
				},
				// Брейкпоинты
				
				breakpoints: {
					/*375: {
						slidesPerView: 1,
						spaceBetween: 0,
						autoHeight: true,
					},
				
					992: {
						slidesPerView: 2,
						spaceBetween: 20,
					},*/
					1268: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
				},
				// События
				on: {
					init: console.log(5)
				}
			});
		}
	}

window.onload = function(){
	if(window.innerWidth<991.98 && document.querySelector('.catalogbu__slider')){
		if(document.querySelector('.catalogbu__slider')){
		document.querySelector('.catalogbu__slider').classList.add('ddd');
		initSliders();};
		
	} else initSlidersTwo();
	if(window.innerWidth>991.98 && document.querySelector('.catalogbu__slider')){
		document.querySelector('.catalogbu__slider').classList.remove('ddd')
	}

	
	
	// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
	function initSlidersScroll() {
		let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
		if (sliderScrollItems.length > 0) {
			for (let index = 0; index < sliderScrollItems.length; index++) {
				const sliderScrollItem = sliderScrollItems[index];
				const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
				const sliderScroll = new Swiper(sliderScrollItem, {
					observer: true,
					observeParents: true,
					direction: 'vertical',
					slidesPerView: 'auto',
					freeMode: {
						enabled: true,
					},
					scrollbar: {
						el: sliderScrollBar,
						draggable: true,
						snapOnRelease: false
					},
					mousewheel: {
						releaseOnEdges: true,
					},
				});
				sliderScroll.scrollbar.updateSize();
			}
		}
	}
}



window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});