export const inputsMask = () => {
    const input = document.querySelectorAll(".js-focus");

    const addFocus = (input) => {
        input.classList.add('is-focus');
    };
    const removeFocus = (input) => {
        input.classList.remove('is-focus');
    };

    window.toggleFocus = () => {
        for (let currentInput of input) {
            if (currentInput.value !== '') {
                addFocus(currentInput);
            }
        }
    };
    toggleFocus();

    for (let currentInput of input) {
        currentInput.addEventListener('focus', function () {
            addFocus(currentInput);
        });
        currentInput.addEventListener('focusout', function () {
            if (currentInput.value === '') {
                removeFocus(currentInput);
            }
        });
    }
}