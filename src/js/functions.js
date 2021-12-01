'use strick';

export function isOverflowed(el) {
    return el.scrollHeight > el.clientHeight;
}

export function buttonListener(button) {
    if (!button.parameters.isActiveButton) {
        button.block.style.maxHeight = `${button.block.scrollHeight}px`;
        button.text.textContent = 'Скрыть';
        button.parameters.isActiveButton = true;
        button.button.classList.add('rotate');
    } else {
        button.block.removeAttribute('style');
        button.parameters.isActiveButton = false;
        button.text.textContent = button.parameters.text;
        button.button.classList.remove('rotate');
    }
}

