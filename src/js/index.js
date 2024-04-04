import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from './helpers/countryList';


const autoCompleteJS = new autoComplete({
  selector: '#autoCompleteCountry',
  placeHolder: 'напр. Балі, Індонезія',

  data: {
    src: countryList,
    caches: true,
  },

  resultItem: {
    highlight: true,
  },
  
  events: {
    input: {
        selection: (event) => {
            const selection = event.detail.selection.value;
            autoCompleteJS.input.value = selection;
        }
    }
},
});




import { easepick } from '@easepick/bundle';

const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
  ],
  zIndex: 10,
});








  //ScrollReavear

import ScrollReveal from 'scrollreveal'

ScrollReveal({
  distance: '60px',
  duration: 2000,
});

ScrollReveal().reveal(`.header, .partners, .testimonials, .subscrite`, {
  origin: 'top',
});

ScrollReveal().reveal(`.discover__picture-hint, .popular__top-title, .subscrite-desc, .testimonials-col-1`, {
  origin: 'left',
});

ScrollReveal().reveal(`.discover__picture-img, .discover__desk, .popular-slider, .subscrite__form-btn, .footer`, {
  origin: 'bottom',
});

ScrollReveal().reveal(`.discover__picture-scroll, .popular-controls, .subscrite__form, .testimonials-col-3`, {
  origin: 'right',
});









//SWIPER

import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';


const swiper = new Swiper('#swiper-popular', {
  
	slidesPerView: 4,
	spaceBetween: 32,
  
	navigation: {
	  nextEl: '#sliderNext',
	  prevEl: '#sliderPrev',
	},

	breakpoints: {
		300: {
			slidesPerView: 2,
			spaceBetween: 20,
		},

		425: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 40,
		}
	},
  
  });

const swiperTestimonials1 = new Swiper('#testimonials-col-1', {
	direction: 'vertical',
	slidesPerView: 'auto',
	spaceBetween: 32,
	grabCursor: true,
	a11y: false,
	freeMode: true,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 0.0,
		disableOnInteraction: false,
	},
});

const swiperTestimonials2 = new Swiper('#testimonials-col-2', {
	direction: 'vertical',
	slidesPerView: 'auto',
	spaceBetween: 32,
	grabCursor: true,
	a11y: false,
	freeMode: true,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 0.0,
		disableOnInteraction: false,
	},
});

const swiperTestimonials3 = new Swiper('#testimonials-col-3', {
	direction: 'vertical',
	slidesPerView: 'auto',
	spaceBetween: 32,
	grabCursor: true,
	a11y: false,
	freeMode: true,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 0.0,
		disableOnInteraction: false,
	},
});


const configHorizontal = {
	direction: 'horizontal',
	slidesPerView: 1,
	// slidesPerView: 'auto',
	spaceBetween: 32,
	grabCursor: true,
	a11y: false,
	freeMode: true,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 0.0,
		disableOnInteraction: false,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
	},
};

// Устанавливаем брейкпоинт
const breakpoint = window.matchMedia('(max-width:1023px)');

// Ф-я которая проверяет срабатываение медиа запроса в breakpoint
const breakpointChecker = function () {
	if (breakpoint.matches === true) {
		swiperHorizontal = new Swiper('#testimonials-horizontal-swiper', configHorizontal);
		if (swiper1 !== undefined) swiper1.destroy(true, true);
		if (swiper2 !== undefined) swiper2.destroy(true, true);
		if (swiper3 !== undefined) swiper3.destroy(true, true);
		return;
	} else if (breakpoint.matches === false) {
		swiper1 = new Swiper('#testimonials-col-1', configVertical);
		swiper2 = new Swiper('#testimonials-col-2', configVertical);
		swiper3 = new Swiper('#testimonials-col-3', configVertical);
		if (swiperHorizontal !== undefined) swiperHorizontal.destroy(true, true);
		return;
	}
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();













