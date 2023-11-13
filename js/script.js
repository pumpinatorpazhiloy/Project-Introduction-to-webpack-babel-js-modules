require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs  from './modules/tabs';
import modal, { openModal }  from './modules/modal';
import timer  from './modules/timer';
import cards  from './modules/cards';
import calculator  from './modules/calculator';
import form  from './modules/form';
import slider  from './modules/slider';

window.addEventListener('DOMContentLoaded', function() {	
		const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

			tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
			modal('[data-modal]', '.modal', modalTimerId);
			timer('.timer', '2023-11-26');
			cards();
			calculator();
			form('form', modalTimerId);
			slider({
				container: '.offer__slider',
				nextArrow: '.offer__slider-next',
				slide: '.offer__slide',
				prevArrow: '.offer__slider-prev',
				totalCounter: '#total',
				currentCounter: '#current',
				wrapper: '.offer__slider-wrapper',
				field: '.offer__slider-inner'
			});
});