export class DropDownBlock {
    constructor(openButtonSelector, closeButtonSelector, dropDownBlock, addingClass, backgroundBlur) {
        this.openButton = document.querySelector(openButtonSelector);
        this.closeButton = document.querySelector(closeButtonSelector);
        this.dropDownBlock = document.querySelector(dropDownBlock);
        this.addingClass = addingClass;
        this.backgroundBlur = backgroundBlur;

        this.lastListenerButton = undefined;
        this.lastListenerbackground = undefined;
    }

    buttonCloseListener() {
        this.dropDownBlock.classList.remove(this.addingClass);
        this.backgroundBlur.classList.remove('background-blur--display-block');
        this.backgroundBlur.classList.remove('background-blur--z-index');

        let body = document.querySelector('.body-page');
        body.classList.remove('body-page--overflow-hidden');

        this.closeButton.removeEventListener('click', this.lastListenerButton);
        this.backgroundBlur.removeEventListener('click', this.lastListenerbackground);
    }

    buttonListener() {
        this.backgroundBlur.classList.add('background-blur--display-block');
        this.dropDownBlock.classList.add(this.addingClass)

        let body = document.querySelector('.body-page');
        body.classList.add('body-page--overflow-hidden');

        this.lastListenerButton = this.buttonCloseListener.bind(this);
        this.lastListenerbackground = this.buttonCloseListener.bind(this);
        this.closeButton.addEventListener('click', this.lastListenerButton);
        this.backgroundBlur.addEventListener('click', this.lastListenerbackground);
    }

    addListener() {
        this.openButton.addEventListener('click', this.buttonListener.bind(this));
    }
}
