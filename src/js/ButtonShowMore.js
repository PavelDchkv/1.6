'use strick';

import {isOverflowed, buttonListener} from "./functions";

export class ButtonShowMore {
    constructor(blockSelector, buttonSelector, textSelector, swiperSelector, text='Показать все') {
        this.block = document.querySelector(blockSelector);
        this.button = document.querySelector(buttonSelector);
        this.text = this.button.querySelector(textSelector);
        this.swiperSelector = swiperSelector;
        this.lastListener = undefined;

        this.parameters = {
            isActiveButton: false,
            text: text,
        }
    }

    showButton() {
        this.button.removeEventListener('click', this.lastListener);
        this.lastListener = buttonListener.bind(undefined, this);

        let ourSwiper = document.querySelector(this.swiperSelector);
        if (!isOverflowed(ourSwiper) && (!this.parameters.isActiveButton)) {
            this.button.style.display = 'none';
        } else {
            this.button.style.display = 'block';
            this.button.addEventListener('click', this.lastListener);
        }
    }
}
