'use strick';

import Swiper, {Pagination} from 'swiper';
Swiper.use([Pagination]);
import '../../node_modules/swiper/swiper.scss';
import '../../node_modules/swiper/modules/pagination/pagination.scss';

import '../scss/style.scss';

import {ButtonShowMore} from './ButtonShowMore';
import {DropDownBlock} from './DropDownBlock';

let swiper;
let isInit = false;
let pag = document.querySelectorAll('.swiper-pagination');

let brandSwiperButton = new ButtonShowMore('.brand-swiper__wrapper', '.page-content__button-showmore--brand',
    '.page-content__button-showmore-text--brand', '.brand-swiper');
let technicsSwiperButton = new ButtonShowMore('.technics-swiper__wrapper', '.page-content__button-showmore--technics',
    '.page-content__button-showmore-text--technics', '.technics-swiper');
let infoButton = new ButtonShowMore('.info-block__text', '.page-content__button-showmore--info',
    '.page-content__button-showmore-text--info', '.info-block__text', 'Читать далее');

function swiperMode() {
    let mobile = window.matchMedia('(max-width: 767.5px)');
    if(mobile.matches) {
        if (!isInit) {
            isInit = true;
            swiper = new Swiper('.swiper', {
                loop: true,
                loopedSlides: 3,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                slidesPerView: "auto",
                speed: 700,
            });
            pag.forEach(pagination => pagination.classList.remove('display-none'));
        }
    }
    else {
        if(isInit) {
            swiper.forEach(swiper => swiper.destroy(true, true));
            isInit = false;
            pag.forEach(pagination => pagination.classList.add('display-none'));
        }
    }
}

window.addEventListener('load', function() {
    swiperMode();
    brandSwiperButton.showButton();
    technicsSwiperButton.showButton();
    infoButton.showButton();
});

window.addEventListener('resize', function() {
    swiperMode();

    if(brandSwiperButton.parameters.isActiveButton) {
        brandSwiperButton.button.click();
    }
    brandSwiperButton.showButton();

    if(technicsSwiperButton.parameters.isActiveButton) {
        technicsSwiperButton.button.click();
    }
    technicsSwiperButton.showButton();

    if(infoButton.parameters.isActiveButton) {
        infoButton.button.click();
    }
    infoButton.showButton();
});

let backgroundBlur = document.querySelector('.background-blur');

let menuButton = new DropDownBlock('.header__button--menu', '.vertical-menu__button--close-menu',
    '.vertical-menu', 'vertical-menu--animation', backgroundBlur);
menuButton.addListener();

let backgroundBlurZIndex = document.querySelector('.background-blur--more-z-index');
let callButtons = ['.header__button--call', '.vertical-menu__button--call'];
let feedBackButtons = ['.vertical-menu__button--feedback', '.header__button--feedback'];

callButtons.forEach((callButton) => {
    let button = new DropDownBlock(callButton, '.modal__close-button--call',
        '.modal--call', 'modal--animation', backgroundBlurZIndex, true);
    button.addListener();
});

feedBackButtons.forEach((feedBackButton) => {
    let button = new DropDownBlock(feedBackButton, '.modal__close-button--feedback',
        '.modal--feedback', 'modal--animation', backgroundBlurZIndex, true);
    button.addListener();
});

