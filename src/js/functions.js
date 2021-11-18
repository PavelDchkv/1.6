'use strick';

export function isOverflowed(el) {
    return el.scrollHeight > el.clientHeight;
}

export function buttonListener(button) {
    if (!button.parameters.isActiveButton) {
        button.block.classList.add('page-content--max-height');
        button.text.textContent = 'Скрыть';
        button.parameters.isActiveButton = true;
        button.button.classList.add('rotate');
    } else {
        button.block.classList.remove('page-content--max-height');
        button.parameters.isActiveButton = false;
        button.text.textContent = 'Показать все';
        button.button.classList.remove('rotate');
    }
}

